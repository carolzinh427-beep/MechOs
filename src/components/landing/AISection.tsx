import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Send, User, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface AISectionProps {
  onOpenTrial: () => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenTrial }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const qnaList = [
    {
      question: 'Quanto faturei este mês?',
      answer: 'Seu faturamento acumulado até agora é de R$ 48.920,00, representando um aumento de +17,8% em relação ao mesmo período do mês anterior. O ticket médio atual por OS é R$ 385,00.'
    },
    {
      question: 'Quais clientes não voltam há mais de 6 meses?',
      answer: 'Encontrei 37 clientes com revisões ou trocas de óleo vencidas (> 6 meses). Deseja que eu gere uma lista para iniciar um follow-up de retorno via WhatsApp?'
    },
    {
      question: 'Quais peças estão próximas do estoque mínimo?',
      answer: '12 produtos precisam de reposição imediata. Os itens críticos são: Filtro de Óleo Mann W712/95 (6 UN restantes) e Pastilhas Cobreq Dianteiras (4 JG restantes).'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07080C] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#00E676]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Sua empresa ganhou um <span className="text-[#00E676]">novo assistente.</span>
            </h2>

            <p className="text-base text-zinc-400 leading-relaxed">
              Use inteligência artificial para transformar os dados da sua operação em decisões mais rápidas. Pergunte qualquer coisa em linguagem natural e receba análises em segundos.
            </p>

            {/* Question Selector Pills */}
            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Clique para simular uma pergunta à IA:
              </p>
              <div className="flex flex-col gap-2">
                {qnaList.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQuestion(idx)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      activeQuestion === idx
                        ? 'bg-[#00E676]/10 border-[#00E676] text-white font-bold glow-electric-subtle'
                        : 'bg-[#141722] border-[#242838] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#00E676]" />
                      "{item.question}"
                    </span>
                    <ArrowRight className={`w-4 h-4 text-[#00E676] transition-transform ${activeQuestion === idx ? 'translate-x-1' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="electric" size="lg" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />}>
                Testar IA na Minha Empresa
              </Button>
            </div>
          </div>

          {/* Right Simulated Interactive Chat Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#00E676]/40 rounded-3xl p-4 sm:p-6 shadow-2xl glow-electric space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#242838]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      MechOS AI Co-Pilot <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                    </h3>
                    <p className="text-[10px] text-zinc-400">Assistente de Gestão em Tempo Real</p>
                  </div>
                </div>
                <Badge variant="electric" size="sm">Online</Badge>
              </div>

              {/* Chat Thread */}
              <div className="bg-[#0F111A] border border-[#242838] rounded-2xl p-4 sm:p-6 space-y-4 min-h-[300px] flex flex-col justify-end">
                {/* User Message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#00E676] text-zinc-950 font-bold rounded-2xl p-3.5 text-xs sm:text-sm max-w-lg shadow-md">
                    "{qnaList[activeQuestion].question}"
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* AI Response Message */}
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center text-[#00E676] shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#1C202E] border border-[#242838] text-zinc-100 rounded-2xl p-4 text-xs sm:text-sm max-w-lg leading-relaxed space-y-2">
                    <p className="font-semibold text-white">Análise do Sistema:</p>
                    <p className="text-zinc-300">{qnaList[activeQuestion].answer}</p>
                    <div className="pt-2 border-t border-zinc-800 text-[10px] text-[#00E676] font-mono flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Resposta gerada em 0.4s • Dados sincronizados
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Input Bar */}
              <div className="flex items-center gap-2 bg-[#0F111A] border border-[#242838] rounded-xl p-2">
                <input
                  type="text"
                  readOnly
                  value={qnaList[activeQuestion].question}
                  className="flex-1 bg-transparent px-3 text-xs text-zinc-400 focus:outline-none"
                />
                <Button variant="electric" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                  Perguntar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
