import React from 'react';
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { HeroSystemPreview } from './components/landing/HeroSystemPreview';
import { SegmentTicker } from './components/landing/SegmentTicker';
import { ProblemSection } from './components/landing/ProblemSection';
import { SolutionBento } from './components/landing/SolutionBento';
import { AISection } from './components/landing/AISection';
import { DashboardSection } from './components/landing/DashboardSection';
import { VehicleHistory } from './components/landing/VehicleHistory';
import { HowItWorks } from './components/landing/HowItWorks';
import { PricingSection } from './components/landing/PricingSection';
import { Comparison } from './components/landing/Comparison';
import { FAQSection } from './components/landing/FAQSection';
import { FinalCTA } from './components/landing/FinalCTA';
import { Footer } from './components/landing/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

const SYSTEM_URL = 'https://mech.zyphorlabscorporation.online/';

export function App() {
  const handleGoToSystem = () => {
    window.open(SYSTEM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-white selection:bg-[#00E676] selection:text-zinc-950">
      {/* Navbar */}
      <Navbar onOpenTrial={handleGoToSystem} />

      {/* Main Landing Sections */}
      <main>
        {/* 1. Hero: Logo MechOS centralizado acima da frase (Fundo Preto) */}
        <Hero onOpenTrial={handleGoToSystem} />

        {/* 2. Dores e Problemas - Frases Diretas (Fundo Branco) */}
        <ProblemSection />

        {/* 3. Seção à parte: Resto da apresentação, CTAs e Mockup Interativo (Fundo Preto) */}
        <HeroSystemPreview onOpenTrial={handleGoToSystem} />

        {/* 4. Ticker dos Segmentos Atendidos (Integrado em fundo dark) */}
        <SegmentTicker />

        {/* 5. Solução Bento Grid e Galeria Interativa (Fundo Branco) */}
        <SolutionBento />

        {/* 6. Assistente de IA (Fundo Preto) */}
        <AISection onOpenTrial={handleGoToSystem} />

        {/* 7. Dashboard e Métricas (Fundo Branco) */}
        <DashboardSection />

        {/* 8. Histórico por Placa (Fundo Preto) */}
        <VehicleHistory onOpenTrial={handleGoToSystem} />

        {/* 9. Como Funciona (Fundo Branco) */}
        <HowItWorks onOpenTrial={handleGoToSystem} />

        {/* 10. Planos e Preços (Fundo Preto) */}
        <PricingSection onOpenTrial={handleGoToSystem} />

        {/* 11. Comparativo (Fundo Branco) */}
        <Comparison />

        {/* 12. Perguntas Frequentes (Fundo Branco) */}
        <FAQSection />

        {/* 13. Chamada Final CTA (Fundo Preto) */}
        <FinalCTA onOpenTrial={handleGoToSystem} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
