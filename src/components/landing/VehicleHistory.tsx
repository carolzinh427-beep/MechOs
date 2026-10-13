import React from 'react';
import { Search, Car, Calendar, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface VehicleHistoryProps {
  onOpenTrial: () => void;
}

export const VehicleHistory: React.FC<VehicleHistoryProps> = ({ onOpenTrial }) => {
  const historyEvents = [
    {
      date: '14 Out 2025',
      km: '42.500 km',
      title: 'Troca de pastilhas dianteiras e sangria de freio',
      mechanic: 'Técnico Roberto M',
      cost: 'R$ 480,00'
    },
    {
      date: '02 Mai 2025',
      km: '35.000 km',
      title: 'Revisão dos 35k com troca de óleo e filtros',
      mechanic: 'Técnico Lucas S',
      cost: 'R$ 520,00'
    },
    {
      date: '10 Nov 2024',
      km: '28.000 km',
      title: 'Alinhamento 3D e balanceamento',
      mechanic: 'Técnico Roberto M',
      cost: 'R$ 220,00'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#0A0C14] relative">
      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-10 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-steel uppercase text-center">
            Histórico completo por <span className="text-[#00E676]">placa do veículo</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400 leading-relaxed text-center font-medium">
            Consulte pela placa e saiba em segundos todas as manutenções anteriores
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center text-left">
          {/* Left Text Info */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm sm:text-lg font-bold text-white font-steel uppercase">
              Rastreabilidade total para fidelizar clientes
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Tenha acesso a quilometragem serviços realizados peças trocadas e mecânicos responsáveis em cada atendimento
            </p>
            <div className="pt-2">
              <Button variant="electric" size="md" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
                Testar Consulta por Placa
              </Button>
            </div>
          </div>

          {/* Right Simulated Vehicle History Sheet */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#242838] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl space-y-3">
              {/* Header Box */}
              <div className="p-3 rounded-xl bg-[#0F111A] border border-[#242838] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#00E676]/10 text-[#00E676]">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block font-mono">VEÍCULO</span>
                    <h4 className="text-xs font-bold text-white font-steel">Corolla Cross 2.0</h4>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono font-bold text-[#00E676]">
                  BRA-2E19
                </div>
              </div>

              {/* Timeline of services */}
              <div className="space-y-2">
                {historyEvents.map((evt, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#0F111A] border border-[#242838] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                        <span>{evt.date}</span>
                        <span>{evt.km}</span>
                      </div>
                      <p className="text-xs font-semibold text-white truncate mt-0.5">{evt.title}</p>
                      <span className="text-[10px] text-zinc-500 block">{evt.mechanic}</span>
                    </div>
                    <span className="text-xs font-bold text-[#00E676] font-steel shrink-0">{evt.cost}</span>
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

export default VehicleHistory;
