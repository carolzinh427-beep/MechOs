import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <section id="faq" className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Perguntas <span className="text-[#00E676]">Frequentes</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Tire suas dúvidas sobre o MechOS e comece a usar hoje mesmo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#141722] border border-[#242838] rounded-xl sm:rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-xs sm:text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-[#00E676] shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#242838]/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
