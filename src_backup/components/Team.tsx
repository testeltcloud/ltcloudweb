import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail, Play, X } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    video?: string;
    linkedin?: string;
    github?: string;
    email?: string;
}

// Placeholder team data - REPLACE WITH REAL DATA
const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Lucas Tavares',
        role: 'CEO & Founder',
        bio: 'Visionário em tecnologia com mais de 10 anos de experiência em desenvolvimento de software e gestão de equipes.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        video: '',
        linkedin: '#',
        github: '#',
        email: 'lucas@ltcloud.com.br',
    },
    {
        id: 2,
        name: 'Ana Silva',
        role: 'CTO',
        bio: 'Especialista em arquitetura de sistemas e cloud computing, liderando a inovação técnica da LT Cloud.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
        video: '',
        linkedin: '#',
        github: '#',
        email: 'ana@ltcloud.com.br',
    },
    {
        id: 3,
        name: 'Pedro Costa',
        role: 'Lead Developer',
        bio: 'Full-stack developer apaixonado por criar soluções elegantes e performáticas.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        video: '',
        linkedin: '#',
        github: '#',
        email: 'pedro@ltcloud.com.br',
    },
    {
        id: 4,
        name: 'Mariana Santos',
        role: 'UX/UI Designer',
        bio: 'Designer criativa focada em experiências memoráveis e interfaces intuitivas.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        video: '',
        linkedin: '#',
        email: 'mariana@ltcloud.com.br',
    },
];

function TeamCard({ member }: { member: TeamMember }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <motion.div
                className="relative h-[420px] cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front of Card */}
                    <div
                        className="absolute inset-0 rounded-2xl overflow-hidden"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            {/* Role Badge */}
                            <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-medium rounded-full mb-3">
                                {member.role}
                            </span>

                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                                    </a>
                                )}
                                {member.github && (
                                    <a
                                        href={member.github}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                                    </a>
                                )}
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
                                        aria-label="Email"
                                    >
                                        <Mail className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                                    </a>
                                )}
                            </div>

                            {/* Video Button */}
                            {member.video && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowVideo(true);
                                    }}
                                    className="absolute top-6 right-6 p-3 bg-cyan-500/90 hover:bg-cyan-400 rounded-full transition-colors shadow-lg shadow-cyan-500/30"
                                    aria-label="Ver vídeo"
                                >
                                    <Play className="w-5 h-5 text-white" fill="white" />
                                </button>
                            )}
                        </div>

                        {/* Click Hint */}
                        <div className="absolute top-6 left-6 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-gray-400">
                            Clique para saber mais
                        </div>
                    </div>

                    {/* Back of Card */}
                    <div
                        className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-6 flex flex-col justify-center"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/50">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <span className="text-cyan-400 text-sm font-medium">{member.role}</span>
                            <p className="text-gray-400 mt-4 leading-relaxed">{member.bio}</p>

                            <div className="mt-6 pt-6 border-t border-slate-800">
                                <p className="text-xs text-gray-500">Clique para voltar</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && member.video && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-slate-800/90 hover:bg-slate-700 rounded-full transition-colors"
                                aria-label="Fechar"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <video
                                src={member.video}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default function Team() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="team"
            ref={ref}
            className="relative py-24 bg-slate-950 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                        👥 Nossa Equipe
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Conheça os </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                            Talentos
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Profissionais apaixonados por tecnologia e comprometidos com a excelência
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-2">Quer fazer parte do time?</h3>
                        <p className="text-gray-400 mb-4">Estamos sempre em busca de novos talentos!</p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                        >
                            Entre em Contato
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
