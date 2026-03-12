import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { RealitySection } from './components/RealitySection';
import { GlobalEducation } from './components/GlobalEducation';
import { WhyGeorgia } from './components/WhyGeorgia';
import { CostComparison } from './components/CostComparison';
import { RecognitionAccreditation } from './components/RecognitionAccreditation';
import { ParentTrust } from './components/ParentTrust';
import { WhyAFIway } from './components/WhyAFIway';
import { Testimonials } from './components/Testimonials';
import { PathwayIncludes } from './components/PathwayIncludes';
import { ProcessTimeline } from './components/ProcessTimeline';
import { LeadForm } from './components/LeadForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { FloatingCTA } from './components/FloatingCTA';
import { usePopupTrigger } from './hooks/usePopupTrigger';

function App() {
  const { isOpen, closePopup } = usePopupTrigger(5000); // Trigger after 5 seconds or 50% scroll

  return (
    <div className="font-sans text-slate-900 bg-neutral overflow-x-hidden min-h-screen">
      <Navigation />

      <main>
        <HeroSection />
        <RealitySection />
        <GlobalEducation />
        <WhyGeorgia />
        <PathwayIncludes />
        <CostComparison />
        <RecognitionAccreditation />
        <ParentTrust />
        <WhyAFIway />
        <Testimonials />
        <ProcessTimeline />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <LeadModal isOpen={isOpen} onClose={closePopup} />
      <FloatingCTA />
    </div>
  );
}

export default App;
