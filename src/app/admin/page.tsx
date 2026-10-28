'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Calendar, Trash2, RefreshCw, Lock, CheckCircle, Clock } from 'lucide-react'

// Definição do tipo de Agendamento
interface Appointment {
  id: string
  appointment_date: string
  appointment_time: string
  notes: string
  created_at: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  })
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Senha simples de acesso ao painel (pode ser alterada aqui)
  const ADMIN_PASSWORD = 'admin'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setMessage('')
    } else {
      setMessage('⚠️ Senha incorreta!')
    }
  }

  // Busca os agendamentos do dia selecionado
  const fetchAppointments = async () => {
    setLoading(true)
    setMessage('')
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('appointment_date', selectedDate)
        .order('appointment_time', { ascending: true })

      if (error) throw error
      setAppointments(data || [])
    } catch (err: any) {
      console.error('Erro ao carregar agenda:', err)
      setMessage(`Erro: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchAppointments()
    }
  }, [selectedDate, isAuthenticated])

  // Cancela / Exclui um agendamento
  const handleDelete = async (id: string, time: string) => {
    const confirmDelete = window.confirm(`Tem certeza que deseja cancelar o agendamento das ${time}?`)
    if (!confirmDelete) return

    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id)

      if (error) throw error

      setMessage('Agendamento cancelado com sucesso e horário liberado!')
      fetchAppointments()
    } catch (err: any) {
      console.error('Erro ao cancelar:', err)
      setMessage(`Erro ao cancelar: ${err.message}`)
    }
  }

  // TELA DE LOGIN DO ADMIN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-700">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">Painel da Dra. Ana</h1>
          <p className="text-sm text-slate-500 text-center mb-6">Digite a senha para acessar a agenda de atendimentos</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
              Entrar no Painel
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm font-semibold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
              {message}
            </p>
          )}
        </div>
      </div>
    )
  }

  // PAINEL DE CONTROLE DA AGENDA
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* CABEÇALHO */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Agenda de Atendimentos</h1>
            <p className="text-sm text-slate-500">Gestão e controle de horários marcados</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 w-full md:w-auto">
              <Calendar size={18} className="text-purple-600" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-slate-800 text-sm font-semibold outline-none w-full"
              />
            </div>

            <button
              onClick={fetchAppointments}
              className="p-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl border border-purple-200 transition"
              title="Atualizar agenda"
            >
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {message && (
          <div className="p-4 bg-purple-50 border border-purple-200 text-purple-900 rounded-xl text-sm font-medium flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            {message}
          </div>
        )}

        {/* LISTA DE ATENDIMENTOS */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Consultas para {selectedDate.split('-').reverse().join('/')}
            </span>
            <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">
              {appointments.length} agendamento(s)
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <RefreshCw size={24} className="animate-spin mx-auto mb-2 text-purple-600" />
              Carregando agendamentos...
            </div>
          ) : appointments.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              Nenhum agendamento encontrado para esta data.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {appointments.map((app) => (
                <div key={app.id} className="p-5 hover:bg-slate-50/80 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 font-extrabold text-purple-900 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200 text-base">
                        <Clock size={16} className="text-purple-600" /> {app.appointment_time}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 pt-1 font-medium">
                      {app.notes || 'Sem observações'}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(app.id, app.appointment_time)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg border border-red-200 transition"
                  >
                    <Trash2 size={14} /> Cancelar Horário
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}