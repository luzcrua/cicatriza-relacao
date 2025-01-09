import { BookOpen, Brain, Heart, Shield } from "lucide-react";

const methodologies = [
  {
    icon: Brain,
    title: "Abordagem Científica",
    description: "Métodos baseados em psicologia positiva e neurociência para sua recuperação emocional",
  },
  {
    icon: Heart,
    title: "Acolhimento Empático",
    description: "Ambiente seguro e livre de julgamentos para sua expressão emocional",
  },
  {
    icon: Shield,
    title: "Processo Estruturado",
    description: "Etapas claras e definidas para guiar sua jornada de cura",
  },
  {
    icon: BookOpen,
    title: "Recursos Exclusivos",
    description: "Material de apoio e exercícios práticos para seu desenvolvimento",
  },
];

export const MethodologySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-16">
          Nossa Metodologia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {methodologies.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <method.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">
                {method.title}
              </h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};