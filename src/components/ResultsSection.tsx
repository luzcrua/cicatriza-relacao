import { Card } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

const results = [
  {
    title: "Autoconhecimento",
    description: "Desenvolva uma compreensão mais profunda de si mesmo e seus padrões emocionais",
  },
  {
    title: "Resiliência Emocional",
    description: "Aprenda técnicas práticas para lidar com as emoções difíceis do término",
  },
  {
    title: "Novo Propósito",
    description: "Descubra novas possibilidades e objetivos para sua vida pós-relacionamento",
  },
];

export const ResultsSection = () => {
  return (
    <section className="py-20 px-4 bg-purple-900 text-white">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <Star className="w-12 h-12 text-purple-300 animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          O Que Você Vai Conquistar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border-none hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                {result.title}
              </h3>
              <p className="text-gray-200 mb-6">{result.description}</p>
              <ArrowRight className="w-5 h-5 text-purple-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};