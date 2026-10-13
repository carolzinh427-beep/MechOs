import React from 'react';
import { ShieldCheck, Mail, Lock } from 'lucide-react';
import CircularText from '../ui/CircularText';
import { MechBrandLogo } from '../ui/MechBrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060A] border-t border-[#242838] py-6 sm:py-8 text-zinc-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-[1.5cm] sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-[#242838]/60">
          
          {/* Brand & Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a href="#" className="flex items-center group shrink-0" title="MechOS Início">
              <MechBrandLogo className="h-8 sm:h-9 w-auto" />
            </a>

            <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />

            <a
              href="mailto:mechos.oficial@gmail.com"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#00E676] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00E676]" />
              <span className="font-mono text-xs">mechos.oficial@gmail.com</span>
            </a>
          </div>

          {/* CircularText animation */}
          <div className="shrink-0 my-2 md:my-0 scale-90 sm:scale-100">
            <CircularText
              text="MECHOS GESTÃO AUTOMOTIVA "
              spinDuration={16}
              onHover="speedUp"
              className="text-[#00E676]"
            />
          </div>

          {/* Quick links & System access */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="https://mech.zyphorlabscorporation.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E676] font-bold hover:underline"
            >
              Acessar Sistema
            </a>
            <a href="#recursos" className="hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* Bottom LGPD and Copyright bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 text-center sm:text-left">
          <p>© 2026 MechOS SaaS Automotivo Todos os direitos reservados</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-400">
              <Lock className="w-3 h-3 text-[#00E676]" /> 
              <span>Conformidade com a <strong className="text-white">LGPD</strong></span>
            </span>
            <span className="flex items-center gap-1 text-zinc-500 hidden md:inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" /> Dados encriptados
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
