import React, { useState } from 'react';
import { Menu, X, ArrowRight, Wrench, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Produto', href: '#produto' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header border-b border-[#242838]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#141722] border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:border-[#00E676] glow-electric-subtle transition-all">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-1">
            Mech<span className="text-[#00E676]">OS</span>
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-zinc-300 hover:text-[#00E676] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://mech.zyphorlabscorporation.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </a>
          <Button
            variant="electric"
            size="sm"
            onClick={onOpenTrial}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Começar agora
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 focus:outline-none"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F111A] border-b border-[#242838] px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 hover:text-[#00E676] py-1 border-b border-zinc-800/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://mech.zyphorlabscorporation.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" size="md" className="w-full">
                Entrar no Sistema
              </Button>
            </a>
            <Button variant="electric" size="md" className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenTrial(); }}>
              Começar agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
