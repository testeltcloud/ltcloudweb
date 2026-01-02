import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Quanto tempo leva para desenvolver um projeto?',
        answer: 'O prazo varia conforme a complexidade. Projetos simples podem levar de 2-4 semanas, enquanto sistemas mais robustos podem levar de 2-6 meses. Fornecemos um cronograma detalhado após a análise do escopo.'
    },
    {
        question: 'Vocês oferecem suporte após a entrega?',
        answer: 'Sim! Oferecemos planos de suporte e manutenção contínua. Todos os projetos incluem 30 dias de suporte gratuito após a entrega para ajustes e correções.'
    },
    {
        question: 'Quais tecnologias vocês utilizam?',
        answer: 'Trabalhamos com as tecnologias mais modernas do mercado: React, Next.js, Node.js, React Native, Flutter, AWS, Google Cloud, entre outras. Escolhemos a stack ideal para cada projeto.'
    },
    {
        question: 'Como funciona o processo de orçamento?',
        answer: 'Após o contato inicial, agendamos uma reunião para entender suas necessidades. Em até 3 dias úteis, enviamos uma proposta detalhada com escopo, prazo e investimento.'
    },
    {
        question: 'Vocês trabalham com empresas de todos os tamanhos?',
        answer: 'Sim! Atendemos desde startups até grandes empresas. Nosso foco é entregar soluções que agreguem valor real ao negócio, independente do porte da empresa.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Perguntas <span className="text-gradient">Frequentes</span>
                        </h2>
                        <p className="text-slate-400">
                            Tire suas dúvidas sobre nossos serviços e processos.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/30"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/50 transition-colors"
                                >
                                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-500 transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
