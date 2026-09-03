import React from 'react';
import { Car, History, Wrench, CheckCircle2, ShieldCheck, Calendar, ArrowRight, Gauge } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface VehicleHistoryProps {
  onOpenTrial: () => void;
}

export const VehicleHistory: React.FC<VehicleHistoryProps> = ({ onOpenTrial }) => {
  const historyItems = [
    {
      date: '14 de Agosto, 2026',
      mileage: '42.500 km',
      title: 'Troca de Óleo Sintético 0W20 + Filtros',
      osNumber: '#1041',
      technician: 'Roberto Souza (Mecânico Chefe)',
      status: 'Concluído'
    },
    {
      date: '10 de Maio, 2026',
      mileage: '35.000 km',
      title: 'Alinhamento 3D + Balanceamento de 4 Rodas',
      osNumber: '#0982',
      technician: 'Carlos Eduardo',
      status: 'Concluído'
    },
    {
      date: '18 de Janeiro, 2026',
      mileage: '28.200 km',
      title: 'Substituição de Pastilhas de Freio Cobreq Dianteiras',
      osNumber: '#0890',
      technician: 'Roberto Souza',
      status: 'Concluído'
    },
    {
      date: '05 de Setembro, 2025',
      mileage: '20.000 km',
      title: 'Revisão Preventiva de 20k + Sangria de Fluido de Freio',
      osNumber: '#0755',
      technician: 'Lucas Lima',
      status: 'Concluído'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Cada veículo tem uma história. <span className="text-[#00E676]">Sua empresa também precisa conhecê-la.</span>
            </h2>

            <p className="text-base text-zinc-400 leading-relaxed">
              Consulte a qualquer momento o prontuário completo do veículo. Saiba exatamente quais peças foram trocadas, quilometragem em cada atendimento e datas das revisões anteriores.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Evite trocas desnecessárias de peças em garantia.
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Transmita confiança total ao cliente enviando o relatório por WhatsApp.
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Notificações automáticas quando o período de revisão vencer.
              </div>
            </div>

            <div className="pt-4">
              <Button variant="electric" size="lg" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />}>
                Ver Ficha do Veículo no Sistema
              </Button>
            </div>
          </div>

          {/* Right Vehicle Timeline Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#141722] border border-[#242838] rounded-3xl p-6 shadow-2xl space-y-6">
              {/* Vehicle Badge Header */}
              <div className="p-4 rounded-2xl bg-[#0F111A] border border-[#242838] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center text-[#00E676]">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">Honda Civic 2.0 EXL</h3>
                    <p className="text-xs text-zinc-400">Ano: 2022 • Proprietário: Guilherme Siqueira</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded bg-[#090B10] border border-blue-500/40 text-[#00E676] font-mono font-black text-sm block">
                    ABC-1D23
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold block mt-1">Placa Mercosul</span>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#242838]">
                {historyItems.map((item, idx) => (
                  <div key={idx} className="relative pl-10 group">
                    {/* Timeline Node dot */}
                    <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00E676] border-4 border-[#141722] group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-xl bg-[#181C28] border border-[#242838] group-hover:border-[#00E676]/50 transition-all space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                        <span className="font-bold text-white text-sm">{item.title}</span>
                        <span className="font-mono text-[#00E676] font-bold text-xs">{item.osNumber}</span>
                      </div>

                      <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-zinc-500" /> {item.date}</span>
                        <span className="flex items-center gap-1 font-semibold text-zinc-300"><Gauge className="w-3 h-3 text-[#00E676]" /> {item.mileage}</span>
                      </div>

                      <p className="text-[10px] text-zinc-500 pt-1 border-t border-zinc-800">
                        Técnico responsável: <span className="text-zinc-300 font-medium">{item.technician}</span>
                      </p>
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
