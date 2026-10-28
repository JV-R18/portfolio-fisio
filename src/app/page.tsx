'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Heart, Award, MapPin, Lock, Sparkles, Feather, Flame, Waves, Star, ChevronDown } from 'lucide-react';

export default function Home() {
  const nomeDra = "Ana Rosinete Batista Cardoso"; 
  const crecito = "XX/XXXXX-F"; 
  const whatsappNumber = "5579988566625"; 
  const instagramUser = "ana_nafisio"; 

  const instagramLink = `https://instagram.com/${instagramUser}`;

  // Estado para controlar a sanfona de perguntas frequentes (FAQ)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      pergunta: "Como funciona o atendimento domiciliar?",
      resposta: "O atendimento domiciliar (Home Care) leva toda a estrutura necessária de avaliação e tratamento até a sua residência, com foco total no seu conforto, comodidade e privacidade."
    },
    {
      pergunta: "Preciso de indicação médica para agendar uma consulta?",
      resposta: "Não é obrigatório. Na primeira consulta é realizada uma avaliação inicial detalhada (anamnese) para identificar a sua queixa e traçar o melhor plano de tratamento."
    },
    {
      pergunta: "Quais são as formas de pagamento aceites?",
      resposta: "Aceitamos pagamento via Pix, cartões de crédito e débito, além de emissão de recibo para pedido de reembolso junto ao seu plano de saúde."
    },
    {
      pergunta: "Como posso remarcar ou cancelar um agendamento?",
      resposta: "Pode solicitar o cancelamento ou remarcação diretamente através do nosso contacto de WhatsApp com pelo menos 24 horas de antecedência."
    }
  ];

  const depoimentos = [
    {
      nome: "Mariana Silva",
      texto: "A Dra. Ana é extremamente atenciosa e profissional. A sessão de liberação miofascial aliviou totalmente as minhas dores nas costas!",
      tratamento: "Liberação Miofascial",
      estrelas: 5
    },
    {
      nome: "Carlos Eduardo",
      texto: "O atendimento domiciliar foi um diferencial enorme para a recuperação da minha mobilidade. Excelente profissional!",
      tratamento: "Atendimento Domiciliar",
      estrelas: 5
    },
    {
      nome: "Fernanda Costa",
      texto: "A massagem relaxante e a drenagem linfática são fantásticas. Saio de cada sessão renovada!",
      tratamento: "Drenagem Linfática",
      estrelas: 5
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50/50 text-slate-800 font-sans antialiased">
      
      {/* CABEÇALHO */}
      <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-purple-900 tracking-tight">Dra. {nomeDra}</span>
            <span className="text-xs text-purple-600 font-semibold tracking-wide">FISIOTERAPIA & BEM-ESTAR</span>
          </div>
          
          <Link
            href="/agendar"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <Phone size={16} className="animate-pulse"/> Agendar Avaliação
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
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
              Recupere sua mobilidade, alivie tensões e promova seu bem-estar com tratamentos personalizados e técnicas terapêuticas avançadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center md:justify-start">
              <Link
                href="/agendar"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-lg shadow-purple-200 hover:shadow-xl flex items-center justify-center gap-2.5 transform hover:scale-105"
              >
                <Calendar size={20} /> Agendar Consulta
              </Link>

              <a
                href="#especialidades"
                className="bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200/60 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all flex items-center justify-center gap-2.5"
              >
                Conhecer Tratamentos
              </a>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center items-center relative">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-200 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-70"></div>
            
            <div className="relative z-10 w-80 h-96 md:w-96 md:h-[28rem] bg-slate-100 rounded-3xl overflow-hidden border-8 border-white shadow-2xl shadow-purple-100 flex items-center justify-center group">
              <img 
                src="/foto-fisioterapeuta.jpeg" 
                alt={`Dra. ${nomeDra}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-24 md:py-32 bg-purple-50/40 border-y border-purple-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">Especialidades & Tratamentos</h2>
            <p className="text-slate-600 mt-6 text-lg leading-relaxed">Protocolos modernos e personalizados, desenhados especificamente para a sua necessidade, alívio de dores e relaxamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-700 mb-6 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Avaliação Inicial / Anamnese</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Exame clínico detalhado para diagnóstico funcional, identificação de causas de dores e planejamento do tratamento ideal.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 border border-pink-200 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Liberação Miofascial</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Técnica manual profunda para desativar pontos de gatilho, eliminar nós de tensão muscular e devolver a mobilidade.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6 border border-amber-200 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Atendimento Domiciliar</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Toda a estrutura e cuidado da fisioterapia no conforto do seu lar, garantindo conveniência e acompanhamento dedicado.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Waves size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Drenagem Linfática</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Massagem suave que estimula o sistema linfático, reduz retenção de líquidos, inchaços e melhora a circulação corporal.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Feather size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Massagem Modeladora</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Movimentos mais firmes e rápidos que atuam na oxigenação dos tecidos, contorno corporal e ativação metabólica local.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 border border-orange-200 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Flame size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Massagem com Pedras Quentes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Terapia termoterapêutica profunda que combina o calor de pedras vulcânicas ao relaxamento físico e alívio do estresse.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all hover:shadow-xl transform hover:-translate-y-1 group lg:col-span-3 lg:w-1/3 lg:mx-auto">
              <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6 border border-rose-200 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Heart size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">Massagem Relaxante</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manobras suaves e contínuas para aliviar o cansaço do dia a dia, diminuir ansiedade e proporcionar bem-estar físico e mental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-white border-b border-purple-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">O que dizem os Pacientes</h2>
            <p className="text-slate-600 mt-4 text-base">A satisfação e o bem-estar de quem já vivenciou nossos atendimentos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((dep, index) => (
              <div key={index} className="p-8 rounded-2xl bg-purple-50/50 border border-purple-100 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(dep.estrelas)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-sm leading-relaxed">"{dep.texto}"</p>
                </div>
                <div className="pt-6 mt-6 border-t border-purple-100">
                  <p className="font-bold text-slate-900 text-sm">{dep.nome}</p>
                  <p className="text-xs text-purple-600 font-medium">{dep.tratamento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-24 bg-purple-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">Perguntas Frequentes</h2>
            <p className="text-slate-600 mt-4 text-base">Tire as suas dúvidas antes de realizar o seu agendamento.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:text-purple-700 transition-colors"
                >
                  <span>{faq.pergunta}</span>
                  <ChevronDown
                    size={20}
                    className={`text-purple-600 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-purple-50 pt-4">
                    {faq.resposta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-3">
            <p className="text-white font-extrabold text-2xl tracking-tight">Dra. {nomeDra}</p>
            {crecito && <p className="text-xs font-semibold tracking-wide text-purple-300 bg-purple-900/50 border border-purple-700/50 inline-block px-3 py-1 rounded-full">CREFITO: {crecito}</p>}
            
            <div className="flex flex-col gap-2 pt-4">
              <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
              <Link 
                href="/admin" 
                className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors pt-1 justify-center md:justify-start"
              >
                <Lock size={12} /> Área Restrita / Painel Admin
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Contato & Agendamento</h4>
            <Link href="/agendar" className="hover:text-purple-300 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
              <Phone size={18} className="text-purple-400" /> +{whatsappNumber}
            </Link>
            <div className="flex items-center gap-2.5 justify-center md:justify-start">
               <MapPin size={18} className="text-purple-400" /> Atendimento em Consultório & Domiciliar
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Siga nas Redes</h4>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors flex items-center gap-2.5 justify-center md:justify-start">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              {`@${instagramUser}`}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}