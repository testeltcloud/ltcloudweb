import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  date: string;
  client: string;
}

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Mobile', 'Web', 'Cloud', 'E-commerce', 'Saúde'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'App de Telemedicina',
      category: 'Saúde',
      description: 'Plataforma completa de atendimento médico online',
      fullDescription:
        'Sistema completo de telemedicina com agendamento de consultas, videoconferência, prontuário eletrônico e prescrição digital. Desenvolvido para clínicas e hospitais.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      tags: [],
      date: '',
      client: '',
    },
    {
      id: 2,
      title: 'E-commerce Omnichannel',
      category: 'E-commerce',
      description: 'Marketplace multi-loja com gestão integrada',
      fullDescription:
        'Plataforma de e-commerce com integração de múltiplos canais de venda, gestão de estoque, pagamentos e logística. Sistema completo para varejistas.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'AWS'],
      date: '2024',
      client: 'RetailMax',
    },
    {
      id: 3,
      title: 'Sistema de Gestão Rural',
      category: 'Mobile',
      description: 'App para controle e monitoramento de fazendas',
      fullDescription:
        'Aplicativo mobile para gestão de propriedades rurais com controle de safras, gestão de insumos, monitoramento climático e relatórios de produtividade.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
      tags: ['Flutter', 'Firebase', 'IoT', 'Machine Learning'],
      date: '2023',
      client: 'AgroTech Brasil',
    },
    {
      id: 4,
      title: 'Gestão de negócios',
      category: 'Web',
      description: 'Sistema de ensino à distância com gamificação',
      fullDescription:
        'Plataforma completa de ensino online com videoaulas, exercícios interativos, gamificação, certificados e gestão de alunos. Suporta milhares de usuários simultâneos.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      tags: ['React', 'Django', 'PostgreSQL', 'Redis'],
      date: '2023',
      client: 'EduOnline',
    },
    {
      id: 5,
      title: 'Sistema de Rastreamento',
      category: 'Cloud',
      description: 'Plataforma de logística e rastreamento em tempo real',
      fullDescription:
        'Sistema cloud para rastreamento de frotas, otimização de rotas, gestão de entregas e análise de performance. Interface web e mobile para motoristas e gestores.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      date: '2023',
      client: 'LogisticPro',
    },
    {
      id: 6,
      title: 'Super App Bancário',
      category: 'Mobile',
      description: 'Aplicativo financeiro completo com IA',
      fullDescription:
        'Super app bancário com conta digital, cartão virtual, PIX, investimentos, análise de gastos com IA e assistente virtual. Mais de 100 mil downloads.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Python', 'TensorFlow', 'AWS'],
      date: '2024',
      client: 'FinTech Digital',
    },
  ];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-20 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Nossos Projetos
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para clientes de
            diversos segmentos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-slate-800/50 text-cyan-400 rounded-md border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Footer */}
                    {/* <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{project.client}</span>
                      <span>{project.date}</span>
                    </div> */}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-800/90 hover:bg-slate-700 rounded-full transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {selectedProject.client}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{selectedProject.date}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-cyan-400" />
                      <span>{selectedProject.tags.length} Tecnologias</span>
                    </div> */}
                  </div>

                  {/* All Tags */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-slate-800 text-cyan-400 text-sm rounded-lg border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                    <span>Ver Projeto Similar</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
