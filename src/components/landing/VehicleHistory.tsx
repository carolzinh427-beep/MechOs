import React from 'react';
import { History, Search, Car, Calendar, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface VehicleHistoryProps {
  onOpenTrial: () => void;
}

export const VehicleHistory: React.FC<VehicleHistoryProps> = ({ onOpenTrial }) => {
  const historyEvents = [
    {
      date: '14 Out, 2025',
      km: '42.500 km',
      title: 'Troca de pastilhas dianteiras + Sangria de freio',
      mechanic: 'Técnico: Roberto M.',
      cost: 'R$ 480,00'
    },
    {
      date: '02 Mai, 2025',
      km: '35.000 km',
      title: 'Revisão dos 35k: Óleo 0W20 Synth + Filtro Ar/Óleo',
      mechanic: 'Técnico: Lucas S.',
      cost: 'R$ 520,00'
    },
    {
      date: '10 Nov, 2024',
      km: '28.000 km',
      title: 'Alinhamento 3D + Balanceamento 4 rodas',
      mechanic: 'Técnico: Roberto M.',
      cost: 'R$ 220,00'
    }
  ];

  return (
    <section className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Text Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Cada veículo tem uma história. <span className="text-[#00E676]">Sua empresa também precisa conhecê-la.</span>
            </h2>

            <p className="text-xs sm:text-base text-zinc-400 leading-relaxed">
              Consulte pelo número da placa do carro e saiba em 2 segundos todas as manutenções anteriores.
            </p>

            <div className="pt-2">
              <Button variant="electric" size="md" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Testar Consulta por Placa
              </Button>
            </div>
          </div>

          {/* Right Simulated Vehicle History Sheet */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#242838] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-2xl space-y-4">
              {/* Header Box */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#0F111A] border border-[#242838] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Honda Civic 2.0 EXL Flex</h3>
                    <p className="text-[11px] text-zinc-400">Cliente: Fernando de Oliveira</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-white font-mono font-bold text-xs">
                  ABC-1D23
                </div>
              </div>

              {/* History Timeline */}
              <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#242838]">
                {historyEvents.map((ev, idx) => (
                  <div key={idx} className="relative pl-4 space-y-1">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#00E676] border-2 border-[#141722]" />
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400">
                      <span className="font-semibold text-[#00E676]">{ev.date}</span>
                      <span>{ev.km}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white">{ev.title}</p>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500">
                      <span>{ev.mechanic}</span>
                      <span className="font-bold text-white">{ev.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
