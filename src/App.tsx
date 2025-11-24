import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import { Segments } from "./components/Segments";
import Services from "./components/Services";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { Loader } from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Forçar tema dark
    document.documentElement.classList.add('dark');

    // Terminar loading após 5 segundos
    // setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div className="bg-slate-950">
      {/* Loader - sempre renderizado até terminar */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-slate-950">
          <Loader />
        </div>
      )}

      {/* Conteúdo - sempre renderizado, mas invisível durante loading */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
      >
        <Header />
        <main>
          <Hero />
          <Segments />
          <Services />
          <About />
          <Timeline />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;