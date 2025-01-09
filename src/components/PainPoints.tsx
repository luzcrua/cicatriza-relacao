import { Heart, Shield, Brain, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const painPoints = [
  {
    icon: Heart,
    title: "Luto Emocional",
    description: "Ajudamos você a processar a dor do término de forma saudável",
  },
  {
    icon: Shield,
    title: "Autoestima",
    description: "Reconstrua sua confiança e amor próprio",
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    description: "Encontre paz e direção para seguir em frente",
  },
  {
    icon: Users,
    title: "Relacionamentos",
    description: "Aprenda a lidar com ex-parceiros e construir novos laços",
  },
];

export const PainPoints = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          Entendemos Sua Dor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <point.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};