import { motion } from "framer-motion";
import { Layout, ShoppingCart, Palette, Zap, Code2, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas de alta conversão otimizadas para capturar leads e gerar vendas.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas online completas com experiência de compra fluida e segura.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces intuitivas que encantam usuários e aumentam a retenção.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Código limpo, performático e otimizado para SEO e velocidade.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Experiências perfeitas em qualquer dispositivo, de mobile a desktop.",
  },
  {
    icon: Zap,
    title: "Otimização",
    description: "Performance, SEO e acessibilidade para resultados mensuráveis.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O Que Eu Ofereço
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas de design e desenvolvimento para transformar 
            sua presença digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
