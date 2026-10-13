import React from 'react';
import {
  Wrench,
  Boxes,
  Users,
  DollarSign,
  Car,
  Calendar,
  Receipt,
  Sparkles,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

export const SolutionBento: React.FC = () => {
  const modules = [
    {
      id: 'os',
      badge: 'Módulo Principal',
      title: 'ORDENS DE SERVIÇO (OS)',
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Crie, acompanhe e finalize OS com poucos cliques. Controle peças aplicadas, tempo de mão de obra e técnicos responsáveis com checklist digital de entrada e saída.',
      tags: ['Checklist com fotos', 'Envio no WhatsApp em PDF', 'Status em tempo real', 'Comissão de mecânicos'],
      statusPreview: {
        label: 'Status: Em Execução',
        detail: 'OS #1042 • Corolla Cross 2.0 • R$ 1.190,00'
      }
    },
    {
      id: 'estoque',
      badge: 'Automação Total',
      title: 'ESTOQUE INTELIGENTE & PEÇAS',
      icon: <Boxes className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Saiba exatamente o que entrou, o que saiu e o que precisa ser reposto. Baixa automática imediata ao aprovar ordens de serviço e alertas de estoque mínimo.',
      tags: ['Alerta de reposição mínima', 'Preço médio de custo', 'Localização em prateleiras', 'Margem de lucro por peça'],
      statusPreview: {
        label: 'Alerta de Reposição',
        detail: '3 itens em nível crítico • Sugestão de pedido pronta'
      }
    },
    {
      id: 'crm',
      badge: 'Vendas & Conversão',
      title: 'CRM DE VENDAS & ORÇAMENTOS',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Centralize todas as cotações e orçamentos em um Kanban ágil. Nunca mais deixe um cliente no vácuo no WhatsApp e aumente a conversão da sua oficina.',
      tags: ['Funil de Vendas Kanban', 'Aprovação digital com 1 toque', 'Histórico completo do cliente', 'Lembretes de retorno'],
      statusPreview: {
        label: 'Oportunidades em Aberto',
        detail: 'R$ 18.450 em orçamentos • 7 aguardando aprovação'
      }
    },
    {
      id: 'financeiro',
      badge: 'Lucro & Caixa',
      title: 'FINANCEIRO COMPLETO & DRE',
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Tenha clareza cristalina sobre o lucro real da sua operação. Conciliação bancária, contas a pagar e receber, fluxo de caixa e DRE automatizado.',
      tags: ['DRE em tempo real', 'Múltiplas contas bancárias', 'Fluxo diário e projetado', 'Controle de inadimplência'],
      statusPreview: {
        label: 'Desempenho Financeiro',
        detail: 'Faturamento: R$ 48.920,00 • Margem Líquida: 31,4%'
      }
    },
    {
      id: 'veiculos',
      badge: 'Rastreabilidade',
      title: 'HISTÓRICO POR PLACA & VEÍCULOS',
      icon: <Car className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Digite a placa do carro ou moto e tenha na palma da mão todas as revisões, peças instaladas e quilometragens de visitas anteriores para fidelizar o cliente.',
      tags: ['Placas Mercosul e antigas', 'Alertas de revisão preventiva', 'Gestão de frotas', 'Laudo com quilometragem'],
      statusPreview: {
        label: 'Consulta por Placa',
        detail: 'Placa BRA-2E19 • 4 passagens registradas • Revisão em dia'
      }
    },
    {
      id: 'agenda',
      badge: 'Otimização Operacional',
      title: 'AGENDA DA EQUIPE & BOXES',
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Distribua os veículos entre boxes e elevadores sem sobrecarregar sua equipe técnica, eliminando filas no pátio e garantindo pontualidade na entrega.',
      tags: ['Visão por elevador/box', 'Tempo estimado vs realizado', 'Disponibilidade de técnicos', 'Fila de espera inteligente'],
      statusPreview: {
        label: 'Ocupação do Pátio',
        detail: '6 boxes ocupados • 2 técnicos liberando às 15:30'
      }
    },
    {
      id: 'fiscal',
      badge: 'Fiscal & Faturamento',
      title: 'FATURAMENTO & EMISSÃO FISCAL',
      icon: <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E676]" />,
      description: 'Receba via PIX, Cartão ou Boleto e emita notas fiscais de serviço (NFS-e) e de produto (NF-e) diretamente pelo sistema, integrado à SEFAZ e prefeituras.',
      tags: ['Certificado Digital A1', 'NFS-e prefeituras integradas', 'NF-e de peças automática', 'Conciliação de recebíveis'],
      statusPreview: {
        label: 'Emissão Fiscal',
        detail: 'Notas emitidas em segundos • 100% em conformidade fiscal'
      }
    }
  ];

  return (
    <section id="recursos" className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-5 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-emerald-800 text-[10px] sm:text-xs font-bold border border-[#00E676]/30 uppercase tracking-wider font-steel">
            <Sparkles className="w-3 h-3 text-[#00E676]" />
            Solução Completa MechOS
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase">
            Tudo o que sua empresa precisa <span className="text-[#00E676]">em um só lugar</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto">
            A plataforma MechOS conecta a recepção até o estoque e conciliação financeira com máxima agilidade.
          </p>
        </div>

        {/* Micro-aviso de navegação empilhada */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2.5 sm:mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
          <span>Role para navegar pelos módulos empilhados</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00E676] animate-bounce" />
        </div>

        {/* Componente ScrollStack do React Bits */}
        <div className="h-[460px] xs:h-[490px] sm:h-[530px] md:h-[560px] w-full max-w-4xl mx-auto">
          <ScrollStack
            itemDistance={90}
            itemStackDistance={18}
            stackPosition="8%"
            itemScale={0.035}
            baseScale={0.88}
            dimAmount={0.16}
            holdDistance={140}
            smoothScroll={true}
          >
            {modules.map((mod, index) => (
              <ScrollStackItem key={mod.id}>
                <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-5">
                  {/* Card Top: Icon, Title & Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0">
                          {mod.icon}
                        </div>
                        <div>
                          <h3 className="text-sm xs:text-base sm:text-2xl font-black text-white font-steel leading-tight">
                            {mod.title}
                          </h3>
                          <span className="text-[10px] sm:text-xs text-zinc-400 font-mono">
                            Módulo {index + 1} de {modules.length}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-[9px] xs:text-[10px] sm:text-xs font-bold border border-[#00E676]/30 uppercase font-steel whitespace-nowrap shrink-0">
                        {mod.badge}
                      </span>
                    </div>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                      {mod.description}
                    </p>
                  </div>

                  {/* Card Features / Tags */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    {mod.tags.map((tag, tagIdx) => (
                      <div
                        key={tagIdx}
                        className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#141722] border border-[#242838] text-[10px] xs:text-[11px] sm:text-xs text-zinc-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#00E676] shrink-0" />
                        <span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer: Live Mock Status Pill */}
                  <div className="pt-2 sm:pt-3 border-t border-[#242838] flex items-center justify-between gap-2 text-[10px] xs:text-[11px] sm:text-xs">
                    <span className="text-zinc-400 font-mono truncate">
                      {mod.statusPreview.detail}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#00E676]/15 text-[#00E676] font-bold border border-[#00E676]/30 shrink-0 whitespace-nowrap">
                      {mod.statusPreview.label}
                    </span>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
};

export default SolutionBento;
