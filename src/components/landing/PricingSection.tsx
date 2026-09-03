import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface PricingSectionProps {
  onOpenTrial: (planName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Comece com o plano certo para <span className="text-gradient-electric">sua empresa.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Assinaturas simples, sem contratos de fidelidade ou taxas ocultas de implantação.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: ESSENCIAL */}
          <Card className="flex flex-col justify-between p-8 bg-[#141722] border-[#242838] hover:border-zinc-700">
            <div className="space-y-6">
              <div>
                <Badge variant="gray" size="sm">Essencial</Badge>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">R$ 197</span>
                  <span className="text-xs font-semibold text-zinc-400"> /mês</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">Para oficinas pequenas ou em início de operação.</p>
              </div>

              <div className="border-t border-[#242838] pt-6 space-y-3">
                <p className="text-xs font-bold text-white uppercase tracking-wider">O que está incluído:</p>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Gestão Completa de OS</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Controle de Estoque & Peças</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Cadastro de Clientes e Veículos</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Agenda de Atendimentos</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Suporte Técnico via WhatsApp</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => onOpenTrial('Essencial')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Começar agora
              </Button>
            </div>
          </Card>

          {/* Plan 2: PROFISSIONAL (Highlighted) */}
          <Card className="flex flex-col justify-between p-8 bg-[#161B29] border-[#00E676] glow-electric relative overflow-hidden transform md:-translate-y-2">
            <div className="absolute top-0 right-0">
              <span className="bg-[#00E676] text-zinc-950 font-black text-[10px] uppercase px-4 py-1 rounded-bl-xl tracking-wider inline-block">
                MAIS ESCOLHIDO
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="electric" size="sm">Profissional</Badge>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">R$ 297</span>
                  <span className="text-xs font-semibold text-zinc-400"> /mês</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">Para oficinas e centros automotivos em expansão.</p>
              </div>

              <div className="border-t border-[#242838] pt-6 space-y-3">
                <p className="text-xs font-bold text-[#00E676] uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Tudo do Essencial +
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-200">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> <strong className="text-white">Assistente IA Automotivo</strong></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Emissão de NF-e e NFS-e Integrada</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> CRM de Vendas & Retenção</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Gestão Financeira Completa & DRE</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#00E676] shrink-0" /> Múltiplos Usuários & Permissões</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="electric"
                size="lg"
                className="w-full"
                onClick={() => onOpenTrial('Profissional')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Começar agora
              </Button>
            </div>
          </Card>

          {/* Plan 3: PREMIUM */}
          <Card className="flex flex-col justify-between p-8 bg-[#141722] border-[#242838] hover:border-purple-500/60">
            <div className="space-y-6">
              <div>
                <Badge variant="purple" size="sm">Premium</Badge>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">R$ 397</span>
                  <span className="text-xs font-semibold text-zinc-400"> /mês</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">Para redes, franquias e grandes centros automotivos.</p>
              </div>

              <div className="border-t border-[#242838] pt-6 space-y-3">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">Recursos Avançados:</p>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Usuários e Clientes Ilimitados</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Multi-Lojas e Filiais</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Relatórios Executivos Customizados</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Automação de WhatsApp Bot</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Suporte Prioritário VIP 24/7</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => onOpenTrial('Premium')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Começar agora
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
