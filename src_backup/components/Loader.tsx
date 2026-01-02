"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

/**
 * Componente Loader - Tela de carregamento profissional
 *
 * Exibe a logo LT Cloud com efeitos visuais sofisticados:
 * - Animação de entrada com escala e rotação suave
 * - Partículas de fundo usando SparklesCore
 * - Efeito de brilho pulsante ao redor da logo
 * - Gradiente radial para suavizar as bordas
 * - Anel de carregamento animado
 *
 * Cores: Preto (#000) e Azul (#00BFFF, #0ea5e9, #3b82f6)
 */
export function Loader() {
  return (
    <div className="h-screen w-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Partículas de fundo em azul */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={1000}
        className="absolute inset-0 w-full h-full"
        particleColor="#00BFFF"
      />

      {/* Gradiente radial para suavizar bordas */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(500px_300px_at_center,transparent_30%,black)]"></div>

      {/* Container da logo com efeitos */}
      <div className="relative z-20 flex flex-col items-center justify-center">

        {/* Anel de carregamento rotativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0.8, 1.1, 1],
            rotate: 360
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, ease: "easeOut" },
            rotate: { duration: 2, ease: "linear", repeat: Infinity }
          }}
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-transparent border-t-blue-500 border-r-sky-400"
        />

        {/* Segundo anel para efeito de profundidade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0, 0.6, 0.6],
            scale: [0.9, 1.15, 1.05],
            rotate: -360
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 1, ease: "easeOut" },
            rotate: { duration: 3, ease: "linear", repeat: Infinity }
          }}
          className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border-2 border-transparent border-b-sky-500 border-l-blue-400 opacity-60"
        />

        {/* Logo com animação de entrada suave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="relative"
        >
          {/* Brilho de fundo pulsante */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 rounded-full -z-10"
          />

          {/* Logo LT Cloud */}
          <motion.img
            src="/ltcloud.png"
            alt="LT Cloud"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))",
                "drop-shadow(0 0 40px rgba(14, 165, 233, 0.8))",
                "drop-shadow(0 0 20px rgba(14, 165, 233, 0.5))"
              ]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>

        {/* Texto de carregamento */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1], y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="mt-8 text-sky-400 text-lg md:text-xl font-light tracking-widest"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          >
            CARREGANDO
          </motion.span>
        </motion.p>

        {/* Pontos animados de carregamento */}
        <div className="flex gap-2 mt-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3, scale: 0.8 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                ease: "easeInOut",
                repeat: Infinity
              }}
              className="w-2 h-2 rounded-full bg-sky-400"
            />
          ))}
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "60%", opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-20 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full shadow-lg shadow-sky-500/50"
      />
    </div>
  );
}
