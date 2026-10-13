import React, { useState } from 'react';
import { Bot, User, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface AISectionProps {
  onOpenTrial: () => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenTrial }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const qnaList = [
    {
      question: 'Quanto faturei este mês',
      answer: 'Seu faturamento acumulado é de R$ 48.920,00 com ticket médio por OS de R$ 385,00'
    },
    {
      question: 'Quais clientes não voltam há 6 meses',
      answer: 'Encontrei 37 clientes com revisões vencidas há mais de 6 meses prontos para contato via WhatsApp'
    },
    {
      question: 'Quais peças estão no estoque mínimo',
      answer: '12 produtos precisam de reposição como Filtro de Óleo Mann e Pastilhas Cobreq'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#00E676]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-10 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-steel uppercase text-center">
            Sua empresa ganhou um <span className="text-[#00E676]">novo assistente</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400 leading-relaxed text-center font-medium">
            Use inteligência artificial para transformar os dados da sua operação em decisões mais rápidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center text-left">
          {/* Left Column: Perguntas Rápidas */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Simular pergunta para IA
            </p>
            <div className="flex flex-col gap-1.5">
              {qnaList.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuestion(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                    activeQuestion === idx
                      ? 'bg-[#00E676]/10 border-[#00E676] text-white font-bold'
                      : 'bg-[#141722] border-[#242838] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className="text-[11px] sm:text-xs">
                    {item.question}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#00E676] transition-transform ${activeQuestion === idx ? 'translate-x-1' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Button variant="electric" size="md" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Testar IA na Minha Empresa
              </Button>
            </div>
          </div>

          {/* Right Simulated Interactive Chat Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#00E676]/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#242838]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676]">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">
                    MechOS AI Assistente
                  </h3>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="bg-[#0F111A] border border-[#242838] rounded-xl p-3 sm:p-5 space-y-2.5 min-h-[180px] sm:min-h-[220px] flex flex-col justify-end">
                {/* User Message */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-[#00E676] text-zinc-950 font-bold rounded-xl p-2 text-xs max-w-xs shadow-md">
                    {qnaList[activeQuestion].question}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                    <User className="w-3 h-3" />
                  </div>
                </div>

                {/* AI Response Message */}
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676] shrink-0">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-[#1C202E] border border-[#242838] text-zinc-100 rounded-xl p-2.5 text-xs max-w-xs sm:max-w-lg leading-relaxed space-y-1">
                    <p className="font-semibold text-white text-xs">Resposta da IA:</p>
                    <p className="text-zinc-300 text-xs">{qnaList[activeQuestion].answer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AISection;
