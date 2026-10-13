import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { Card } from '../ui/Card';
import FlyingPosters from '../ui/FlyingPosters';

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

  const [posterItems, setPosterItems] = useState<string[]>([]);

  useEffect(() => {
    // Generate crisp cards without emojis, symbols or periods
    const generateCard = (t: typeof testimonials[0]): string => {
      if (typeof document === 'undefined') return '';
      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 600;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      // Dark card background
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

      // Green neon accent bar
      ctx.fillStyle = '#00E676';
      ctx.beginPath();
      ctx.roundRect(40, 22, 520, 6, 3);
      ctx.fill();

      // Clean Rating Tag (Sem símbolos de estrelas)
      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('AVALIAÇÃO 5 ESTRELAS', 48, 85);

      // Quote text wrapping (sem aspas e sem ponto final)
      ctx.fillStyle = '#F1F5F9';
      ctx.font = '500 25px sans-serif';
      const cleanQuote = t.quote.replace(/[."'•★]/g, '');
      const words = cleanQuote.split(' ');
      let line = '';
      let y = 160;
      const maxW = 500;
      for (const w of words) {
        const testLine = line + w + ' ';
        if (ctx.measureText(testLine).width > maxW && line.length > 0) {
          ctx.fillText(line, 48, y);
          line = w + ' ';
          y += 38;
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
      ctx.fillText(`${t.company} - ${t.segment}`, 136, 532);

      return canvas.toDataURL('image/png');
    };

    const cards = testimonials.map(generateCard).filter(Boolean);
    setPosterItems(cards);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden border-t border-[#242838]/60">
      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Section Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-5 sm:mb-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight font-steel uppercase text-center">
            O que dizem os gestores que usam o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 text-center font-medium">
            Veja como empresas de todo o Brasil transformaram sua gestão
          </p>
        </div>

        {/* 3D FlyingPosters Component */}
        {posterItems.length > 0 && (
          <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[480px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#242838]/80 bg-[#090B12] shadow-2xl mb-5 sm:mb-8">
            <FlyingPosters
              items={posterItems}
              planeWidth={270}
              planeHeight={270}
              distortion={2}
              scrollEase={0.02}
              cameraFov={45}
              cameraZ={21}
              columns={2}
              columnGap={35}
              alternate={true}
              pageScroll={0.7}
              speed={10}
              drag={true}
              wheel={true}
              radius={24}
              shading={0.15}
              fade={0.1}
            />

            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#090B12] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#090B12] to-transparent pointer-events-none" />
          </div>
        )}

        {/* Compact Cards: Lado a lado no mobile e desktop sem emojis, símbolos ou pontos finais */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-4 text-left">
          {testimonials.slice(0, 3).map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between p-3 sm:p-4 bg-[#141722] border-[#242838] hover:border-[#00E676]/50 rounded-xl sm:rounded-2xl space-y-2 shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#00E676] uppercase tracking-wider block font-steel">
                  Avaliação 5 Estrelas
                </span>
                <p className="text-[11px] sm:text-xs text-zinc-300 leading-snug">
                  {t.quote}
                </p>
              </div>

              <div className="pt-2 border-t border-[#242838] flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0F111A] border border-[#242838] flex items-center justify-center text-[#00E676] shrink-0 text-xs font-bold">
                  {t.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-white truncate">{t.author}</p>
                  <p className="text-[9px] text-[#00E676] font-semibold truncate">{t.segment}</p>
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
