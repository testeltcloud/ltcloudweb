
import { Cloud, Server, Smartphone, Settings, Monitor, Zap } from "lucide-react";

const LTCloudSection = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hospedagem de Alta Performance",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Integração e Deploy da sua Aplicação",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "100% online com cloud nacional e internacional",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Otimização de processos com metodologia scrum",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Infraestrutura e Suporte total ao cliente",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multiplataforma com certificação Android e iOS",
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Coluna esquerda */}
              <div className="space-y-8">
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-gray-900 dark:text-white">LT</span>
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Cloud</span>
                  </h1>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-transparent"></div>
                </div>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="relative p-6 bg-gray-50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <p className="relative z-10 leading-relaxed">
                      Somos um <span className="text-cyan-600 dark:text-cyan-400 font-semibold">squad com experiência em diversas tecnologias e segmentos</span> que trabalha de forma íntegra ou colaborativa com sua empresa.
                    </p>
                  </div>
                  
                  <div className="relative p-6 bg-gray-50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <p className="relative z-10 leading-relaxed">
                      Quando se trata de conhecimento e inovação, acreditamos que especialistas com repertório é a chave para romper desafios que ultrapassam a zona de conforto do código.
                    </p>
                  </div>
                  
                  <div className="relative p-6 bg-gray-50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <p className="relative z-10 leading-relaxed">
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Inovar é a melhor maneira de continuar crescendo</span> e levando até você indicadores de performance através de soluções que transformam dados em decisões certas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna direita - Grid de serviços */}
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                  >
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Ícone */}
                    <div className="relative inline-flex p-4 rounded-lg bg-white dark:bg-slate-800/50 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-slate-700/50 group-hover:border-cyan-500/30">
                      {service.icon}
                    </div>
                    
                    <h3 className="relative text-sm font-semibold text-gray-800 dark:text-gray-300 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Linha decorativa */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seção Solução de ponta */}
          <div className="relative pt-16">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gray-900 dark:text-white">Solução de </span>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">ponta</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gray-50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <p className="relative z-10 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Know-how e infraestrutura completa</span> para transformar a sua ideia em uma aplicação 100% adaptada à operação, do offline ao digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
};

export default LTCloudSection;