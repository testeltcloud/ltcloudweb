// import React from 'react';
import { Server, Monitor, Cloud, Settings, Zap, Smartphone } from 'lucide-react';

const services = [
    {
        icon: <Server className="w-8 h-8" />,
        title: "Hospedagem de Alta Performance",
        desc: "Servidores otimizados para garantir a máxima velocidade e estabilidade."
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Integração e Deploy",
        desc: "Automação completa do desenvolvimento até a produção."
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "100% Cloud",
        desc: "Infraestrutura escalável em nuvem nacional e internacional."
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Metodologia Ágil",
        desc: "Processos otimizados com Scrum para entregas rápidas e assertivas."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Suporte Total",
        desc: "Acompanhamento dedicado para garantir o sucesso do seu projeto."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Multiplataforma",
        desc: "Aplicações nativas e híbridas para Android e iOS."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Por que escolher a <span className="text-gradient">LT Cloud?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Oferecemos uma infraestrutura completa e expertise técnica para levar seu negócio ao próximo nível.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 reveal"
                        >
                            <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
