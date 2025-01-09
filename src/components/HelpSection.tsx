import { Sparkles, Heart, Compass, MessageCircle } from "lucide-react";

const helpItems = [
  {
    icon: Heart,
    title: "Acolhimento Genuíno",
    description: "Um espaço seguro para compartilhar suas emoções e sentimentos sem julgamentos",
  },
  {
    icon: Compass,
    title: "Direcionamento",
    description: "Orientação personalizada para cada momento do seu processo de cura",
  },
  {
    icon: MessageCircle,
    title: "Diálogo Aberto",
    description: "Conversas sinceras e construtivas para seu desenvolvimento emocional",
  },
  {
    icon: Sparkles,
    title: "Transformação",
    description: "Ferramentas práticas para ressignificar suas experiências e crescer",
  },
];

export const HelpSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-16">
          Como Podemos Te Ajudar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 p-4 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <item.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};