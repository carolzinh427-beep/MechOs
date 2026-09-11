import React, { useState } from 'react';
import { ArrowRight, Wrench, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import PillNav from '../ui/PillNav';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header border-b border-[#242838]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1.5">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#141722] border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:border-[#00E676] glow-electric-subtle transition-all">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center gap-1">
            Mech<span className="text-[#00E676]">OS</span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00E676] animate-pulse"></span>
          </span>
        </a>

        {/* Desktop Central PillNav */}
        <div className="hidden lg:block">
          <PillNav
            logoElement={<Wrench className="w-4 h-4 text-[#00E676]" />}
            logoAlt="MechOS Logo"
            items={navItems}
            activeHref="#"
            baseColor="#0F111A"
            pillColor="#141722"
            hoveredPillTextColor="#07080C"
            pillTextColor="#ffffff"
            initialLoadAnimation={true}
          />
        </div>

        {/* Action CTAs - Fully visible & optimized for Mobile & Desktop */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          {/* Botão de Dúvidas (WhatsApp) - Sempre visível e nunca sobreposto */}
          <a
            href="https://wa.me/5561985890417?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20MechOS."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-zinc-300 hover:text-white bg-[#141722]/80 border border-[#242838] hover:border-[#25D366]/60 transition-all"
            title="Tirar Dúvidas no WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span className="hidden xs:inline sm:inline">Dúvidas</span>
          </a>

          {/* Botão Entrar */}
          <a
            href="https://mech.zyphorlabscorporation.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="text-[11px] sm:text-xs px-2.5 py-1.5 sm:px-3.5 sm:py-2">
              Entrar
            </Button>
          </a>

          {/* Botão Começar Teste Agora */}
          <Button
            variant="electric"
            size="sm"
            onClick={onOpenTrial}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="text-[11px] sm:text-xs px-2.5 py-1.5 sm:px-3.5 sm:py-2"
          >
            <span className="inline sm:hidden">Começar</span>
            <span className="hidden sm:inline">Começar teste agora</span>
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-white p-1.5 rounded-lg bg-[#141722] border border-[#242838] focus:outline-none ml-0.5"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Drawer de Navegação Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F111A] border-b border-[#242838] px-4 pt-3 pb-5 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-zinc-200 hover:text-[#00E676] py-1.5 border-b border-zinc-800/40 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
