import { Milestone, ArrowRight, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Milestone,
    title: "Onde Você Está",
    description: "Reconheça seus sentimentos e entenda que buscar ajuda é o primeiro passo",
  },
  {
    icon: ArrowRight,
    title: "Para Onde Vai",
    description: "Descubra um caminho personalizado para sua cura emocional",
  },
  {
    icon: Target,
    title: "Como Chegar Lá",
    description: "Receba ferramentas e suporte para sua jornada de transformação",
  },
];

export const JourneySteps = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          Sua Jornada de Cura
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <step.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};