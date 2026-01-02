import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements - Pure CSS for Performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-float">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-slate-300">Disponível para novos projetos</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                    <span className="block text-slate-100 mb-2">Construímos o</span>
                    <span className="text-gradient">
                        Futuro Digital
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Transformamos ideias complexas em experiências digitais de alta performance.
                    Especialistas em desenvolvimento web, mobile e soluções em nuvem.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-lg hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2"
                    >
                        Iniciar Projeto
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 rounded-full bg-slate-800/50 text-white font-semibold text-lg hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm"
                    >
                        Nossos Serviços
                    </a>
                </div>
            </div>


        </section>
    );
};

export default Hero;
