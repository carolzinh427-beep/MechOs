import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SplitText from '../ui/SplitText';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Reduzimos o tempo de recepção de OS pela metade com orçamentos direto no WhatsApp',
      author: 'Carlos Alberto',
      company: 'Auto Center Performance',
      segment: 'Centro Automotivo'
    },
    {
      quote: 'Resgatamos mais de 40 clientes sumidos no primeiro mês com os alertas de revisão do sistema',
      author: 'Marcelo Mendonça',
      company: 'Mendonça Motos e Peças',
      segment: 'Oficina de Motos'
    },
    {
      quote: 'Organização total de estoque e margem de lucro real de cada serviço com IA',
      author: 'Renata Silveira',
      company: 'Silveira Injeção e Freios',
      segment: 'Oficina Mecânica'
    },
    {
      quote: 'Histórico por placa e controle de comissões aumentaram nosso faturamento em 32%',
      author: 'Thiago Farias',
      company: 'Apex Pneus e Suspensão',
      segment: 'Centro Automotivo'
    },
    {
      quote: 'Agendamento rápido e aprovação online encantaram os nossos clientes no primeiro mês',
      author: 'Juliana Castro',
      company: 'Box 77 Detailing',
      segment: 'Estética Automotiva'
    },
    {
      quote: 'O DRE em tempo real e a emissão de notas fiscais facilitaram todo o nosso financeiro',
      author: 'Roberto Nogueira',
      company: 'Autoelétrica Nogueira',
      segment: 'Autoelétrica'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = testimonials.length;

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-avanço a cada 5.5s (pausa quando o usuário interage)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Gestos de toque no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextTestimonial();
      } else {
        prevTestimonial();
      }
    }
    touchStartX.current = null;
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden border-t border-[#242838]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header Centralizado com SplitText e sem subtítulo */}
        <div className="max-w-xl mx-auto mb-6 sm:mb-10 text-center">
          <SplitText
            tag="h2"
            text="O que dizem os gestores que usam o MechOS"
            className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight font-steel uppercase text-center"
          />
        </div>

        {/* Container Centralizado: Exibe exatamente UM card inteiro por vez sem travar ou bugar o scroll */}
        <div
          className="relative max-w-xl mx-auto w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Único e Completo no Centro */}
          <div className="relative min-h-[300px] xs:min-h-[290px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-[#0F121C] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left transition-colors flex flex-col justify-between"
              >
                {/* Linha de acento neon superior */}
                <div className="w-16 h-1 bg-[#00E676] rounded-full mb-5 shadow-[0_0_12px_#00E676]" />

                {/* Ícone de Citação e Avaliação 5 estrelas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#00E676]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00E676]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#242838]" />
                </div>

                {/* Frase / Citação Completa e 100% visível */}
                <p className="text-zinc-100 text-base sm:text-lg font-medium leading-relaxed mb-6">
                  {current.quote}
                </p>

                {/* Rodapé do Card com Autor e Empresa */}
                <div className="pt-4 border-t border-[#242838]/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#181C28] border-2 border-[#00E676] flex items-center justify-center text-[#00E676] font-bold text-base shadow-sm shrink-0">
                      {current.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                        {current.author}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {current.company}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30 shrink-0">
                    {current.segment}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de Navegação: Botões Anterior/Próximo e Indicadores de Bolinhas */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prevTestimonial}
              aria-label="Avaliação anterior"
              className="w-10 h-10 rounded-full bg-[#131722] border border-[#242838] text-zinc-300 hover:text-[#00E676] hover:border-[#00E676]/50 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicadores de Página / Bolinhas */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Ir para avaliação ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 bg-[#00E676] shadow-[0_0_8px_#00E676]'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Próxima avaliação"
              className="w-10 h-10 rounded-full bg-[#131722] border border-[#242838] text-zinc-300 hover:text-[#00E676] hover:border-[#00E676]/50 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
