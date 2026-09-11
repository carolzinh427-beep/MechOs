import React from 'react';
import { ArrowRight, Wrench, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import PillNav from '../ui/PillNav';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header border-b border-[#242838]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:border-[#00E676] glow-electric-subtle transition-all">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-1">
            Mech<span className="text-[#00E676]">OS</span>
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></span>
          </span>
        </a>

        {/* React Bits Animated PillNav Component */}
        <div className="hidden md:block">
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

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/5561985890417?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20MechOS."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white" icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}>
              Dúvidas
            </Button>
          </a>
          <a
            href="https://mech.zyphorlabscorporation.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </a>
          <Button
            variant="electric"
            size="sm"
            onClick={onOpenTrial}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Começar teste agora
          </Button>
        </div>
      </div>
    </header>
  );
};
