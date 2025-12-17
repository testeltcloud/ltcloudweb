import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, FileCheck, HeadphonesIcon, CheckCircle, Clock, Shield } from 'lucide-react';

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Bate Papo Com Um Especialista',
      description:
        'Confira os principais projetos executados pela LT Cloud. Desenvolvemos seu projeto do início ao fim com o que há de melhor em tecnologias, metodologias e profissionais.',
      details: [
        'Análise completa das necessidades',
        'Consultoria técnica especializada',
        'Definição de objetivos e escopo',
      ],
      color: 'from-cyan-400 to-blue-500',
      bgGlow: 'bg-cyan-500/20',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Escolha Do Plano Ideal Para O Projeto',
      description:
        'Na LT Cloud fazemos o desenvolvimento com planos mensais de: 12, 16 e 24 meses, dependendo do projeto. Assim, as parcelas ficam pequenas e durante todo esse tempo você tem o suporte completo para atualizar, implementar e corrigir eventuais falhas de sua aplicação.',
      details: [
        'Planos flexíveis de 12 a 24 meses',
        'Parcelas adaptadas ao seu orçamento',
        'Sem custos ocultos',
      ],
      color: 'from-blue-400 to-purple-500',
      bgGlow: 'bg-blue-500/20',
    },
    {
      number: '03',
      icon: HeadphonesIcon,
      title: 'Acompanhamento Integral',
      description:
        'Após o desenvolvimento temos o suporte completo para a sua aplicação. Assim, seu sistema estará sempre atualizado e funcionando 100%.',
      details: [
        'Suporte técnico contínuo',
        'Atualizações e melhorias constantes',
        'Monitoramento 24/7',
      ],
      color: 'from-purple-400 to-pink-500',
      bgGlow: 'bg-purple-500/20',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Metodologia Scrum para entregas rápidas e incrementais',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Código seguro e infraestrutura protegida',
    },
    {
      icon: CheckCircle,
      title: 'Qualidade',
      description: 'Testes rigorosos e code review em cada etapa',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="relative py-20 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
              Processo Transparente
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Como funciona o serviço da LT Cloud?
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Um processo simples e eficiente para transformar sua ideia em realidade
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 lg:space-y-12 mb-20"
        >
          {steps.map((step, index) => {
            // const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    {/* Card */}
                    <div className="relative bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">
                      {/* Step Number */}
                      <div className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20">
                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                          {step.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm md:text-base">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-0.5 ${step.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl  ${step.color} p-8 md:p-10 transform transition-transform duration-500 `}
                    >
                      {/* <Icon className="w-full h-full text-white" strokeWidth={1.5} /> */}
                    </div>

                 
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
              Por que escolher a LT Cloud?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-block mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a
                href="#contato"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Fale com consultor de negócios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
