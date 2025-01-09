import { HeroSection } from "@/components/HeroSection";
import { PainPoints } from "@/components/PainPoints";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PainPoints />
      <ContactForm />
    </div>
  );
};

export default Index;