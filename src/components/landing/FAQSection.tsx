import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'O MechOS serve para o meu tipo de negócio automotivo?',
      a: 'Sim! O MechOS foi desenvolvido para atender oficinas mecânicas, oficinas de motos, autoelétricas, ar-condicionado, centros automotivos, troca de óleo, pneus, funilaria e estética automotiva (detailing).'
    },
    {
      q: 'Preciso instalar algum programa no meu computador?',
      a: 'Não. O MechOS é 100% em nuvem. Você pode acessar pelo computador, tablet ou celular com acesso à internet.'
    },
    {
      q: 'Como funciona o teste grátis de 3 dias?',
      a: 'Você se cadastra em menos de 1 minuto sem precisar informar cartão de crédito. Durante 3 dias você tem acesso total para testar com sua equipe.'
    },
    {
      q: 'É fácil emitir Ordens de Serviço (OS)?',
      a: 'Sim! Em menos de 3 minutos você cria uma OS completa, insere as peças aplicadas, a mão de obra e gera o orçamento para envio via WhatsApp.'
    },
    {
      q: 'O sistema emite Nota Fiscal (NF-e e NFS-e)?',
      a: 'Sim, o plano Premium inclui emissão integrada de notas fiscais de serviço (NFS-e) e produtos (NF-e).'
    },
    {
      q: 'Consigo acessar pelo meu celular?',
      a: 'Com certeza! O MechOS é 100% otimizado para celulares e tablets.'
    }
  ];

  return (
    <section id="faq" className="py-4 sm:py-8 bg-[#0A0C14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Trigger Button to keep section hidden and space-efficient */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <HelpCircle className="w-4 h-4 text-[#00E676]" />
            <span>Perguntas Frequentes (FAQ)</span>
            <ChevronDown className={`w-4 h-4 text-[#00E676] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Collapsible FAQ Content */}
        {isExpanded && (
          <div className="mt-6 space-y-3 animate-fadeIn">
            <div className="text-center space-y-1 mb-6">
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                Perguntas <span className="text-[#00E676]">Frequentes</span>
              </h2>
              <p className="text-xs text-zinc-400">
                Tire suas dúvidas sobre o MechOS.
              </p>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#141722] border border-[#242838] rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-white text-xs sm:text-sm focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00E676] shrink-0 transition-transform ${
                        openIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === idx && (
                    <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 text-xs text-zinc-400 leading-relaxed border-t border-[#242838]/60 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
