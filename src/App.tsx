import React, { useState } from 'react';
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
import { ModalDemo } from './components/ui/ModalDemo';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Profissional');

  const handleOpenTrial = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-white selection:bg-[#00E676] selection:text-zinc-950">
      {/* Navbar */}
      <Navbar onOpenTrial={() => handleOpenTrial('Profissional')} />

      {/* Main Landing Sections */}
      <main>
        <Hero onOpenTrial={() => handleOpenTrial('Profissional')} />
        <SegmentTicker />
        <ProblemSection />
        <SolutionBento />
        <AISection onOpenTrial={() => handleOpenTrial('Profissional')} />
        <DashboardSection onOpenTrial={() => handleOpenTrial('Profissional')} />
        <VehicleHistory onOpenTrial={() => handleOpenTrial('Profissional')} />
        <HowItWorks />
        <PricingSection onOpenTrial={handleOpenTrial} />
        <Comparison onOpenTrial={() => handleOpenTrial('Profissional')} />
        <Testimonials />
        <FAQSection />
        <FinalCTA onOpenTrial={() => handleOpenTrial('Profissional')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Trial Lead Capture Modal */}
      <ModalDemo
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}

export default App;
