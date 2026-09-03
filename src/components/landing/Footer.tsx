import React from 'react';
import { Wrench, Globe, Share2, MessageSquare, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060A] border-t border-[#242838] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#141722] border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Mech<span className="text-[#00E676]">OS</span>
              </span>
            </a>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Plataforma de gestão completa, CRM, estoque, financeiro e Inteligência Artificial para oficinas e empresas de todo o setor automotivo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141722] border border-[#242838] flex items-center justify-center text-zinc-400 hover:text-[#00E676] hover:border-[#00E676] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141722] border border-[#242838] flex items-center justify-center text-zinc-400 hover:text-[#00E676] hover:border-[#00E676] transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-[#141722] border border-[#242838] flex items-center justify-center text-zinc-400 hover:text-[#00E676] hover:border-[#00E676] transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#recursos" className="hover:text-white transition-colors">Ordens de Serviço</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">Estoque & Peças</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">CRM & Vendas</a></li>
              <li><a href="#recursos" className="hover:text-white transition-colors">Assistente IA</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="https://mech.zyphorlabscorporation.online/" target="_blank" rel="noopener noreferrer" className="text-[#00E676] font-bold hover:underline">Acessar Sistema</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos & Preços</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança dos Dados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conformidade LGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#242838]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 MechOS SaaS Automotivo. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" /> Plataforma segura com criptografia de ponta a ponta.
          </p>
        </div>
      </div>
    </footer>
  );
};
