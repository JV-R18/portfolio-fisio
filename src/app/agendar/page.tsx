'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

const PROCEDIMENTOS = [
  { id: 'avaliacao', nome: 'Avaliação Inicial / Anamnese', duracao: 60 },
  { id: 'liberacao', nome: 'Liberação Miofascial', duracao: 50 },
  { id: 'domiciliar', nome: 'Atendimento Domiciliar', duracao: 50 },
  { id: 'drenagem', nome: 'Drenagem Linfática', duracao: 50 },
  { id: 'modeladora', nome: 'Massagem Modeladora', duracao: 50 },
  { id: 'pedras_quentes', nome: 'Massagem com Pedras Quentes', duracao: 50 },
  { id: 'relaxante', nome: 'Massagem Relaxante', duracao: 50 },
]

const HORARIOS_BASE = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
]

export default function AgendarPage() {
  const [patientName, setPatientName] = useState('')
  const [patientPhone, setPatientPhone] = useState('')
  const [date, setDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [procedureId, setProcedureId] = useState(PROCEDIMENTOS[0].id)
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [occupiedSlots, setOccupiedSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)

  const timeToMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + minutes
  }

  useEffect(() => {
    if (!date) return

    const fetchOccupiedSlots = async () => {
      setLoadingSlots(true)
      setSelectedTime('')

      try {
        const { data: appointments, error } = await supabase
          .from('appointments')
          .select('appointment_time, notes')
          .eq('appointment_date', date)

        if (error) throw error

        const selectedProcedure = PROCEDIMENTOS.find(p => p.id === procedureId) || PROCEDIMENTOS[0]
        const currentProcDuration = selectedProcedure.duracao
        const blocked: string[] = []

        HORARIOS_BASE.forEach((slotTime) => {
          const slotStart = timeToMinutes(slotTime)
          const slotEnd = slotStart + currentProcDuration

          if (appointments && appointments.length > 0) {
            for (const app of appointments) {
              const existStart = timeToMinutes(app.appointment_time)
              let existDuration = 60
              
              const durationMatch = app.notes?.match(/\[Duração: (\d+)min\]/)
              if (durationMatch) {
                existDuration = parseInt(durationMatch[1], 10)
              }

              const existEnd = existStart + existDuration

              if (slotStart < existEnd && slotEnd > existStart) {
                blocked.push(slotTime)
                break
              }
            }
          }
        })

        setOccupiedSlots(blocked)
      } catch (err) {
        console.error('Erro ao carregar horários ocupados:', err)
      } finally {
        setLoadingSlots(false)
      }
    }

    fetchOccupiedSlots()
  }, [date, procedureId])

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTime) {
      setMessage('⚠️ Por favor, escolha um horário na grade abaixo.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const selectedProcedure = PROCEDIMENTOS.find(p => p.id === procedureId) || PROCEDIMENTOS[0]
      const fullNotes = `[Paciente: ${patientName}] [Tel: ${patientPhone}] [Procedimento: ${selectedProcedure.nome}] [Duração: ${selectedProcedure.duracao}min] ${notes}`.trim()

      const { error: insertError } = await supabase
        .from('appointments')
        .insert([
          {
            appointment_date: date,
            appointment_time: selectedTime,
            notes: fullNotes,
          },
        ])

      if (insertError) throw insertError

      setMessage('Agendamento realizado com sucesso! Redirecionando para o WhatsApp...')

      const whatsappNumber = '5579988566625'
      const [year, month, day] = date.split('-')
      const formattedDate = `${day}/${month}/${year}`

      const textMessage = `Olá Dra. Ana Rosinete! Fiz um agendamento pelo site:%0A%0A*Paciente:* ${patientName}%0A*Telefone:* ${patientPhone}%0A*Procedimento:* ${selectedProcedure.nome}%0A*Data:* ${formattedDate}%0A*Horário:* ${selectedTime} (${selectedProcedure.duracao} min)%0A*Observações:* ${encodeURIComponent(notes || 'Nenhuma')}`

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${textMessage}`

      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 1500)

    } catch (err: any) {
      console.error('Erro no agendamento:', err)
      setMessage(`Erro ao agendar: ${err.message || 'Falha na comunicação com o servidor'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Agendar Consulta
        </h1>
        <form onSubmit={handleBooking} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo *</label>
            <input
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 p-2.5 text-slate-900 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Telefone *</label>
            <input
              type="tel"
              required
              placeholder="(79) 99999-9999"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 p-2.5 text-slate-900 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Procedimento *</label>
            <select
              value={procedureId}
              onChange={(e) => setProcedureId(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 p-2.5 text-slate-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white"
            >
              {PROCEDIMENTOS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome} ({p.duracao} min)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Selecione a Data *</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full rounded-lg border border-slate-300 p-2.5 text-slate-900 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {date && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Horários Disponíveis {loadingSlots && <span className="text-xs text-purple-600 animate-pulse">(Atualizando...)</span>}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {HORARIOS_BASE.map((slot) => {
                  const isOccupied = occupiedSlots.includes(slot)
                  const isSelected = selectedTime === slot

                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={isOccupied}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2 px-1 text-sm font-semibold rounded-lg border transition-all ${
                        isOccupied
                          ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed line-through'
                          : isSelected
                          ? 'bg-purple-600 text-white border-purple-600 shadow-md ring-2 ring-purple-300'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-purple-500 hover:text-purple-600'
                      }`}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Observações / Sintomas</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Descreva o motivo da consulta ou dores..."
              className="block w-full rounded-lg border border-slate-300 p-2.5 text-slate-900 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !selectedTime}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md disabled:opacity-50"
          >
            {loading ? 'Confirmando...' : 'Confirmar e Enviar para WhatsApp'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center text-sm font-semibold p-3 rounded-lg ${
            message.includes('⚠️') || message.includes('Erro') 
              ? 'bg-amber-50 text-amber-800 border border-amber-200' 
              : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}