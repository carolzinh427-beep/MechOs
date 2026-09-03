import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Phone, Mail, User } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

interface ModalDemoProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

// INSIRA O SEU NÚMERO DE WHATSAPP AQUI (Com DDD e 55 no início)
// Exemplo: '5511999999999'
const TARGET_WHATSAPP_NUMBER = '5511999999999';

export const ModalDemo: React.FC<ModalDemoProps> = ({ isOpen, onClose, selectedPlan = 'Profissional' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Formata mensagem para o WhatsApp do proprietário
    const message = encodeURIComponent(
      `🚗 *Nova Solicitação de Teste Grátis (MechOS)*\n\n` +
      `*Nome:* ${name}\n` +
      `*Empresa:* ${company}\n` +
      `*WhatsApp:* ${phone}\n` +
      `*E-mail:* ${email}\n` +
      `*Plano Escolhido:* ${selectedPlan}\n\n` +
      `Gostaria de ativar meus 3 dias grátis de acesso!`
    );

    // Abre o WhatsApp com a mensagem pronta
    const waUrl = `https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#141722] border border-[#00E676]/40 rounded-3xl p-6 md:p-8 shadow-2xl glow-electric">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div>
              <Badge variant="electric" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Teste Grátis por 3 Dias
              </Badge>
              <h3 className="text-xl md:text-2xl font-black text-white mt-2 tracking-tight">
                Leve a gestão da sua empresa para o próximo nível
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-1">
                Sem necessidade de cartão de crédito. Instalação rápida e suporte imediato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Seu Nome *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0F111A] border border-[#242838] rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-[#00E676]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Nome da Empresa / Oficina *</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Centro Automotivo Apex"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#0F111A] border border-[#242838] rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-[#00E676]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0F111A] border border-[#242838] rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-[#00E676]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">E-mail Comercial *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="carlos@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0F111A] border border-[#242838] rounded-xl pl-9 pr-3 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-[#00E676]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="electric" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Ativar Teste Grátis no Plano {selectedPlan}
                </Button>
              </div>
            </form>

            <p className="text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" /> Seus dados estão seguros. Sem pegadinhas ou fidelidade.
            </p>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Solicitação Recebida com Sucesso!</h3>
            <p className="text-xs md:text-sm text-zinc-400">
              Obrigado, <strong className="text-white">{name}</strong>! Nossa equipe já está liberando o seu acesso ao MechOS no plano <strong className="text-[#00E676]">{selectedPlan}</strong>.
            </p>
            <p className="text-xs text-zinc-400">
              Enviamos os dados de acesso para <span className="text-white font-mono">{email}</span> e WhatsApp.
            </p>
            <div className="pt-4">
              <Button variant="outline" onClick={onClose}>
                Fechar Janela
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
