"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export function Loader() {
  return (
    <div className="h-screen w-screen  bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Fundo com partículas */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={1000}
        className="absolute inset-0 w-full h-full"
        particleColor="#00BFFF"
      />

      {/* Gradiente radial para suavizar bordas */}
      <div className="absolute inset-0 w-full h-full  bg-slate-950 [mask-image:radial-gradient(500px_300px_at_center,transparent_30%,black)]"></div>

      {/* Texto animado */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white z-20 tracking-wide"
      >
        LT Cloud
      </motion.h1>

      {/* Linha brilhante abaixo do texto */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "60%", opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 h-[3px] bg-gradient-to-r from-sky-500 via-blue-400 to-sky-500 rounded-full shadow-lg shadow-sky-500/50"
      />
    </div>
  );
}
