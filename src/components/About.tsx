import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "bg-[hsl(193,95%,68%)]/20 text-[hsl(193,95%,68%)]" },
  { name: "Tailwind CSS", color: "bg-[hsl(199,89%,48%)]/20 text-[hsl(199,89%,70%)]" },
  { name: "TypeScript", color: "bg-[hsl(211,60%,48%)]/20 text-[hsl(211,60%,70%)]" },
  { name: "Next.js", color: "bg-foreground/10 text-foreground" },
  { name: "FERK Code", color: "bg-primary/20 text-primary" },
  { name: "WordPress", color: "bg-[hsl(199,89%,48%)]/20 text-[hsl(199,89%,70%)]" },
  { name: "Figma", color: "bg-[hsl(329,71%,64%)]/20 text-[hsl(329,71%,74%)]" },
  { name: "Framer", color: "bg-[hsl(0,0%,100%)]/10 text-foreground" },
];

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "5+", label: "Anos de Experiência" },
  { value: "98%", label: "Clientes Satisfeitos" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Design Estratégico,
              <span className="text-gradient"> Resultados Reais</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com mais de 5 anos de experiência criando experiências digitais de alto impacto, 
              minha missão é transformar a visão dos meus clientes em sites que não apenas 
              impressionam — mas convertem.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada projeto começa com uma estratégia clara, focada em entender o seu negócio, 
              seu público e seus objetivos. O resultado? Sites rápidos, bonitos e que 
              geram resultados mensuráveis.
            </p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="text-lg font-semibold mb-6">
                Tecnologias & Ferramentas
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${tech.color} transition-all duration-300 hover:scale-105`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
