import React, { useEffect, useState } from 'react';
import { Quote, Star, User, Sparkles, MoveDown } from 'lucide-react';
import { Card } from '../ui/Card';
import FlyingPosters from '../ui/FlyingPosters';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Reduzimos o tempo de recepção de OS pela metade com orçamentos direto no WhatsApp.',
      author: 'Carlos Alberto',
      company: 'Auto Center Performance',
      segment: 'Centro Automotivo'
    },
    {
      quote: 'Resgatamos mais de 40 clientes sumidos no 1º mês com os alertas de revisão do sistema.',
      author: 'Marcelo Mendonça',
      company: 'Mendonça Motos & Peças',
      segment: 'Oficina de Motos'
    },
    {
      quote: 'Organização total de estoque e margem de lucro real de cada serviço com IA.',
      author: 'Renata Silveira',
      company: 'Silveira Injeção & Freios',
      segment: 'Oficina Mecânica'
    },
    {
      quote: 'Histórico por placa e controle de comissões aumentaram nosso faturamento em 32%.',
      author: 'Thiago Farias',
      company: 'Apex Pneus & Suspensão',
      segment: 'Centro Automotivo'
    },
    {
      quote: 'Agendamento rápido e aprovação online encantaram os nossos clientes no primeiro mês.',
      author: 'Juliana Castro',
      company: 'Box 77 Detailing',
      segment: 'Estética Automotiva'
    },
    {
      quote: 'O DRE em tempo real e a emissão de notas fiscais facilitaram todo o nosso financeiro.',
      author: 'Roberto Nogueira',
      company: 'Autoelétrica Nogueira',
      segment: 'Autoelétrica'
    }
  ];

  const [posterItems, setPosterItems] = useState<string[]>([]);

  useEffect(() => {
    // Generate crisp 2D canvas card textures for WebGL FlyingPosters
    const generateCard = (t: typeof testimonials[0]): string => {
      if (typeof document === 'undefined') return '';
      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      // Dark metallic card background
      ctx.fillStyle = '#0F121C';
      ctx.beginPath();
      ctx.roundRect(16, 16, 568, 568, 36);
      ctx.fill();

      // Card border
      ctx.strokeStyle = '#242838';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(16, 16, 568, 568, 36);
      ctx.stroke();

      // Top green neon stripe
      ctx.fillStyle = '#00E676';
      ctx.beginPath();
      ctx.roundRect(40, 22, 520, 6, 3);
      ctx.fill();

      // 5 Rating Stars
      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('★ ★ ★ ★ ★', 48, 88);

      // Quote mark watermark
      ctx.fillStyle = 'rgba(0, 230, 118, 0.2)';
      ctx.font = 'bold 96px Georgia, serif';
      ctx.fillText('“', 42, 170);

      // Quote text wrapping
      ctx.fillStyle = '#F1F5F9';
      ctx.font = 'italic 500 26px sans-serif';
      const cleanQuote = `"${t.quote}"`;
      const words = cleanQuote.split(' ');
      let line = '';
      let y = 200;
      const maxW = 500;
      for (const w of words) {
        const testLine = line + w + ' ';
        if (ctx.measureText(testLine).width > maxW && line.length > 0) {
          ctx.fillText(line, 48, y);
          line = w + ' ';
          y += 40;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 48, y);

      // Divider line
      ctx.strokeStyle = '#242838';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(48, 450);
      ctx.lineTo(552, 450);
      ctx.stroke();

      // Avatar circle
      ctx.fillStyle = '#181C28';
      ctx.beginPath();
      ctx.arc(88, 510, 32, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#00E676';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Initial
      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(t.author.charAt(0), 88, 520);
      ctx.textAlign = 'left';

      // Author name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(t.author, 136, 502);

      // Company and Segment
      ctx.fillStyle = '#00E676';
      ctx.font = '600 17px sans-serif';
      ctx.fillText(`${t.company} • ${t.segment}`, 136, 532);

      return canvas.toDataURL('image/png');
    };

    const cards = testimonials.map(generateCard).filter(Boolean);
    setPosterItems(cards);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden border-t border-[#242838]/60">
      <div className="max-w-7xl mx-auto px-2.5 xs:px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-[10px] sm:text-xs font-bold border border-[#00E676]/30 uppercase tracking-wider font-steel">
            <Sparkles className="w-3 h-3 text-[#00E676]" />
            Experiência Real dos Clientes
          </span>

          <h2 className="text-xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-steel uppercase">
            O que dizem os gestores que usam o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-[11px] sm:text-base text-zinc-400">
            Veja como empresas de todo o Brasil transformaram sua gestão e aumentaram seus lucros.
          </p>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider pt-1">
            <MoveDown className="w-3 h-3 text-[#00E676] animate-bounce" />
            <span>Role a página para ver os depoimentos flutuando em 3D</span>
          </div>
        </div>

        {/* 3D FlyingPosters Component from React Bits */}
        {posterItems.length > 0 && (
          <div className="relative w-full h-[400px] xs:h-[440px] sm:h-[500px] md:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#242838]/80 bg-[#090B12] shadow-2xl mb-6 sm:mb-8">
            <FlyingPosters
              items={posterItems}
              planeWidth={280}
              planeHeight={280}
              distortion={2.5}
              scrollEase={0.015}
              cameraFov={45}
              cameraZ={21}
              columns={2}
              columnGap={35}
              alternate={true}
              pageScroll={0.85}
              speed={12}
              drag={true}
              wheel={true}
              radius={24}
              shading={0.15}
              fade={0.1}
            />

            {/* Gradient overlays on top and bottom for smooth blending */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#090B12] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#090B12] to-transparent pointer-events-none" />
          </div>
        )}

        {/* Compact Cards: Lado a lado no mobile e desktop para leitura rápida */}
        <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 md:gap-6">
          {testimonials.slice(0, 3).map((t, idx) => (
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
                  "{t.quote}"
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

export default Testimonials;
