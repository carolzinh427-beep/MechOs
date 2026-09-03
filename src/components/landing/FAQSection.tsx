import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O sistema serve apenas para oficinas mecânicas?',
      a: 'Não. O MechOS foi desenvolvido para atender todo o setor automotivo, incluindo oficinas de motos, autoelétricas, ar-condicionado automotivo, troca de óleo, pneus, centros automotivos, funilaria e estética automotiva (detailing).'
    },
    {
      q: 'Posso cadastrar vários veículos por cliente?',
      a: 'Sim. Cada cliente cadastrado pode possuir múltiplos veículos vinculados (ex: frota familiar ou empresarial), mantendo o histórico de manutenção individualizado para cada placa.'
    },
    {
      q: 'Consigo controlar estoque de peças e produtos?',
      a: 'Sim. O sistema possui controle completo de estoque, entradas, saídas, custo, preço de venda, localização física e dá baixa automática das peças aplicadas nas Ordens de Serviço.'
    },
    {
      q: 'Existe controle financeiro no sistema?',
      a: 'Sim. O módulo financeiro inclui fluxo de caixa em tempo real, contas a pagar, contas a receber, faturamento por período, cálculo de ticket médio e visão de DRE.'
    },
    {
      q: 'O sistema possui CRM para acompanhar vendas?',
      a: 'Sim. O módulo de CRM organiza seus leads, orçamentos enviados e agendamentos em um Kanban visual para você não perder oportunidades de vendas.'
    },
    {
      q: 'Possui emissão de NF-e e NFS-e?',
      a: 'Sim. A plataforma conta com arquitetura preparada para emissão fiscal integrada de notas de produto (NF-e) e notas de serviço (NFS-e).'
    },
    {
      q: 'Posso utilizar inteligência artificial para analisar minha empresa?',
      a: 'Sim. O MechOS AI Assistant permite que você faça perguntas em linguagem natural sobre seu faturamento, estoque baixo, clientes ausentes e relatórios operacionais.'
    },
    {
      q: 'Posso trocar de plano depois?',
      a: 'Sim. Você pode fazer upgrade ou downgrade de plano a qualquer momento diretamente no painel de configurações sem burocracia ou taxas de cancelamento.'
    },
    {
      q: 'Funciona no celular e tablet?',
      a: 'Sim. O MechOS é 100% responsivo e funciona perfeitamente em celulares, tablets, notebooks e computadores de mesa sem necessidade de instalações pesadas.'
    },
    {
      q: 'Existe período de teste grátis?',
      a: 'Sim. Disponibilizamos 14 dias de teste grátis sem necessidade de cadastrar cartão de crédito para você experimentar todos os recursos na prática.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Perguntas <span className="text-[#00E676]">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Tudo o que você precisa saber sobre o MechOS antes de começar seu teste grátis.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/40 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#0F111A] border border-[#242838] flex items-center justify-center text-[#00E676] shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#00E676]/10 border-[#00E676]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-[#242838]/60 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
