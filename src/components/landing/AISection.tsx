import React, { useState } from 'react';
import { Bot, Sparkles, Send, User, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface AISectionProps {
  onOpenTrial: () => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenTrial }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const qnaList = [
    {
      question: 'Quanto faturei este mês?',
      answer: 'Seu faturamento acumulado até agora é de R$ 48.920,00 (+17,8% vs mês anterior). Ticket médio por OS: R$ 385,00.'
    },
    {
      question: 'Quais clientes não voltam há 6 meses?',
      answer: 'Encontrei 37 clientes com revisões vencidas (> 6 meses). Deseja gerar a lista para contato via WhatsApp?'
    },
    {
      question: 'Quais peças estão no estoque mínimo?',
      answer: '12 produtos precisam de reposição. Críticos: Filtro de Óleo Mann (6 UN) e Pastilhas Cobreq (4 JG).'
    }
  ];

  return (
    <section className="py-10 md:py-28 bg-[#07080C] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#00E676]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Sua empresa ganhou um <span className="text-[#00E676]">novo assistente.</span>
            </h2>

            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">
              Use inteligência artificial para transformar os dados da sua operação em decisões mais rápidas.
            </p>

            {/* Question Selector Pills */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                Simular pergunta à IA:
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
                    <span className="flex items-center gap-2 text-[11px] sm:text-xs">
                      <Sparkles className="w-3 h-3 text-[#00E676] shrink-0" />
                      "{item.question}"
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-[#00E676] transition-transform ${activeQuestion === idx ? 'translate-x-1' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button variant="electric" size="md" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Testar IA na Minha Empresa
              </Button>
            </div>
          </div>

          {/* Right Simulated Interactive Chat Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#00E676]/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-2xl space-y-3 sm:space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#242838]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      MechOS AI Co-Pilot <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                    </h3>
                  </div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="bg-[#0F111A] border border-[#242838] rounded-xl p-3 sm:p-6 space-y-3 min-h-[200px] sm:min-h-[260px] flex flex-col justify-end">
                {/* User Message */}
                <div className="flex gap-2 justify-end">
                  <div className="bg-[#00E676] text-zinc-950 font-bold rounded-xl p-2.5 text-xs max-w-xs shadow-md">
                    "{qnaList[activeQuestion].question}"
                  </div>
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* AI Response Message */}
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676] shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[#1C202E] border border-[#242838] text-zinc-100 rounded-xl p-3 text-xs max-w-xs sm:max-w-lg leading-relaxed space-y-1">
                    <p className="font-semibold text-white text-xs">Análise MechOS AI:</p>
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
