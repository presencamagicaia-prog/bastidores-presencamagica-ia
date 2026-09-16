/**
@license
SPDX-License-Identifier: Apache-2.0
*/
import { motion } from "motion/react";
import {
Search,
PenTool,
Monitor,
ChevronRight,
Mail,
Phone,
FileText,
Sparkles,
ShieldCheck,
Video
} from "lucide-react";
import { useEffect, useRef } from "react";
const fadeIn = {
initial: { opacity: 0, y: 20 },
whileInView: { opacity: 1, y: 0 },
viewport: { once: true },
transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};
const timelineSteps = [
{
day:  "Dias 1 a 3 ",
title:  "Imersão e Roteirização ",
desc:  "Recebemos suas memórias e nosso time de direção cria um roteiro emocional exclusivo, desenhado para arrancar lágrimas e sorrisos no grande dia. ",
icon:  <Search className= "w-5 h-5 text-gold stroke-[1px] " / >
},
{
day:  "Dias 4 a 6 ",
title:  "Curadoria e Direção de Arte ",
desc:  "Nossos especialistas selecionam e tratam cada imagem, sincronizando com uma narração em estilo 'voz de cinema', orgânica e sofisticada. ",
icon:  <PenTool className= "w-5 h-5 text-gold stroke-[1px] " / >
},
{
day:  "Dia 7 ",
title:  "A Primeira Prévia Exclusiva ",
desc:  "O grande momento. Você recebe o primeiro vislumbre do seu projeto em movimento. É a hora de sentir a emoção e nos passar qualquer ajuste fino. ",
icon:  <Sparkles className= "w-5 h-5 text-gold stroke-[1px] " / >
},
{
day:  "Dias 8 a 14 ",
title:  "Refinamento Artesanal ",
desc:  "Sua visão é nossa lei. Aplicamos seus feedbacks com precisão cirúrgica, ajustando ritmo, cores e transições até que cada segundo esteja perfeito. ",
icon:  <Monitor className= "w-5 h-5 text-gold stroke-[1px] " / >
},
{
day:  "Dias 15 a 19 ",
title:  "Renderização Final em 4K ",
desc:  "Seu projeto é processado em ultra-alta definição, garantindo que cada detalhe brilhe com qualidade de cinema nas telas do seu evento. ",
icon:  <Video className= "w-5 h-5 text-gold stroke-[1px] " / >
},
{
day:  "Dia 20 ",
title:  "A Entrega Cerimonial ",
desc:  "Você recebe o link exclusivo e vitalício do seu convite imersivo, pronto para ser enviado aos seus convidados e vivido em família. ",
icon:  <Sparkles className= "w-5 h-5 text-gold stroke-[1px] " / >
}
];
export default function App() {
const videoRef = useRef<HTMLVideoElement>(null);
useEffect(() => {
if (videoRef.current) {
videoRef.current.muted = true;
videoRef.current.defaultMuted = true;
videoRef.current.play().catch(err => console.log("Autoplay blocked or failed:", err));
}
}, []);
return (
 <div className= "min-h-screen bg-oled selection:bg-gold/30 selection:text-gold overflow-x-hidden " >
{/* Header: Fixed and Discrete */}
 <header className= "fixed top-0 left-0 right-0 z-50 px-8 py-8 flex justify-center items-center backdrop-blur-md bg-oled/5 " >
 <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.5 }}
className= "text-gold tracking-[0.5em] uppercase text-[10px] font-bold "
 >
