import { HeroSection } from "@/components/HeroSection";
import { PainPoints } from "@/components/PainPoints";
import { JourneySteps } from "@/components/JourneySteps";
import { HelpSection } from "@/components/HelpSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PainPoints />
      <JourneySteps />
      <HelpSection />
      <ResultsSection />
      <ContactForm />
    </div>
  );
};

export default Index;