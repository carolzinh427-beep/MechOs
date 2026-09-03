import React from 'react';
import { Quote, Star, Building2, User } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export const Testimonials: React.FC = () => {
  const placeholders = [
    {
      quote: '"Depoimento do cliente ressaltando a facilidade no controle de Ordens de Serviço e o ganho de tempo no atendimento da recepção."',
      author: 'Nome do Proprietário',
      company: 'Nome da Empresa / Oficina',
      segment: 'Segmento Automotivo'
    },
    {
      quote: '"Depoimento do cliente destacando a transparência no histórico do veículo e o aumento na retenção de revisões preventivas."',
      author: 'Nome do Gerente',
      company: 'Nome do Centro Automotivo',
      segment: 'Centro Automotivo'
    },
    {
      quote: '"Depoimento do cliente sobre o controle financeiro, alerta de estoque baixo e apoio do Assistente IA nas tomadas de decisão."',
      author: 'Nome do Gestor',
      company: 'Nome da Oficina de Motos / Especializada',
      segment: 'Especializada'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            O que dizem os gestores que usam o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Estrutura preparada para depoimentos e resultados reais dos nossos parceiros em todo o Brasil.
          </p>
        </div>

        {/* Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((p, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-8 bg-[#141722] border-[#242838] hover:border-[#00E676]/50 space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#00E676]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#00E676]/40" />
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  {p.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#242838] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F111A] border border-[#242838] flex items-center justify-center text-[#00E676]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{p.author}</p>
                  <p className="text-[11px] text-zinc-400">{p.company} • <span className="text-[#00E676]">{p.segment}</span></p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
