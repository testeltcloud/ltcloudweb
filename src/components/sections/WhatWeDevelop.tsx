import { Smartphone, Globe, Cloud, Database, Zap } from 'lucide-react';

const solutions = [
    {
        icon: Smartphone,
        title: 'Aplicativos Mobile',
        description: 'Experiências digitais ricas em iOS e Android que engajam usuários.',
        tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
        icon: Globe,
        title: 'Aplicações Web',
        description: 'Sistemas web modernos, responsivos e escaláveis para qualquer negócio.',
        tags: ['React', 'Next.js', 'TypeScript', 'Node'],
    },
    {
        icon: Cloud,
        title: 'Soluções Cloud',
        description: 'Arquitetura robusta e escalável para suportar milhões de acessos.',
        tags: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    },
    {
        icon: Database,
        title: 'Sistemas de Gestão',
        description: 'ERPs e CRMs personalizados para otimizar a sua operação.',
        tags: ['PostgreSQL', 'Mongo', 'Redis'],
    },
    {
        icon: Zap,
        title: 'APIs e Integrações',
        description: 'Conectividade total entre seus sistemas com segurança e performance.',
        tags: ['REST', 'GraphQL', 'Microservices'],
    },
];

const WhatWeDevelop = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            {/* Decoration */}
            <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20 reveal">
                    <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-2 block">Nossa Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        O que nós <span className="text-gradient">Desenvolvemos?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Soluções completas para transformar desafios em oportunidades digitais.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {solutions.map((item, idx) => (
                        <div key={idx} style={{ transitionDelay: `${idx * 100}ms` }} className="reveal group relative p-1 rounded-2xl bg-gradient-to-br from-slate-800 to-transparent hover:from-blue-500/30 hover:to-blue-700/20 transition-all duration-300">
                            <div className="h-full bg-slate-950 p-8 rounded-[14px] relative overflow-hidden">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-blue-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 mb-6">{item.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="flex flex-col justify-center items-center p-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Tem um desafio diferente?</h3>
                        <p className="text-slate-400 mb-8">Nossa equipe adora resolver problemas complexos.</p>
                        <a href="#contact" className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDevelop;
