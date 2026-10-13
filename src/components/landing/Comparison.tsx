import React, { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Comparison: React.FC = () => {
  const comparisonItems = [
    { id: 1, feature: 'Agilidade na emissão de OS em menos de 3 minutos', manual: false, mechos: true },
    { id: 2, feature: 'Histórico completo por placa do veículo', manual: false, mechos: true },
    { id: 3, feature: 'Envio de orçamento profissional em PDF no WhatsApp', manual: false, mechos: true },
    { id: 4, feature: 'Controle de estoque com alertas automáticos', manual: false, mechos: true },
    { id: 5, feature: 'Inteligência Artificial de apoio ao gestor', manual: false, mechos: true },
    { id: 6, feature: 'Painel financeiro fluxo de caixa e DRE em tempo real', manual: false, mechos: true }
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % comparisonItems.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [comparisonItems.length]);

  // Exibe exatamente 3 linhas por vez, rotacionando automaticamente entre as 6
  const visibleItems = [
    comparisonItems[startIndex % comparisonItems.length],
    comparisonItems[(startIndex + 1) % comparisonItems.length],
    comparisonItems[(startIndex + 2) % comparisonItems.length]
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-5xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
            Por que migrar para o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium text-center">
            Compare a gestão tradicional com a eficiência e velocidade da nossa plataforma
          </p>
        </div>

        {/* Comparison Table com transição automática de 3 linhas (sem ser clicável) */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-6 overflow-hidden shadow-lg text-left select-none pointer-events-none">
          <div className="grid grid-cols-12 pb-3 mb-3 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider font-steel">
            <div className="col-span-7 sm:col-span-8 text-zinc-500">Funcionalidade</div>
            <div className="col-span-2 sm:col-span-2 text-center text-rose-500">Manual Papel</div>
            <div className="col-span-3 sm:col-span-2 text-center text-[#00E676]">MechOS</div>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3 min-h-[195px] sm:min-h-[220px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 22, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 0.98 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  className="grid grid-cols-12 py-3 sm:py-3.5 px-3 sm:px-4 bg-white border border-zinc-200/90 rounded-xl sm:rounded-2xl items-center shadow-xs"
                >
                  <div className="col-span-7 sm:col-span-8 font-semibold text-zinc-800 text-xs sm:text-sm">
                    {item.feature}
                  </div>
                  <div className="col-span-2 sm:col-span-2 flex justify-center text-rose-500">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 flex justify-center text-[#00E676]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 font-bold text-[#00E676]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
