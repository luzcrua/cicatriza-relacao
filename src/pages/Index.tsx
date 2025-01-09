import { HeroSection } from "@/components/HeroSection";
import { PainPoints } from "@/components/PainPoints";
import { JourneySteps } from "@/components/JourneySteps";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PainPoints />
      <JourneySteps />
      <Benefits />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;