import React from 'react';
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { SegmentTicker } from './components/landing/SegmentTicker';
import { ProblemSection } from './components/landing/ProblemSection';
import { SolutionBento } from './components/landing/SolutionBento';
import { AISection } from './components/landing/AISection';
import { DashboardSection } from './components/landing/DashboardSection';
import { VehicleHistory } from './components/landing/VehicleHistory';
import { HowItWorks } from './components/landing/HowItWorks';
import { PricingSection } from './components/landing/PricingSection';
import { Comparison } from './components/landing/Comparison';
import { Testimonials } from './components/landing/Testimonials';
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
        <Hero onOpenTrial={handleGoToSystem} />
        <SegmentTicker />
        <ProblemSection />
        <SolutionBento />
        <AISection onOpenTrial={handleGoToSystem} />
        <DashboardSection />
        <VehicleHistory onOpenTrial={handleGoToSystem} />
        <HowItWorks onOpenTrial={handleGoToSystem} />
        <PricingSection onOpenTrial={handleGoToSystem} />
        <Comparison />
        <Testimonials />
        <FAQSection />
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