Bastidores • Presença Mágica
 </motion.div >
 </header >
  <main>
     {/* Hero Section */}
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
           className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight font-normal"
         >
           A Jornada da <br /> 
           <span className="text-gold italic">Sua História</span>
         </motion.h1>
         <motion.div
           initial={{ width: 0 }}
           animate={{ width: "60px" }}
           transition={{ delay: 1, duration: 1.5 }}
           className="h-px bg-gold/50 mx-auto mt-8"
         />
         <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="mt-6 text-white/60 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed"
         >
           Sua história merece mais do que um simples vídeo. Ela merece um processo artesanal, curado e dirigido com a mais alta tecnologia de cinema imersivo.
         </motion.p>
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
     {/* Timeline Section */}
     <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto relative">
       <motion.div {...fadeIn} className="text-center mb-20">
         <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">O Cronograma da Excelência</h2>
         <p className="text-gold/60 text-[10px] uppercase tracking-[0.3em]">20 Dias de Perfeição Absoluta</p>
       </motion.div>
       <div className="relative">
         {/* Vertical Line */}
         <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 md:-translate-x-1/2" />
         {timelineSteps.map((step, index) => (
           <motion.div 
             key={index}
             {...fadeIn}
             transition={{ ...fadeIn.transition, delay: index * 0.1 }}
             className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 md:mb-24 ${
               index % 2 === 0 ? 'md:flex-row-reverse' : ''
             }`}
           >
             {/* Content */}
             <div className={`flex-1 text-left md:text-right pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
               <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{step.day}</span>
               <h3 className="text-xl md:text-2xl font-serif text-white mb-3">{step.title}</h3>
               <p className="text-white/50 leading-relaxed font-light text-sm md:text-base">{step.desc}</p>
             </div>
             {/* Icon Node */}
             <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-oled border border-gold/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
               {step.icon}
             </div>
             {/* Empty space for the other side */}
             <div className="hidden md:block flex-1" />
           </motion.div>
         ))}
       </div>
     </section>
     {/* Guarantee Section */}
     <section className="py-20 px-6">
       <motion.div 
         {...fadeIn}
         className="max-w-3xl mx-auto border border-gold/20 bg-gold/5 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
       >
         <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
           <ShieldCheck className="w-8 h-8 text-gold stroke-[1.5px]" />
         </div>
         <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Garantia Blindada de 30 Dias</h3>
         <p className="text-white/60 leading-relaxed font-light text-sm md:text-base max-w-2xl mx-auto">
           Sabemos que a tranquilidade é fundamental. Por isso, além de entregar seu projeto final no 20º dia, você ainda terá <span className="text-gold font-medium">10 dias inteiros de garantia ativa</span> após o recebimento. Teste, assista com sua família e solicite qualquer ajuste final com total suporte da nossa equipe, sem pressa e sem riscos.
         </p>
       </motion.div>
     </section>
     {/* CTA Section */}
     <section className="py-24 px-6 text-center border-t border-white/5">
       <motion.div {...fadeIn} className="flex flex-col items-center">
         <h2 className="text-3xl md:text-4xl font-serif mb-10 max-w-2xl leading-tight text-white">
           Pronto para materializar <br /> <span className="italic text-gold">o invisível?</span>
         </h2>
         <a 
           href="https://experiencia.presencamagicaia.com.br/"
           target="_blank"
           rel="noopener noreferrer"
           className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gold text-oled font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
         >
           <span className="relative z-10 uppercase tracking-[0.2em] text-[10px]">Voltar à Experiência</span>
           <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
         </a>
       </motion.div>
     </section>
   </main>
   {/* Footer Institucional Premium */}
   <footer className="py-16 px-6 border-t border-white/5 bg-oled">
     <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
       <div className="text-gold tracking-[0.6em] uppercase text-[12px] font-black">
         Presença Mágica
       </div>
       <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/40 text-xs">
         <div className="flex items-center gap-2">
           <FileText className="w-4 h-4" />
           <span>CNPJ: 68.323.460/0001-94</span>
         </div>
         <a href="mailto:contato@presencamagicaia.com.br" className="flex items-center gap-2 hover:text-gold transition-colors">
           <Mail className="w-4 h-4" />
           <span>contato@presencamagicaia.com.br</span>
         </a>
         <a href="https://wa.me/5521969443570" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
           <Phone className="w-4 h-4" />
           <span>(21) 96944-3570</span>
         </a>
       </div>
       <div className="w-12 h-px bg-gold/10" />
       <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium">
         <a href="https://www.instagram.com/presencamagica.ia/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors cursor-pointer border-b border-gold/40 pb-1">
           Instagram
         </a>
       </div>
       <p className="text-white/10 text-[8px] tracking-[0.4em] uppercase text-center">
         © {new Date().getFullYear()} Presença Mágica IA • Cinema de Ultra-Realismo
       </p>
     </div>
   </footer>
   {/* Floating Glass Button (Lateral Esquerda) */}
   <motion.div 
     id="btn-credencial-vip" 
     initial={{ opacity: 0, x: -40 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     className="glass-button shadow-2xl shadow-black/80"
   >
     <a 
       href="https://experiencia.presencamagicaia.com.br" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="flex items-center gap-2.5"
     >
       <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping inline-block shrink-0" />
       <span className="text-gold text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-semibold whitespace-nowrap">
         Seja Membro Fundador
       </span>
       <ChevronRight className="w-3.5 h-3.5 text-gold/80 shrink-0" />
     </a>
   </motion.div>
 </div>
);
}