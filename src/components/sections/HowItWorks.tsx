import { MessageCircle, ClipboardCheck, HeartHandshake } from 'lucide-react';

const steps = [
    {
        icon: MessageCircle,
        number: '01',
        title: 'Bate-papo com Especialista',
        description: 'Entendemos sua necessidade em uma conversa inicial. Você nos conta seu desafio, e propomos soluções personalizadas.'
    },
    {
        icon: ClipboardCheck,
        number: '02',
        title: 'Escolha do Plano Ideal',
        description: 'Apresentamos opções de planos (12, 16 ou 24 meses) com escopo, prazo e investimento transparentes.'
    },
    {
        icon: HeartHandshake,
        number: '03',
        title: 'Acompanhamento Integral',
        description: 'Desenvolvimento com metodologia Scrum, entregas frequentes, e suporte contínuo até após o lançamento.'
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-2 block">Processo</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Como Funciona o <span className="text-gradient">Serviço</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Um processo simples e transparente do início ao lançamento do seu projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            {/* Connector Line */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-slate-700 to-transparent" />
                            )}

                            <div className="relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-center">
                                <div className="w-16 h-16 rounded-full bg-blue-600/10 border-2 border-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                    <step.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors" />
                                </div>

                                <span className="text-xs font-bold text-blue-500 tracking-wider mb-2 block">PASSO {step.number}</span>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
