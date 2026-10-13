import React from 'react';
import {
  FileX,
  MessageSquareOff,
  Boxes,
  UserX,
  DollarSign,
  History,
  ArrowDown
} from 'lucide-react';
import { Card } from '../ui/Card';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Orçamentos perdidos',
      description: 'Cotações enviadas por texto no WhatsApp que caem no esquecimento e viram vendas perdidas.',
      icon: <MessageSquareOff className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    },
    {
      title: 'OS desorganizadas',
      description: 'Blocos de papel e pranchas rasgadas que dificultam saber o status exato de cada serviço.',
      icon: <FileX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    },
    {
      title: 'Estoque sem controle',
      description: 'Peças faltando na hora do serviço ou acumuladas gerando prejuízo no caixa.',
      icon: <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    },
    {
      title: 'Clientes esquecidos',
      description: 'Sem lembretes automáticos para revisões preventivas, trocas de óleo e retornos.',
      icon: <UserX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    },
    {
      title: 'Contas espalhadas',
      description: 'Despesas anotadas em cadernos e falta de clareza sobre o lucro real do mês.',
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    },
    {
      title: 'Falta de histórico',
      description: 'Não saber quais peças foram trocadas anteriormente no veículo do cliente.',
      icon: <History className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white border-y border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase">
            Sua empresa ainda depende de papel, planilhas e WhatsApp?
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 font-medium">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento.
          </p>
        </div>

        {/* Problem Grid: 2 columns on mobile for compact view! */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
          {problems.map((prob, idx) => (
            <Card
              key={idx}
              className="bg-slate-50 border border-zinc-200/90 hover:border-rose-400 p-2.5 sm:p-5 space-y-1.5 sm:space-y-2 rounded-xl sm:rounded-2xl shadow-sm transition-all"
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center">
                {prob.icon}
              </div>
              <h3 className="text-xs sm:text-lg font-bold text-zinc-950 leading-tight font-steel">{prob.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-relaxed hidden sm:block">{prob.description}</p>
            </Card>
          ))}
        </div>

        {/* Transition callout */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center space-y-1.5 sm:space-y-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676] animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <p className="text-base sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight font-steel uppercase">
            Existe uma forma <span className="text-[#00E676]">mais simples e lucrativa</span>
          </p>
        </div>
      </div>
    </section>
  );
};
