import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Globe, Cloud, Database, Zap } from 'lucide-react';

const WhatWeDevelop = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const solutions = [
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description:
        'No desafio da transformação digital, não basta o desenvolvimento de um App, é necessário a criação de experiências digitais ricas sobre plataformas móveis, que se integrem à estratégia da empresa, melhorem a experiência do usuário e alavanquem os resultados do negócio.',
      technologies: ['Android', 'iOS', 'React Native', 'Flutter'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Globe,
      title: 'Aplicações Web',
      description:
        'Desenvolvemos sistemas web modernos, responsivos e escaláveis. De landing pages a plataformas complexas, criamos soluções que proporcionam experiências excepcionais e impulsionam seu negócio.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PHP', 'Laravel'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Cloud,
      title: 'Soluções Cloud',
      description:
        'Infraestrutura completa para transformar a sua ideia em uma aplicação 100% adaptada à operação, do offline ao digital. Hospedagem de alta performance, deploy automatizado e 100% online com cloud nacional e internacional.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
      gradient: 'from-purple-500 to-pink-500',
    },
    // {
    //   icon: Brain,
    //   title: 'Inteligência Artificial',
    //   description:
    //     'Implementamos soluções com IA e Machine Learning que transformam dados em decisões certas, potencializando o sucesso de seus negócios através de automação inteligente e análises preditivas.',
    //   technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
    //   gradient: 'from-pink-500 to-rose-500',
    // },
    {
      icon: Database,
      title: 'Sistemas de Gestão',
      description:
        'ERPs, CRMs e sistemas personalizados que otimizam processos e aumentam a produtividade. Soluções sob medida com metodologia ágil que se adaptam perfeitamente às necessidades do seu negócio.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: Zap,
      title: 'APIs e Integrações',
      description:
        'Conectamos seus sistemas, automatizamos processos e criamos ecossistemas digitais integrados. APIs robustas, seguras e escaláveis que potencializam a comunicação entre plataformas.',
      technologies: ['REST', 'GraphQL', 'WebSockets', 'Microservices'],
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section
      id="desenvolvemos"
      ref={ref}
      className="relative py-20 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              O que nós desenvolvemos?
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transformamos ideias em soluções digitais completas que impulsionam
            negócios de futuro
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Icon with Gradient Background */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} p-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                    {solution.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-cyan-400 rounded-full border border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pronto para transformar sua ideia em realidade?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos impulsionar seu negócio
              com tecnologia de ponta
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Fale com um Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDevelop;
