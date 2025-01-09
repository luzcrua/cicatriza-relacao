import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    text: "Encontrei aqui a força que precisava para recomeçar. O suporte foi fundamental na minha jornada.",
    role: "Professora, 32 anos",
  },
  {
    name: "João P.",
    text: "Aprendi a lidar com meus sentimentos de uma forma saudável e hoje me sinto muito mais forte.",
    role: "Designer, 28 anos",
  },
  {
    name: "Ana L.",
    text: "O processo de cura foi transformador. Hoje vejo o término como uma oportunidade de crescimento.",
    role: "Médica, 35 anos",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-primary-dark text-white">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <Heart className="w-12 h-12 text-primary animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Histórias de Superação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg text-white border-none hover:scale-105 transition-transform duration-300"
            >
              <p className="mb-4 text-lg italic">{testimonial.text}</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};