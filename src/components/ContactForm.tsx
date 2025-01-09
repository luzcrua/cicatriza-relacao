import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Em breve entraremos em contato com você.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact-form"
      className="py-20 px-4 bg-gradient-to-b from-white to-primary/10"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-8">
          Comece Sua Jornada de Cura
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Compartilhe sua história conosco e descubra como podemos ajudar você a
          superar esse momento
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-4"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-4"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Conte-nos um pouco sobre sua história..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-4 min-h-[150px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-light text-white text-lg py-6"
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};