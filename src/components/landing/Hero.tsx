import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Car,
  Boxes,
  MessageCircle,
  Clock
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SplitText } from '../ui/SplitText';
import { Counter } from '../ui/Counter';
import Lightfall from '../ui/Lightfall';
import TechTool3D from '../ui/TechTool3D';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeMockupTab, setActiveMockupTab] = useState<'faturamento' | 'os' | 'estoque'>('faturamento');

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-black">
      {/* Lightfall Animated Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <Lightfall
          colors={['#00E676', '#00C853', '#009944']}
          backgroundColor="#000000"
          speed={0.6}
          streakCount={4}
          streakWidth={1.2}
          streakLength={1.2}
          glow={1.2}
          density={0.7}
          twinkle={0.8}
          zoom={2.5}
          backgroundGlow={0.6}
          opacity={0.8}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.8}
        />
      </div>

      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00E676]/10 blur-[140px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row: Side-by-side on desktop, compact and organized on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Words, Headline, Subheadline & CTAs */}
          <div className="text-center sm:text-left space-y-3 md:space-y-6 max-w-3xl flex-1">
            {/* Main Animated Headline using React Bits SplitText */}
            <div>
              <SplitText
                tag="h1"
                text="Tenha o controle completo da sua operação automotiva"
                className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
                delay={35}
                duration={0.8}
                ease="power3.out"
                splitType="words, chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
              />
            </div>

            {/* Subheadline */}
            <p className="text-xs sm:text-lg text-zinc-400 font-medium max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              OS, estoque, financeiro, CRM, faturamento, clientes, veículos e Inteligência Artificial reunidos em um único sistema de alta performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2.5 pt-1">
              <Button
                variant="electric"
                size="lg"
                onClick={onOpenTrial}
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Começar teste agora
              </Button>
              <a
                href="https://wa.me/5561985890417?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20MechOS."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />} className="w-full">
                  Tirar dúvidas no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Screwdriver Tool */}
          <div className="shrink-0 flex items-center justify-center my-2 sm:my-0">
            <TechTool3D />
          </div>
        </div>

        {/* Mockup Visual do Sistema (Estilo Janela de Computador Adaptada para Mobile) */}
        <div className="mt-8 md:mt-16 relative max-w-5xl mx-auto">
          {/* Decorative Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E676]/40 via-emerald-500/20 to-[#00E676]/40 rounded-2xl md:rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

          {/* Mockup Container */}
          <div className="relative bg-[#0F111A] border border-[#242838] rounded-xl md:rounded-3xl shadow-2xl overflow-hidden text-left">
            {/* Mockup Top Window Bar */}
            <div className="bg-[#141722] border-b border-[#242838] px-2.5 py-2 sm:px-4 sm:py-3 flex items-center justify-between gap-3 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink">
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="ml-1 sm:ml-2 text-[9px] xs:text-[10px] sm:text-[11px] font-mono text-zinc-400 truncate">app.mechos.com.br/dashboard</span>
              </div>

              {/* Segment Pill indicator */}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[8px] xs:text-[9px] sm:text-[10px] font-bold border border-[#00E676]/30 shrink-0 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping shrink-0" /> Centro Automotivo Apex
              </span>
            </div>

            {/* Mockup Body Content - Visual do Notebook Adaptado Perfeitamente no Mobile */}
            <div className="p-2.5 sm:p-6 md:p-8 space-y-2.5 sm:space-y-6">
              {/* Top Metrics Row - Layout 2x2 no mobile idêntico ao painel do notebook */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                {/* Metric 1 */}
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838] hover:border-[#00E676]/50 transition-all">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">Faturamento</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white">R$ 48.920<span className="text-[9px] sm:text-xs text-zinc-400">,00</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-0.5">
                    +17,8% vs mês ant.
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">OS Concluídas</span>
                    <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white">127 <span className="text-[9px] sm:text-xs text-zinc-400">serviços</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-zinc-400 mt-0.5 block truncate">Ticket médio: R$ 385</span>
                </div>

                {/* Metric 3 */}
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">Veículos</span>
                    <Car className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white">94 <span className="text-[9px] sm:text-xs text-zinc-400">carros</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-0.5">
                    +32 novos clientes
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">Alerta Estoque</span>
                    <Boxes className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-amber-400">3 <span className="text-[9px] sm:text-xs text-zinc-400">baixos</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-amber-400/80 mt-0.5 block truncate">Reposição sugerida</span>
                </div>
              </div>

              {/* Interactive Mockup Work Order List Preview */}
              <div className="bg-[#141722] border border-[#242838] rounded-xl p-2.5 sm:p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-[#242838] pb-2">
                  <h4 className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                    <Wrench className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00E676]" /> Ordens de Serviço Recentes
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#00E676] shrink-0">4 OS ativas</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex items-center justify-between gap-2 text-xs overflow-hidden">
                    <div className="min-w-0 shrink">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono font-bold text-[#00E676] text-[10px] sm:text-xs shrink-0">OS #1042</span>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate">Corolla Cross 2.0</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] sm:text-[10px] text-zinc-300 font-mono">ABC-7R89</span>
                      </div>
                      <p className="text-[9px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Revisão preventiva 30k + Troca pastilhas</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-white text-[10px] sm:text-sm">R$ 1.190,00</span>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[8px] sm:text-[10px] font-bold border border-[#00E676]/30 whitespace-nowrap">
                        Em Execução
                      </span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex items-center justify-between gap-2 text-xs overflow-hidden">
                    <div className="min-w-0 shrink">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono font-bold text-[#00E676] text-[10px] sm:text-xs shrink-0">OS #1041</span>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate">Civic 2.0 Touring</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] sm:text-[10px] text-zinc-300 font-mono">JKL-3D45</span>
                      </div>
                      <p className="text-[9px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Alinhamento 3D + Troca óleo 0W20</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-white text-[10px] sm:text-sm">R$ 680,00</span>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-bold border border-blue-500/30 whitespace-nowrap">
                        Aprovada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Shadow Fade Gradient to prevent section break */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-44 bg-gradient-to-b from-transparent via-black/70 to-[#0A0C14] pointer-events-none z-20" />
    </section>
  );
};

