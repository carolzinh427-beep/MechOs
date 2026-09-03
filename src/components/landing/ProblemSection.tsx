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
      icon: <MessageSquareOff className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    },
    {
      title: 'OS desorganizadas',
      description: 'Blocos de papel e pranchas rasgadas que dificultam saber o status exato de cada serviço.',
      icon: <FileX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    },
    {
      title: 'Estoque sem controle',
      description: 'Peças faltando na hora do serviço ou acumuladas gerando prejuízo no caixa.',
      icon: <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    },
    {
      title: 'Clientes esquecidos',
      description: 'Sem lembretes automáticos para revisões preventivas, trocas de óleo e retornos.',
      icon: <UserX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    },
    {
      title: 'Contas espalhadas',
      description: 'Despesas anotadas em cadernos e falta de clareza sobre o lucro real do mês.',
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    },
    {
      title: 'Falta de histórico',
      description: 'Não saber quais peças foram trocadas anteriormente no veículo do cliente.',
      icon: <History className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
    }
  ];

  return (
    <section className="py-10 md:py-28 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-14">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Sua empresa ainda depende de papel, planilhas e WhatsApp?
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento.
          </p>
        </div>

        {/* Problem Grid: 2 columns on mobile for compact view! */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {problems.map((prob, idx) => (
            <Card
              key={idx}
              className="bg-[#0F111A] border-rose-500/20 hover:border-rose-500/40 p-3 sm:p-6 space-y-2 rounded-xl sm:rounded-2xl"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                {prob.icon}
              </div>
              <h3 className="text-xs sm:text-lg font-bold text-white leading-tight">{prob.title}</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed hidden sm:block">{prob.description}</p>
            </Card>
          ))}
        </div>

        {/* Transition callout */}
        <div className="mt-8 md:mt-16 text-center space-y-2 sm:space-y-4">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676] animate-bounce">
            <ArrowDown className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <p className="text-lg sm:text-3xl font-black text-[#00E676] tracking-tight">
            Existe uma forma mais simples.
          </p>
        </div>
      </div>
    </section>
  );
};
