import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Rocket, Users, Shield } from 'lucide-react';

const values = [
    {
        icon: Rocket,
        title: 'Inovação',
        description: 'Buscamos sempre as tecnologias mais modernas para entregar soluções de ponta.',
    },
    {
        icon: Users,
        title: 'Colaboração',
        description: 'Trabalhamos lado a lado com nossos clientes para entender suas necessidades.',
    },
    {
        icon: Shield,
        title: 'Excelência',
        description: 'Comprometidos com a qualidade em cada linha de código que escrevemos.',
    },
    {
        icon: Heart,
        title: 'Paixão',
        description: 'Amamos o que fazemos e isso se reflete em cada projeto entregue.',
    },
];

export default function CompanyAbout() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="company"
            ref={ref}
            className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
            </div>

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
                        🏢 Sobre a LT Cloud
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Quem </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                            Somos
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Uma software house apaixonada por transformar ideias em soluções digitais de alto impacto
                    </p>
                </motion.div>

                {/* CEO Spotlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-20"
                >
                    <div className="relative max-w-5xl mx-auto">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />

                        <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden">
                            <div className="grid md:grid-cols-5 gap-0">
                                {/* CEO Photo */}
                                <div className="md:col-span-2 relative h-80 md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                                        alt="CEO da LT Cloud"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
                                </div>

                                {/* CEO Info */}
                                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                                    {/* Badge */}
                                    <span className="inline-block w-fit px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-medium rounded-full mb-4">
                                        CEO & Fundador
                                    </span>

                                    {/* Name */}
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        Lucas Tavares
                                    </h3>

                                    {/* Quote/Description */}
                                    <blockquote className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                                        "Acredito que a tecnologia tem o poder de transformar negócios e vidas.
                                        Na LT Cloud, trabalhamos todos os dias para tornar essa transformação uma realidade
                                        para nossos clientes."
                                    </blockquote>

                                    <p className="text-gray-400 leading-relaxed">
                                        Com mais de 10 anos de experiência em desenvolvimento de software,
                                        fundou a LT Cloud com a missão de criar soluções tecnológicas que
                                        realmente fazem a diferença. Especialista em arquitetura de sistemas,
                                        cloud computing e liderança de equipes de alta performance.
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex gap-4 mt-6">
                                        <a
                                            href="#"
                                            className="px-4 py-2 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-gray-400 hover:text-cyan-400 text-sm font-medium transition-all duration-300"
                                        >
                                            LinkedIn
                                        </a>
                                        <a
                                            href="#"
                                            className="px-4 py-2 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 rounded-lg text-gray-400 hover:text-cyan-400 text-sm font-medium transition-all duration-300"
                                        >
                                            Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 mb-16"
                >
                    {/* Mission */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                                    <Target className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Transformar a maneira como as empresas utilizam a tecnologia, desenvolvendo soluções
                                inovadoras que impulsionam o crescimento e a eficiência dos nossos clientes,
                                sempre com excelência e comprometimento.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 h-full">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                                    <Eye className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Nossa Visão</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Ser reconhecida como referência em desenvolvimento de software no Brasil,
                                criando soluções que definem o futuro da tecnologia e transformam
                                positivamente a vida de milhões de pessoas.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                        Nossos <span className="text-cyan-400">Valores</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    className="group text-center"
                                >
                                    <div className="relative p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 h-full">
                                        <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl mb-4 group-hover:border-cyan-500/40 transition-colors">
                                            <Icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                                        <p className="text-gray-400 text-sm">{value.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { number: '10+', label: 'Anos de Experiência' },
                        { number: '150+', label: 'Projetos Entregues' },
                        { number: '50+', label: 'Clientes Satisfeitos' },
                        { number: '98%', label: 'Taxa de Satisfação' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-slate-900/30 border border-slate-800/50 rounded-xl">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </div>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
