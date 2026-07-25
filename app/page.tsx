'use client';

import React from 'react';
import { Phone, Calendar, Heart, Award, ShieldCheck, MapPin } from 'lucide-react';

export default function Home() {
  // CONFIGURAÇÕES - DADOS DA DRA. ANA ROSINETE
  const nomeNamorada = "Ana Rosinete Batista Cardoso"; 
  const crecito = "XX/XXXXX-F"; 
  const whatsappNumber = "5579988566625"; // DDD + Número (apenas números)
  const instagramUser = "ana_nafisio"; // Usuário do Insta sem o @

  // Geração automática dos links
  const whatsappMessage = encodeURIComponent(`Olá Dra. ${nomeNamorada}! Gostaria de agendar uma avaliação de fisioterapia.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = `https://instagram.com/${instagramUser}`;

  return (
    <div className="min-h-screen bg-purple-50/50 text-slate-800 font-sans antialiased">
      
      {/* 1. CABEÇALHO (Navbar) */}
      <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-purple-900 tracking-tight">Dra. {nomeNamorada}</span>
            <span className="text-xs text-purple-600 font-semibold tracking-wide">FISIOTERAPIA & BEM-ESTAR</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Phone size={16} className="animate-pulse"/> Agendar Avaliação
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Texto e Botões */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold border border-purple-200 shadow-sm">
              <Heart size={16} className="text-pink-500 fill-pink-500"/> Atendimento Individualizado e Humanizado
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-950 leading-tight tracking-tighter">
              Sua jornada para uma <br /> vida <span className="text-purple-700 relative">sem dor
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-pink-200/70 -z-10 rounded-full"></span>
              </span> começa aqui.
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto md:mx-0">
              Recupere sua mobilidade, alivie tensões e previna lesões com tratamentos personalizados de fisioterapia e técnicas avançadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-lg shadow-purple-200 hover:shadow-xl flex items-center justify-center gap-2.5 transform hover:scale-105"
              >
                <Calendar size={20} /> Agendar via WhatsApp
              </a>
              <a
                href="#especialidades"
                className="bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200/60 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all flex items-center justify-center gap-2.5"
              >
                Conhecer Tratamentos
              </a>
            </div>
          </div>

          {/* Foto com luzes de fundo combinando */}
          <div className="flex-1 w-full flex justify-center items-center relative">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-70"></div>
            
            <div className="relative z-10 w-80 h-96 md:w-96 md:h-[28rem] bg-slate-100 rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-purple-100 flex items-center justify-center group">
              <img 
                src="/foto-fisioterapeuta.jpeg" 
                alt={`Dra. ${nomeNamorada}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ESPECIALIDADES */}
      <section id="especialidades" className="py-24 md:py-32 bg-purple-50/40 border-y border-purple-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">Especialidades & Tratamentos</h2>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed">Protocolos modernos e baseados em evidências, desenhados especificamente para a sua necessidade e queixa clínica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-700 mb-8 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">Fisioterapia Analgésica</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Foco total no alívio de dores agudas e crônicas (coluna, articulações, dores de cabeça) utilizando técnicas manuais e recursos modernos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-8 border border-pink-200 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">Liberação Miofascial</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Técnica manual profunda para desativar pontos de gatilho, eliminar restrições na fáscia muscular, melhorar a circulação e reduzir a rigidez.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-8 border border-amber-200 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-4 tracking-tight">Atendimento Domiciliar</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Conforto e conveniência do atendimento *Home Care*. Receba tratamento profissional no aconchego do seu lar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RODAPÉ */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-3">
            <p className="text-white font-extrabold text-2xl tracking-tight">Dra. {nomeNamorada}</p>
            {crecito && <p className="text-xs font-semibold tracking-wide text-purple-300 bg-purple-900/50 border border-purple-700/50 inline-block px-3 py-1 rounded-full">CREFITO: {crecito}</p>}
            <p className="text-xs pt-4 text-slate-500">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Contato & Agendamento</h4>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
              <Phone size={18} className="text-purple-400" /> +{whatsappNumber}
            </a>
            <div className="flex items-center gap-2.5 justify-center md:justify-start">
               <MapPin size={18} className="text-purple-400" /> Atendimento em Consultório & Home Care
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Siga nas Redes</h4>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
              <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {`@${instagramUser}`}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}