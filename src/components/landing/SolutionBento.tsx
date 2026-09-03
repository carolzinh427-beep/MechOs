import React from 'react';
import {
  Wrench,
  Boxes,
  Users,
  DollarSign,
  Calendar,
  Car,
  Receipt,
  FileSpreadsheet,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { Badge } from '../ui/Badge';

export const SolutionBento: React.FC = () => {
  return (
    <section id="recursos" className="py-20 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tudo o que sua empresa precisa. <span className="text-[#00E676]">Em um só lugar.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A plataforma MechOS conecta o atendimento da recepção até a baixa no estoque e conciliação bancária.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: OS (Large Span 2) */}
          <div className="md:col-span-2 bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <Badge variant="electric" size="sm">01. Operacional</Badge>
              <h3 className="text-2xl font-black text-white">ORDENS DE SERVIÇO (OS)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Crie, acompanhe e finalize OS com poucos cliques. Controle peças aplicadas, mão de obra, técnicos responsáveis e checklists digitais.
              </p>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#0F111A] border border-[#242838] flex items-center justify-between text-xs">
              <span className="text-zinc-300 font-mono">Status: Em Execução • Pastilha + Disco</span>
              <span className="font-extrabold text-[#00E676]">R$ 1.190,00</span>
            </div>
          </div>

          {/* Card 2: ESTOQUE */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Boxes className="w-6 h-6" />
              </div>
              <Badge variant="gray" size="sm">02. Inventário</Badge>
              <h3 className="text-xl font-bold text-white">ESTOQUE & PEÇAS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Saiba exatamente o que entrou, saiu e o que precisa ser reposto com alertas de estoque mínimo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#242838] text-[11px] text-[#00E676] font-bold">
              Baixa automática via OS →
            </div>
          </div>

          {/* Card 3: CRM */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <Badge variant="purple" size="sm">03. Vendas</Badge>
              <h3 className="text-xl font-bold text-white">CRM DE VENDAS</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Organize clientes, oportunidades e acompanhe cada negociação em um Kanban visual.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#242838] text-[11px] text-purple-400 font-bold">
              Funil de Retenção Ativo →
            </div>
          </div>

          {/* Card 4: FINANCEIRO */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <Badge variant="electric" size="sm">04. Caixa</Badge>
              <h3 className="text-xl font-bold text-white">FINANCEIRO & DRE</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tenha clareza sobre receitas, despesas, margem de lucro e contas a pagar/receber.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#242838] text-[11px] text-[#00E676] font-bold">
              Fluxo em tempo real →
            </div>
          </div>

          {/* Card 5: AGENDA */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <Badge variant="blue" size="sm">05. Escala</Badge>
              <h3 className="text-xl font-bold text-white">AGENDA INTELIGENTE</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Organize serviços, horários de recepção e distribua o trabalho da sua equipe de técnicos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#242838] text-[11px] text-blue-400 font-bold">
              Sincronização de horários →
            </div>
          </div>

          {/* Card 6: CLIENTES E VEÍCULOS (Span 2) */}
          <div className="md:col-span-2 bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6" />
              </div>
              <Badge variant="electric" size="sm">06. Cadastro Unificado</Badge>
              <h3 className="text-2xl font-black text-white">CLIENTES E VEÍCULOS</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Tenha todo o histórico do cliente e do veículo na palma da mão. Consulte por placa, chassi, telefone ou CPF/CNPJ instantaneamente.
              </p>
            </div>
            <div className="mt-6 p-3 rounded-xl bg-[#0F111A] border border-[#242838] flex items-center justify-between text-xs">
              <span className="text-white font-bold">Honda Civic 2.0 • Placa ABC-1D23</span>
              <span className="text-[#00E676] font-mono text-[11px]">5 Manutenções Registradas</span>
            </div>
          </div>

          {/* Card 7: FATURAMENTO */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Receipt className="w-6 h-6" />
              </div>
              <Badge variant="amber" size="sm">07. Vendas</Badge>
              <h3 className="text-xl font-bold text-white">FATURAMENTO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Centralize suas vendas, serviços e receitas com relatórios de performance.
              </p>
            </div>
          </div>

          {/* Card 8: NF-e E NFS-e */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <Badge variant="blue" size="sm">08. Fiscal</Badge>
              <h3 className="text-xl font-bold text-white">NF-e E NFS-e</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prepare sua operação para uma gestão fiscal integrada com envio automático de XML/PDF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
