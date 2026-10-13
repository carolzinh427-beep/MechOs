import React from 'react';
import {
  Wrench,
  Bike,
  Disc,
  Droplet,
  Zap,
  Wind,
  ShieldCheck,
  Paintbrush,
  Sparkles,
  Gauge,
  Sliders
} from 'lucide-react';

export const SegmentTicker: React.FC = () => {
  const segments = [
    { label: 'Oficinas Mecânicas', icon: <Wrench className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Oficinas de Motos', icon: <Bike className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Centros Automotivos', icon: <Gauge className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Autoelétricas', icon: <Zap className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Ar-Condicionado Automotivo', icon: <Wind className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Troca de Óleo', icon: <Droplet className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Pneus e Alinhamento 3D', icon: <Disc className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Suspensão e Freios', icon: <Sliders className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Funilaria e Pintura', icon: <Paintbrush className="w-4 h-4 text-[#00E676]" /> },
    { label: 'Detailing & Estética', icon: <Sparkles className="w-4 h-4 text-[#00E676]" /> }
  ];

  return (
    <section className="py-4 sm:py-6 border-y border-zinc-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-2.5 sm:mb-4 text-center">
        <p className="text-[11px] sm:text-xs font-bold text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-6 sm:w-8 h-[2px] bg-[#00E676]" />
          Uma plataforma desenvolvida para todo o setor automotivo
          <span className="w-6 sm:w-8 h-[2px] bg-[#00E676]" />
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3 sm:gap-4">
          {[...segments, ...segments].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-50 border border-zinc-200 hover:border-[#00E676] shadow-sm transition-all shrink-0 cursor-default group"
            >
              <div className="p-1.5 rounded-lg bg-[#00E676]/10 border border-[#00E676]/30 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-zinc-800 group-hover:text-zinc-950 transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
