import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Cpu, Truck, ShoppingCart, Wheat, Heart } from 'lucide-react';

const IndustrySegments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const segments = [
    {
      icon: GraduationCap,
      title: 'Educação',
      description:
        'Plataformas de ensino, gestão acadêmica, EAD e ferramentas que transformam a experiência educacional.',
      color: 'from-blue-400 to-cyan-400',
      stats: 'Gestão de Alunos, LMS, Plataformas EAD',
    },
    {
      icon: Cpu,
      title: 'Tecnologia',
      description:
        'Soluções inovadoras para empresas de tech, startups e scale-ups que buscam crescimento acelerado.',
      color: 'from-cyan-400 to-teal-400',
      stats: 'SaaS, APIs, Infraestrutura Cloud',
    },
    {
      icon: Truck,
      title: 'Logística',
      description:
        'Sistemas de rastreamento, gestão de frota, otimização de rotas e controle de estoque inteligente.',
      color: 'from-teal-400 to-green-400',
      stats: 'Rastreamento, Gestão de Frota, Rotas',
    },
    {
      icon: ShoppingCart,
      title: 'Comércio',
      description:
        'E-commerce, PDV, marketplaces e soluções omnichannel para varejo físico e digital.',
      color: 'from-green-400 to-emerald-400',
      stats: 'E-commerce, PDV, Pagamentos',
    },
    {
      icon: Wheat,
      title: 'Agronegócio',
      description:
        'Tecnologia para o campo: gestão rural, controle de safras, IoT e agricultura de precisão.',
      color: 'from-emerald-400 to-lime-400',
      stats: 'Gestão Rural, IoT, Agricultura 4.0',
    },
    {
      icon: Heart,
      title: 'Saúde',
      description:
        'Telemedicina, prontuário eletrônico, gestão hospitalar e soluções que salvam vidas.',
      color: 'from-lime-400 to-yellow-400',
      stats: 'Telemedicina, Prontuário, Gestão',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="segmentos"
      ref={ref}
      className="relative py-20 md:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
              Experiência em Diversos Segmentos
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Setores que Atendemos
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Expertise consolidada em diferentes mercados com soluções
            personalizadas que entendem as particularidades de cada segmento
          </p>
        </motion.div>

        {/* Segments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
                  {/* Gradient Orb Effect */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${segment.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${segment.color} p-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>

                    {/* Animated Ring */}
                    <div
                      className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                      {segment.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                      {segment.description}
                    </p>

                    {/* Stats/Features */}
                    <div className="flex items-center gap-2 text-xs text-cyan-400/70 font-medium">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${segment.color}`} />
                      <span>{segment.stats}</span>
                    </div>
                  </div>

                  {/* Border Gradient Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  6+
                </div>
                <div className="text-gray-400 font-medium">Segmentos Atendidos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-400 font-medium">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-gray-400 font-medium">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySegments;
