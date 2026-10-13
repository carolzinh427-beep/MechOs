import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'O MechOS serve para o meu tipo de negócio automotivo',
      a: 'Sim o MechOS foi desenvolvido para atender oficinas mecânicas oficinas de motos autoelétricas centros automotivos troca de óleo pneus e estética automotiva'
    },
    {
      q: 'Preciso instalar algum programa no meu computador',
      a: 'Não o MechOS é 100% em nuvem e você pode acessar pelo computador tablet ou celular com acesso à internet'
    },
    {
      q: 'Como funciona o teste grátis de 3 dias',
      a: 'Você se cadastra em menos de 1 minuto e tem acesso total durante 3 dias para testar todas as funcionalidades com sua equipe'
    },
    {
      q: 'É fácil emitir Ordens de Serviço',
      a: 'Sim em poucos minutos você cria uma OS completa insere peças mão de obra e envia o orçamento no WhatsApp'
    },
    {
      q: 'O sistema emite Nota Fiscal NF-e e NFS-e',
      a: 'Sim o plano Premium inclui emissão integrada de notas fiscais de serviço e produtos'
    },
    {
      q: 'Consigo acessar pelo meu celular',
      a: 'Com certeza o MechOS é totalmente otimizado para celulares e tablets'
    }
  ];

  return (
    <section id="faq" className="py-6 sm:py-8 md:py-10 bg-white border-y border-zinc-200 relative">
      <div className="max-w-4xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Trigger Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-slate-50 border border-zinc-300 hover:border-[#00E676] text-zinc-900 font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-[#00E676]" />
            <span className="font-steel tracking-wide uppercase">Perguntas Frequentes</span>
            <ChevronDown className={`w-4 h-4 text-[#00E676] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Collapsible FAQ Content */}
        {isExpanded && (
          <div className="mt-6 space-y-3 animate-fadeIn text-center">
            <div className="max-w-xl mx-auto space-y-1 mb-5 text-center">
              <h2 className="text-xl sm:text-3xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
                Perguntas <span className="text-[#00E676]">Frequentes</span>
              </h2>
              <p className="text-xs text-zinc-600 font-medium text-center">
                Tire suas dúvidas sobre o funcionamento do MechOS
              </p>
            </div>

            <div className="space-y-2 max-w-2xl mx-auto text-left">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-zinc-200 rounded-xl overflow-hidden bg-slate-50 transition-colors"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-zinc-900 hover:text-[#00E676] transition-colors cursor-pointer"
                    >
                      <span className="font-steel">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00E676] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-3 pb-3 sm:px-4 sm:pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-200/60 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FAQSection;
