import React from 'react';
import {
  Wrench,
  Boxes,
  Users,
  DollarSign,
  Car,
  Calendar,
  Receipt,
  TrendingUp
} from 'lucide-react';
import { Card } from '../ui/Card';
import SplitText from '../ui/SplitText';

export const SolutionBento: React.FC = () => {
  const modules = [
    {
      title: 'Ordens de Serviço',
      desc: 'Abra acompanhe e finalize OS em poucos cliques com checklist digital',
      icon: <Wrench className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Estoque de Peças',
      desc: 'Controle entradas saídas e alertas de reposição com baixa automática',
      icon: <Boxes className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'CRM e Vendas',
      desc: 'Organize clientes e envie orçamentos direto no WhatsApp',
      icon: <Users className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Financeiro e DRE',
      desc: 'Acompanhe receitas despesas fluxo de caixa e lucro real',
      icon: <DollarSign className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Histórico por Placa',
      desc: 'Consulte manutenções e peças trocadas digitando a placa',
      icon: <Car className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Agenda de Boxes',
      desc: 'Distribua serviços entre mecânicos sem filas no pátio',
      icon: <Calendar className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Emissão Fiscal',
      desc: 'Emita notas fiscais de serviço e peças com integração SEFAZ',
      icon: <Receipt className="w-5 h-5 text-[#00E676]" />
    },
    {
      title: 'Relatórios e Métricas',
      desc: 'Tenha visão clara do ticket médio e faturamento mensal',
      icon: <TrendingUp className="w-5 h-5 text-[#00E676]" />
    }
  ];

  return (
    <section id="recursos" className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com SplitText e subtítulo contido na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-8 text-center">
          <SplitText
            tag="h2"
            text="Tudo o que sua empresa precisa em um só lugar"
            className="text-xl xs:text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center"
          />
          <p className="text-xs sm:text-sm text-zinc-600 font-medium text-center">
            A plataforma MechOS conecta a recepção ao financeiro com máxima agilidade
          </p>
        </div>

        {/* Grid de Cards Menores e Fáceis de Rolar */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-left">
          {modules.map((mod, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 bg-slate-50 border border-zinc-200 hover:border-[#00E676] rounded-xl sm:rounded-2xl transition-all shadow-sm space-y-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
                {mod.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 font-steel uppercase leading-snug">
                  {mod.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-600 mt-1 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionBento;
