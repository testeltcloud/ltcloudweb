// import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhatWeDevelop from './components/sections/WhatWeDevelop';
import IndustrySegments from './components/sections/IndustrySegments';
import HowItWorks from './components/sections/HowItWorks';
import Team from './components/sections/Team';
import ClientLogos from './components/sections/ClientLogos';
import PromoBanner from './components/sections/PromoBanner';
import FAQ from './components/sections/FAQ';
import ContactForm from './components/sections/ContactForm';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    useScrollReveal();

    return (
        <div className="relative min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-blue-500/30">
            <Header />

            <main>
                <Hero />
                <ClientLogos />
                <PromoBanner />
                <Services />
                <WhatWeDevelop />
                <IndustrySegments />
                <HowItWorks />
                <Team />
                <FAQ />
                <ContactForm />
            </main>

            <Footer />

            {/* Global Abstract Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-[1] pointer-events-none">
                {/* Dynamic background effects can go here if needed globally */}
            </div>
        </div>
    );
}

export default App;
