/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Search, PenTool, Monitor, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Extra layer of assurance for absolute silence and autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(err => console.log("Autoplay blocked or failed:", err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-oled selection:bg-gold/30 selection:text-gold overflow-x-hidden">
      {/* Header: Fixed and Discrete */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8 flex justify-between items-center backdrop-blur-md bg-oled/5">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold"
        >
          Presença Mágica
        </motion.div>
        <div className="hidden md:flex gap-8 text-white/40 text-[9px] uppercase tracking-widest font-medium">
          <span className="hover:text-gold transition-colors cursor-pointer">Processo</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Membros</span>
          <span className="hover:text-gold transition-colors cursor-pointer">Contato</span>
        </div>
      </header>

      <main>
        {/* Hero Section: 100% Width Video */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Mandatory Video Configuration: autoplay, loop, muted, playsinline */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.2]"
          >
            <source src="https://res.cloudinary.com/drlrhuuml/video/upload/v1774016884/Bastidores_njfkrn.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-oled/40 via-transparent to-oled" />

          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.02em" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-4xl md:text-7xl lg:text-8xl font-serif italic text-white leading-tight"
            >
              A Engenharia <br /> 
              <span className="text-gold font-normal not-italic">do Invisível</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 1, duration: 1.5 }}
              className="h-px bg-gold/50 mx-auto mt-8"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-white/20 text-[8px] uppercase tracking-[0.4em]">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Process Section: Three Columns */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Alquimia Digital</h2>
            <p className="text-gold/60 text-[10px] uppercase tracking-[0.3em]">A Ciência por trás da Magia</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-8 group-hover:border-gold/30 transition-colors duration-500">
                <Search className="w-5 h-5 text-gold stroke-[1px]" />
              </div>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Briefing</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm max-w-[280px]">
                A imersão profunda na alma do projeto para extrair a narrativa essencial.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-8 group-hover:border-gold/30 transition-colors duration-500">
                <PenTool className="w-5 h-5 text-gold stroke-[1px]" />
              </div>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Escultura de IA</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm max-w-[280px]">
                Onde algoritmos avançados são moldados por mãos artísticas humanas.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center mb-8 group-hover:border-gold/30 transition-colors duration-500">
                <Monitor className="w-5 h-5 text-gold stroke-[1px]" />
              </div>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Cinema 8K</h3>
              <p className="text-white/40 leading-relaxed font-light text-sm max-w-[280px]">
                A materialização final em ultra-alta definição e realismo cinematográfico.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 text-center border-t border-white/5">
          <motion.div 
            {...fadeIn}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-12 max-w-3xl leading-tight">
              A porta para o futuro da <br /> <span className="italic text-gold">narrativa visual</span> está aberta.
            </h2>
            <a 
              href="https://magic-legacy-create.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gold text-oled font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 animate-glow"
            >
              <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Tornar-se Membro Fundador</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-oled">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <div className="text-gold tracking-[0.6em] uppercase text-[12px] font-black">
            Presença Mágica
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium">
            <span className="hover:text-gold transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Vimeo</span>
            <span className="hover:text-gold transition-colors cursor-pointer">LinkedIn</span>
          </div>
          <div className="w-12 h-px bg-gold/10" />
          <p className="text-white/10 text-[8px] tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} Alquimia Digital • Cinema IA
          </p>
        </div>
      </footer>
    </div>
  );
}
