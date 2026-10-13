import React, { useEffect, useState } from 'react';
import FlyingPosters from '../ui/FlyingPosters';
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

  const [posterItems, setPosterItems] = useState<string[]>([]);

  useEffect(() => {
    // Gera card inteiro com contraste máximo, tipografia nítida e sem símbolos
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
      ctx.roundRect(48, 32, 504, 6, 3);
      ctx.fill();

      // Quote text wrapping (sem aspas e sem ponto final)
      ctx.fillStyle = '#F1F5F9';
      ctx.font = '600 28px sans-serif';
      const cleanQuote = t.quote.replace(/[."'•★]/g, '');
      const words = cleanQuote.split(' ');
      let line = '';
      let y = 140;
      const maxW = 500;
      for (const w of words) {
        const testLine = line + w + ' ';
        if (ctx.measureText(testLine).width > maxW && line.length > 0) {
          ctx.fillText(line, 48, y);
          line = w + ' ';
          y += 44;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 48, y);

      // Divider line
      ctx.strokeStyle = '#242838';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(48, 440);
      ctx.lineTo(552, 440);
      ctx.stroke();

      // Avatar circle
      ctx.fillStyle = '#181C28';
      ctx.beginPath();
      ctx.arc(92, 506, 36, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#00E676';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Initial
      ctx.fillStyle = '#00E676';
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(t.author.charAt(0), 92, 517);
      ctx.textAlign = 'left';

      // Author name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(t.author, 148, 498);

      // Company and Segment
      ctx.fillStyle = '#00E676';
      ctx.font = '600 18px sans-serif';
      ctx.fillText(`${t.company} - ${t.segment}`, 148, 528);

      return canvas.toDataURL('image/png');
    };

    const cards = testimonials.map(generateCard).filter(Boolean);
    setPosterItems(cards);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden border-t border-[#242838]/60">
      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Section Header Centralizado com SplitText e sem subtítulo */}
        <div className="max-w-xl mx-auto mb-6 sm:mb-10 text-center">
          <SplitText
            tag="h2"
            text="O que dizem os gestores que usam o MechOS"
            className="text-xl xs:text-2xl sm:text-4xl font-black text-white tracking-tight font-steel uppercase text-center"
          />
        </div>

        {/* 3D FlyingPosters: Exibe exatamente um card inteiro por vez no meio, sem travar o scroll */}
        {posterItems.length > 0 && (
          <div className="relative w-full max-w-md mx-auto h-[380px] xs:h-[410px] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#242838]/80 bg-[#090B12] shadow-2xl">
            <FlyingPosters
              items={posterItems}
              planeWidth={330}
              planeHeight={330}
              gap={360}
              distortion={0}
              rotation={0}
              scrollEase={0.03}
              cameraFov={45}
              cameraZ={21}
              columns={1}
              columnGap={0}
              alternate={false}
              pageScroll={0.8}
              speed={12}
              drag={true}
              wheel={false}
              radius={28}
              shading={0.05}
              fade={0.35}
            />

            {/* Gradient overlays para transição limpa nas bordas */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#090B12] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#090B12] to-transparent pointer-events-none" />
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;
