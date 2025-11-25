import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Logos de empresas conhecidas como placeholder
  // Você pode substituir por logos reais dos seus clientes
  const clients = [
    { name: 'todagente Telemedicina', logo: 'https://todagentetelemedicina.com/wp-content/uploads/2025/05/TODAGENTE-LOGO-branco-a-claro-1536x547.png' },
    { name: 'AiLine Telemedicina', logo: 'https://api.ailine.com.br/images/clinic/clinicLogo1718834165418.png' },
    { name: 'Ceo Food', logo: 'https://www.ceofood.com.br/assets2/image/logoCeoFood.svg' },
    { name: 'Ceo PAg', logo: 'https://ceopag.com.br/novaspaginas/institucional/_astro/logo.CNN8ZffI.png' },
    { name: 'papyrus ads', logo: 'https://papyrusads.com/logo.svg' },
    { name: 'odontolive', logo: '/Logotipo-Odontolive-Vetor.svg' },
    { name: 'Space', logo: '/spaceLogoNova.png' },
    { name: 'AdoWoofibe', logo: 'logo-branca.png' },
  ];

  // Duplicar array para efeito infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      id="clientes"
      ref={ref}
      className="relative py-16 md:py-24 bg-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Empresas que Confiam
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Parceiros que transformaram seus negócios com nossas soluções
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-8 md:gap-12"
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 flex items-center justify-center group"
                >
                  <div className="relative w-full h-full p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-cyan-500/10">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Satisfação</div>
          </div>

          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Projetos</div>
          </div>

          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-400 text-sm">Anos</div>
          </div>

          <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-400 text-sm">Suporte</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ClientLogos;
