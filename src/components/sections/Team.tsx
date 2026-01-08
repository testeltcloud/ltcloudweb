// import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const team = [
    {
        name: 'Lucas Trabalon',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        bio: 'Visionário em tecnologia com foco em inovação e alta performance.'
    },
    {
        name: 'Ana Silva',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
        bio: 'Especialista em arquitetura cloud e liderança técnica.'
    },
    {
        name: 'Pedro Costa',
        role: 'Lead Developer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        bio: 'Full-stack developer apaixonado por código limpo.'
    },
    {
        name: 'Mariana Santos',
        role: 'UX/UI Designer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        bio: 'Criando experiências digitais memoráveis e intuitivas.'
    }
];

const Team = () => {
    return (
        <section id="about" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Conheça nosso <span className="text-gradient">Time</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Profissionais apaixonados por tecnologia trabalhando juntos para transformar sua ideia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} style={{ transitionDelay: `${idx * 100}ms` }} className="group relative reveal">
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">{member.role}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <button className="p-2 rounded-full bg-white/10 hover:bg-blue-500 text-white transition-colors">
                                            <Linkedin size={16} />
                                        </button>
                                        <button className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-slate-900 text-white transition-colors">
                                            <Github size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team;
