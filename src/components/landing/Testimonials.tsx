import React from 'react';
import { Quote, Star, User } from 'lucide-react';
import { Card } from '../ui/Card';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: '"Reduzimos o tempo de recepção de OS pela metade com orçamentos direto no WhatsApp."',
      author: 'Carlos Alberto',
      company: 'Auto Center Performance',
      segment: 'Centro Automotivo'
    },
    {
      quote: '"Resgatamos mais de 40 clientes sumidos no 1º mês com os alertas de revisão do sistema."',
      author: 'Marcelo Mendonça',
      company: 'Mendonça Motos & Peças',
      segment: 'Oficina de Motos'
    },
    {
      quote: '"Organização total de estoque e margem de lucro real de cada serviço com IA."',
      author: 'Renata Silveira',
      company: 'Silveira Injeção & Freios',
      segment: 'Oficina Mecânica'
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-steel uppercase">
            O que dizem os gestores que usam o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-[11px] sm:text-base text-zinc-400">
            Veja como empresas de todo o Brasil transformaram sua gestão.
          </p>
        </div>

        {/* Testimonials Grid: no mobile são menores e ficam uma ao lado da outra! */}
        <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 md:gap-6">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-2 xs:p-2.5 sm:p-5 md:p-6 bg-[#141722] border-[#242838] hover:border-[#00E676]/50 rounded-xl sm:rounded-2xl space-y-2 sm:space-y-4 shadow-sm"
            >
              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-center gap-0.5 text-[#00E676]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-3.5 h-3.5 sm:w-7 sm:h-7 text-[#00E676]/30" />
                <p className="text-[10px] xs:text-[11px] sm:text-sm text-zinc-300 italic leading-snug sm:leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-1.5 sm:pt-3 border-t border-[#242838] flex items-center gap-1.5 sm:gap-2.5">
                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-9 sm:h-9 rounded-full bg-[#0F111A] border border-[#242838] flex items-center justify-center text-[#00E676] shrink-0">
                  <User className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-white truncate">{t.author}</p>
                  <p className="text-[8px] sm:text-[10px] text-zinc-400 truncate hidden xs:block">{t.company}</p>
                  <p className="text-[8px] sm:text-[10px] text-[#00E676] font-semibold truncate">{t.segment}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
