import React from 'react';
import { ArrowDown, AlertTriangle } from 'lucide-react';
import SplitText from '../ui/SplitText';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Orçamentos perdidos',
      description: 'Cotações enviadas por texto no WhatsApp que caem no esquecimento e viram vendas perdidas'
    },
    {
      title: 'OS desorganizadas',
      description: 'Blocos de papel e pranchas rasgadas que dificultam saber o status exato de cada serviço'
    },
    {
      title: 'Estoque sem controle',
      description: 'Peças faltando na hora do serviço ou acumuladas gerando prejuízo no caixa'
    },
    {
      title: 'Clientes esquecidos',
      description: 'Sem lembretes automáticos para revisões preventivas trocas de óleo e retornos'
    },
    {
      title: 'Contas espalhadas',
      description: 'Despesas anotadas em cadernos e falta de clareza sobre o lucro real do mês'
    },
    {
      title: 'Falta de histórico',
      description: 'Não saber quais peças foram trocadas anteriormente no veículo do cliente'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Header Centralizado com SplitText */}
        <div className="max-w-xl mx-auto space-y-2 text-center">
          <SplitText
            tag="h2"
            text="Sua empresa ainda depende de papel planilhas e WhatsApp"
            className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase leading-tight text-center"
          />
          <p className="text-xs sm:text-base text-zinc-600 font-medium leading-relaxed text-center">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento na sua oficina
          </p>
        </div>

        {/* Frases dos problemas apresentadas de forma limpa, direta e sem efeitos pesados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-zinc-200 bg-zinc-50/70 hover:border-zinc-300 transition-colors space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-zinc-950 font-steel uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition callout */}
        <div className="pt-2 sm:pt-4 space-y-2 text-center max-w-xl mx-auto">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676] animate-bounce shadow-sm">
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <p className="text-sm xs:text-base sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
            Existe uma forma <span className="text-[#00E676]">mais simples e lucrativa</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
