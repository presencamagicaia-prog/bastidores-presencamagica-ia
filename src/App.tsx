/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { Search, PenTool, Monitor, ChevronRight, Mail, Phone, FileText } from "lucide-react";
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
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8 flex justify-center items-center backdrop-blur-md bg-oled/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold"
        >
          Presença Mágica
        </motion.div>
      </header>

      <main>
        {/* Hero Section: 100% Width Video */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
        <section