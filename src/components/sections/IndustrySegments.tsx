import { GraduationCap, Cpu, Truck, ShoppingCart, Wheat, Heart } from 'lucide-react';

const segments = [
    {
        icon: GraduationCap,
        title: 'Educação',
        description: 'Plataformas de ensino, gestão acadêmica e ferramentas EAD.',
    },
    {
        icon: Cpu,
        title: 'Tecnologia',
        description: 'Soluções para startups e scale-ups em crescimento acelerado.',
    },
    {
        icon: Truck,
        title: 'Logística',
        description: 'Rastreamento, gestão de frota e otimização de rotas.',
    },
    {
        icon: ShoppingCart,
        title: 'Varejo',
        description: 'E-commerce, PDV e soluções omnichannel integradas.',
    },
    {
        icon: Wheat,
        title: 'Agronegócio',
        description: 'Gestão rural, controle de safras e IoT no campo.',
    },
    {
        icon: Heart,
        title: 'Saúde',
        description: 'Telemedicina, prontuários e gestão hospitalar.',
    },
];

const IndustrySegments = () => {
    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <span className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-2 block">Áreas de Atuação</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Soluções para diversos <span className="text-gradient">Segmentos</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Entendemos as particularidades de cada mercado para entregar resultados reais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {segments.map((segment, idx) => (
                        <div
                            key={idx}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            className="reveal group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500/50"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <segment.icon className="w-6 h-6 text-blue-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {segment.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {segment.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-slate-800 pt-16">
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-slate-500 text-sm">Projetos Entregues</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">10+</div>
                        <div className="text-slate-500 text-sm">Anos de Experiência</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">98%</div>
                        <div className="text-slate-500 text-sm">Satisfação dos Clientes</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustrySegments;
