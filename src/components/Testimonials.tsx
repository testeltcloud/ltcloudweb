import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A LT Cloud revolucionou nossos processos e trouxe inovação para nossa empresa!",
    author: "João Silva",
    role: "CEO TechCorp",
  },
  {
    quote: "Trabalhar com a LT Cloud foi uma das melhores decisões, eles entregaram acima das expectativas!",
    author: "Maria Fernandes",
    role: "CTO FinTechX",
  },
  {
    quote: "Equipe extremamente profissional, suporte rápido e soluções que realmente funcionam.",
    author: "Carlos Souza",
    role: "Gerente de TI GlobalSoft",
  },
  {
    quote: "A transformação digital da nossa empresa só foi possível graças às soluções da LT Cloud.",
    author: "Fernanda Lima",
    role: "COO AgroTech",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-white dark:bg-slate-950 text-center overflow-hidden transition-colors duration-300"
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-600 to-transparent mx-auto mb-12"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gray-50 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-800">
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl">
                        <Quote className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
                      "{testimonials[index].quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="space-y-2">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonials[index].author}
                      </p>
                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {testimonials[index].role}
                      </p>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-600 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores de progresso */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 w-12 h-3"
                    : "bg-gray-300 dark:bg-slate-700 w-3 h-3 hover:bg-gray-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-3 rounded-lg bg-gray-100 dark:bg-slate-900/70 border border-gray-300 dark:border-slate-800 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 rounded-lg bg-gray-100 dark:bg-slate-900/70 border border-gray-300 dark:border-slate-800 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}