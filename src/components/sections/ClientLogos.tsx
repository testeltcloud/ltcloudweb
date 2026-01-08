// import React from 'react';

const clients = [
    { name: 'todagente Telemedicina', logo: 'https://api.todagentesaude.com/images/todagente/clinic/clinicLogo1729186149170.png' },
    { name: 'AiLine Telemedicina', logo: 'https://api.ailine.com.br/images/clinic/clinicLogo1718834165418.png' },
    { name: 'Ceo Food', logo: 'https://www.ceofood.com.br/assets2/image/logoCeoFood.svg' },
    { name: 'papyrus ads', logo: 'https://papyrusads.com/logo.svg' },
    { name: 'odontolive', logo: '/Logotipo-Odontolive-Vetor.svg' },
    { name: 'Space', logo: '/spaceLogoNova.png' },
];

const ClientLogos = () => {
    return (
        <section className="py-12 bg-slate-950 border-y border-slate-900 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center bg-slate-950">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Empresas que confiam na LT Cloud
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 pr-16">
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <div key={idx} className="w-32 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain transition-all"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4 pr-16">
                    {[...clients, ...clients, ...clients].map((client, idx) => (
                        <div key={`dup-${idx}`} className="w-32 h-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for simple marquee since we don't need motion/framer just for this */}
            <style>{`
            .animate-marquee {
                animation: marquee 25s linear infinite;
            }
            .animate-marquee2 {
                animation: marquee2 25s linear infinite;
            }
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
            }
            @keyframes marquee2 {
                0% { transform: translateX(100%); }
                100% { transform: translateX(0%); }
            }
        `}</style>
        </section>
    )
}

export default ClientLogos;
