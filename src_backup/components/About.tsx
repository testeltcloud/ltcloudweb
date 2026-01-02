import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, TrendingUp, Zap } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Projetos Entregues" },
    { icon: <Users className="w-8 h-8" />, number: "6", label: "Segmentos Atendidos" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "100%", label: "Satisfação dos Clientes" },
    { icon: <Zap className="w-8 h-8" />, number: "10+", label: "Anos de Experiência" },
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
      ref={ref}
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-600 to-transparent mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
              A <span className="text-cyan-600 dark:text-cyan-400 font-semibold">LT Cloud</span> é líder em inovação tecnológica, ajudando empresas a transformar suas ideias em soluções digitais modernas e eficientes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Nossa missão é capacitar negócios através da tecnologia, oferecendo soluções personalizadas que impulsionam o crescimento e a eficiência operacional.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-slate-950/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="relative text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="relative text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Linha decorativa */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-white dark:bg-slate-950/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Entre em contato e descubra como podemos ajudar sua empresa a alcançar novos patamares.
              </p>
              
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </motion.div> */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}