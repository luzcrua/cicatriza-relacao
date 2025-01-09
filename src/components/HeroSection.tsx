import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-primary-dark to-primary px-4">
      <div className="text-center animate-fade-up space-y-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Cicatrizando Relacionamentos
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Um espaço seguro para curar seu coração e reconstruir sua vida emocional com clareza, força e esperança.
        </p>
        <Button
          onClick={scrollToForm}
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
        >
          Comece Sua Jornada de Cura
        </Button>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};