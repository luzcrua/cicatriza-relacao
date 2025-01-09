import { Shield, Brain, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Um espaço protegido para compartilhar suas experiências",
  },
  {
    icon: Brain,
    title: "Método Comprovado",
    description: "Abordagem estruturada para sua recuperação emocional",
  },
  {
    icon: Heart,
    title: "Suporte Personalizado",
    description: "Acompanhamento individual respeitando seu tempo",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Conecte-se com pessoas que compartilham experiências similares",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-16">
          Por Que Nos Escolher
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};