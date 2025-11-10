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

// import { Loader } from "./components/Loader";
// import { ImagemScroolRedux } from "./components/ImagesTransmisao";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (loading) return <Loader />;

  return (
    // <ThemeProvider>
      <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Segments />
          <Services />
          <About />
          <Timeline />
          {/* <ImagemScroolRedux /> */}
          <Testimonials />
        </main>
        <Footer />
      </div>
    // </ThemeProvider>
  );
}

export default App;