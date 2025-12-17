import { Suspense, lazy, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import { Segments } from "./components/Segments";
import Services from "./components/Services";
import { Loader } from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load components below the fold
const WhatWeDevelop = lazy(() => import("./components/WhatWeDevelop"));
const IndustrySegments = lazy(() => import("./components/IndustrySegments"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const ClientLogos = lazy(() => import("./components/ClientLogos"));
const About = lazy(() => import("./components/About"));
const Timeline = lazy(() => import("./components/Timeline"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const WhatsAppWidget = lazy(() => import("./components/WhatsAppWidget"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const Footer = lazy(() => import("./components/Footer"));

import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

function App() {
  // Ensure dark mode is active
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ErrorBoundary>
      <div className="bg-slate-950 min-h-screen">
        <ScrollProgress />
        <GoogleAnalytics />
        <Header />
        <main>
          <Hero />
          <Segments />
          <Services />

          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <Loader />
            </div>
          }>
            <WhatWeDevelop />
            <IndustrySegments />
            <Portfolio />
            <HowItWorks />
            <ClientLogos />
            <About />
            <Timeline />
            <Testimonials />
            <ContactForm />
          </Suspense>
        </main>

        <BackToTop />
        <Suspense fallback={null}>
          <Footer />
          <WhatsAppWidget />
          <CookieConsent />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;