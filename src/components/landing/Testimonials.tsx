import React from 'react';
import { Quote, Star, User } from 'lucide-react';
import { Card } from '../ui/Card';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: '"O MechOS mudou completamente o controle das nossas ordens de serviço. Reduzimos o tempo de recepção pela metade e enviamos orçamentos em PDF pelo WhatsApp."',
      author: 'Carlos Alberto',
      company: 'Auto Center Performance',
      segment: 'Centro Automotivo'
    },
    {
      quote: '"Conseguimos resgatar mais de 40 clientes sumidos no primeiro mês usando os alertas de revisão preventiva do sistema. O ROI foi imediato."',
      author: 'Marcelo Mendonça',
      company: 'Mendonça Motos & Peças',
      segment: 'Oficina de Motos'
    },
    {
      quote: '"A organização do estoque e os relatórios com inteligência artificial nos deram clareza total sobre a margem de lucro real de cada serviço."',
      author: 'Renata Silveira',
      company: 'Silveira Injeção & Freios',
      segment: 'Oficina Mecânica'
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            O que dizem os gestores que usam o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Veja como empresas de todo o Brasil transformaram sua gestão.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-3.5 sm:p-6 bg-[#141722] border-[#242838] hover:border-[#00E676]/50 space-y-3 sm:space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#00E676]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#00E676]/40" />
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-3 border-t border-[#242838] flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0F111A] border border-[#242838] flex items-center justify-center text-[#00E676]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{t.author}</p>
                  <p className="text-[10px] text-zinc-400">{t.company} <span className="text-[#00E676]">{t.segment}</span></p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
