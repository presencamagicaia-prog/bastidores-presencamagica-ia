/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, AnimatePresence } from "motion/react";
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
  Video,
  X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const timelineSteps = [
  {
    day: "Dias 1 a 3",
    title: "Imersão e Roteirização",
    desc: "Recebemos suas memórias e nosso time de direção cria um roteiro emocional exclusivo, desenhado para arrancar lágrimas e sorrisos no grande dia.",
    icon: <Search className="w-5 h-5 text-gold stroke-[1px]" />
  },
  {
    day: "Dias 4 a 6",
    title: "Curadoria e Direção de Arte",
    desc: "Nossos especialistas selecionam e tratam cada imagem, sincronizando com uma narração em estilo 'voz de cinema', orgânica e sofisticada.",
    icon: <PenTool className="w-5 h-5 text-gold stroke-[1px]" />
  },
  {
    day: "Dia 7",
    title: "A Primeira Prévia Exclusiva",
    desc: "O grande momento. Você recebe o primeiro vislumbre do seu projeto em movimento. É a hora de sentir a emoção e nos passar qualquer ajuste fino.",
    icon: <Sparkles className="w-5 h-5 text-gold stroke-[1px]" />
  },
  {
    day: "Dias 8 a 14",
    title: "Refinamento Artesanal",
    desc: "Sua visão é nossa lei. Aplicamos seus feedbacks com precisão cirúrgica, ajustando ritmo, cores e transições até que cada segundo esteja perfeito.",
    icon: <Monitor className="w-5 h-5 text-gold stroke-[1px]" />
  },
  {
    day: "Dias 15 a 19",
    title: "Renderização Final em 4K",
    desc: "Seu projeto é processado em ultra-alta definição, garantindo que cada detalhe brilhe com qualidade de cinema nas telas do seu evento.",
    icon: <Video className="w-5 h-5 text-gold stroke-[1px]" />
  },
  {
    day: "Dia 20",
    title: "A Entrega Cerimonial",
    desc: "Você recebe o link exclusivo e vitalício do seu convite imersivo, pronto para ser enviado aos seus convidados e vivido em família.",
    icon: <Sparkles className="w-5 h-5 text-gold stroke-[1px]" />
  }
];

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEconomyModalOpen, setIsEconomyModalOpen] = useState(false);
  const [isEngineeringModalOpen, setIsEngineeringModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(err => console.log("Autoplay blocked or failed:", err));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsEconomyModalOpen(false);
        setIsEngineeringModalOpen(false);
      }
    };
    if (isEconomyModalOpen || isEngineeringModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isEconomyModalOpen, isEngineeringModalOpen]);

  return (
    <div className="min-h-screen bg-oled selection:bg-gold/30 selection:text-gold overflow-x-hidden">
      {/* Header: Fixed and Discrete */}
      <header className="fixed top-0 left-0 right-0 z-40 px-8 py-8 flex justify-center items-center backdrop-blur-md bg-oled/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gold tracking-[0.5em] uppercase text-[10px] font-bold"
        >
          Bastidores • Presença Mágica
        </motion.div>
      </header>

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

        {/* Seção: A Engenharia do Impossível */}
        <section className="py-24 px-6 bg-[#0a0a0a] relative border-t border-b border-gold/15 overflow-hidden">
          {/* Brilho dourado ambiental suave */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
          
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              A Engenharia do Impossível
            </h2>
            <h3 className="text-gold italic text-lg md:text-xl font-serif mt-4">
              Como Transformamos Memórias em Cinema
            </h3>
            
            <p className="mt-6 text-white/70 font-light leading-relaxed max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              Por trás de cada vídeo imersivo da Presença Mágica IA existe uma convergência perfeita entre tecnologia de ponta, arte cinematográfica e curadoria humana. Descubra os 7 pilares técnicos que elevam seu projeto ao nível dos maiores estúdios de Hollywood — sem revelar nossas ferramentas proprietárias, mas mostrando a sofisticação que poucos conseguem entregar.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                id="btn-engenharia-cinematografica"
                onClick={() => setIsEngineeringModalOpen(true)}
                type="button"
                className="px-8 py-4 sm:px-9 sm:py-5 bg-gradient-to-br from-[#D4AF37] to-[#AA8529] text-black font-bold text-xs sm:text-sm tracking-[1px] uppercase rounded-[10px] shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🎬 DESVENDAR A ENGENHARIA CINEMATOGRÁFICA</span>
              </button>
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

        {/* CTA Section com Chamada Estratégica e Botões Lado a Lado */}
        <section className="py-24 px-6 text-center border-t border-white/5 relative">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight text-white">
              Pronto para materializar <br /> <span className="italic text-gold">o invisível?</span>
            </h2>

            {/* Texto de Chamada (Posicionado acima do botão) */}
            <div className="max-w-2xl mb-8">
              <p className="text-white/85 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                Muitos nos perguntam: <span className="text-white font-normal italic">"Vocês fornecem os painéis de LED e o som?"</span><br className="hidden sm:inline" />{" "}
                A resposta vai surpreender você — e <span className="text-gold font-semibold underline decoration-gold/40 underline-offset-4">salvar até R$ 150.000</span> do seu orçamento.
              </p>
            </div>

            {/* Conjunto de Botões Alinhados Lado a Lado */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-3xl">
              {/* O Botão Principal: Ver a Economia Inteligente */}
              <button
                id="btn-economia-inteligente"
                onClick={() => setIsEconomyModalOpen(true)}
                type="button"
                className="px-8 py-4 sm:px-9 sm:py-5 bg-gradient-to-br from-[#D4AF37] to-[#AA8529] text-black font-bold text-xs sm:text-sm tracking-[1px] uppercase rounded-[10px] shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>💰 VER A ECONOMIA INTELIGENTE</span>
              </button>

              {/* Botão Secundário: Voltar para a Galeria de Cinema */}
              <a 
                id="btn-membro-fundador-cta"
                href="https://experiencia.presencamagicaia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 sm:px-9 sm:py-5 bg-black/60 hover:bg-black/90 border border-gold/50 hover:border-gold text-gold font-bold text-xs sm:text-sm tracking-[1px] uppercase rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm group"
              >
                <span>VOLTAR PARA A GALERIA DE CINEMA</span>
                <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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
            VER NOSSA GALERIA DE CINEMA
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-gold/80 shrink-0" />
        </a>
      </motion.div>

      {/* Modal Popup Interativo: O Segredo da Margem Extra */}
      <AnimatePresence>
        {isEconomyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsEconomyModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Dialog Container */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-economy-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[800px] bg-[#0c0c0c] border border-[#D4AF37] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.2)] text-white text-left z-10 my-8 max-h-[88vh] overflow-y-auto custom-gold-scrollbar"
            >
              {/* Botão Fechar (X) Elegante Dourado */}
              <button
                type="button"
                onClick={() => setIsEconomyModalOpen(false)}
                aria-label="Fechar janela"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[#D4AF37] hover:text-white hover:rotate-90 p-2 rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[2px]" />
              </button>

              {/* Título Principal (H1, Dourado) */}
              <h1 
                id="modal-economy-title"
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#D4AF37] leading-tight pr-10 mb-3"
              >
                🎯 O Segredo da Margem Extra: Por que Separar é Mais Lucrativo
              </h1>

              {/* Subtítulo (H3, Branco/Cinza claro, itálico) */}
              <h3 className="text-white/80 text-sm sm:text-base italic font-light mb-6 border-b border-[#D4AF37]/20 pb-5 leading-relaxed">
                Descubra como a Presença Mágica IA elimina o "Imposto de Luxo" e entrega cinema em 8K por uma fração do preço das agências tradicionais.
              </h3>

              {/* Corpo do Texto */}
              <div className="space-y-5 text-white/80 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Todo evento de luxo <strong className="text-white font-bold">PRECISA</strong> de telões de LED, som imersivo e projetores. Essa infraestrutura é indispensável — e o seu salão já a possui (ou você a contrata à parte).
                </p>

                <p>
                  O problema é o <strong className="text-white font-bold">"imposto de luxo"</strong> que as agências tradicionais embutem ao amarrar o VFX à parafernália física, inflacionando o preço final de forma absurda.
                </p>

                <div className="bg-white/[0.03] border-l-2 border-[#D4AF37] p-4 rounded-r-lg my-4">
                  <p className="text-white/90">
                    <strong className="text-[#D4AF37]">O que é VFX?</strong><br />
                    É a criação de cenários digitais hiper-realistas, avatares e animações em 8K (a "alma" do evento) que rodam perfeitamente na estrutura que você já contratou.
                  </p>
                </div>

                <div className="pt-2">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#ff4d4d] mb-2 flex items-center gap-2">
                    ❌ A Armadilha do "Tudo Amarrado":
                  </h2>
                  <p>
                    Agências de "ultraluxo" cobram de <strong className="text-white font-bold">R$ 35.000 a R$ 200.000+</strong> pelo pacote fechado. Elas inflacionam o preço com margens abusivas de estúdio físico, equipes de Hollywood e logística desnecessária, sabendo que o cliente rico paga sem pestanejar.
                  </p>
                </div>

                <div className="pt-2">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#4CAF50] mb-2 flex items-center gap-2">
                    ✅ A Inteligência Financeira (Modelo Presença Mágica IA):
                  </h2>
                  <p>
                    Você usa a infraestrutura que o salão já tem (ou contrata a locação direta, sem intermediários) e nós entregamos o <strong className="text-white font-bold">VFX de cinema</strong> (Convite Interativo + Valsa em 8K + Ecossistema VIP) por valores que variam de <strong className="text-gold font-bold">R$ 6.500,00, R$ 15.500,00 ou R$ 21.500,00</strong>.
                  </p>
                </div>

                <div className="pt-2">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#D4AF37] mb-2 flex items-center gap-2">
                    💎 O Resultado Prático no Seu Bolso:
                  </h2>
                  <p className="mb-3">
                    Ao desmembrar, você gera uma <strong className="text-white font-bold">economia brutal de R$ 20.000 a R$ 150.000+</strong> no orçamento global do evento. E o melhor: esse dinheiro não "some". Ele vira:
                  </p>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">1. Economia Real:</strong> Redirecione esse valor para o que realmente importa — a experiência dos seus convidados, decoração, gastronomia ou até mesmo uma lua de mel dos sonhos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">2. Liberdade Total:</strong> Escolha o melhor profissional de áudio e vídeo (AV) de confiança do seu salão para operar o equipamento, enquanto nós garantimos um arquivo de realismo cinematográfico impecável.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">3. Transparência Absoluta:</strong> Nota fiscal direta da Presença Mágica IA, sem intermediários, sem taxas ocultas.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#D4AF37] mb-3 flex items-center gap-2">
                    💬 O Momento "Caramba!":
                  </h2>
                  <blockquote className="border-l-4 border-[#D4AF37] pl-4 sm:pl-5 py-2 italic text-[#cccccc] bg-white/[0.02] rounded-r-lg">
                    "Caramba! Aqui está o que eu sempre quis: um VFX de cinema de elite, infraestrutura física contratada à parte por uma fração do custo tradicional, e controle total do meu orçamento. Estamos transformando a velha armadilha dos R$ 200k em liberdade financeira real."
                  </blockquote>
                </div>

                <p className="text-center text-xs sm:text-sm text-[#888888] pt-4 italic border-t border-white/10 mt-6">
                  Validado pelas principais assessorias de luxo do país como o modelo mais limpo, eficiente e inteligente para o ecossistema do evento.
                </p>

                {/* Botão de Fechar no rodapé do modal para mobile UX */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsEconomyModalOpen(false)}
                    className="px-6 py-2.5 rounded-full border border-[#D4AF37]/50 text-gold hover:border-[#D4AF37] hover:bg-gold/10 text-xs uppercase tracking-[0.15em] transition-all cursor-pointer"
                  >
                    Entendido, Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal Popup Interativo: A Engenharia do Impossível */}
      <AnimatePresence>
        {isEngineeringModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsEngineeringModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Modal Dialog Container */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-engineering-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[900px] bg-[#0c0c0c] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.2)] text-white text-left z-10 my-8 max-h-[85vh] overflow-y-auto custom-gold-scrollbar"
            >
              {/* Botão Fechar (X) Elegante Dourado */}
              <button
                type="button"
                onClick={() => setIsEngineeringModalOpen(false)}
                aria-label="Fechar janela"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[#D4AF37] hover:text-white hover:rotate-90 p-2 rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <X className="w-6 h-6 stroke-[2px]" />
              </button>

              {/* Título Principal (H1, Dourado) */}
              <h1 
                id="modal-engineering-title"
                className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#D4AF37] leading-tight pr-10 mb-3"
              >
                🎬 A Engenharia do Impossível: Como Transformamos Memórias em Cinema
              </h1>

              {/* Subtítulo (H3, Branco/Cinza claro, itálico) */}
              <h3 className="text-white/80 text-sm sm:text-base italic font-light mb-8 border-b border-[#D4AF37]/20 pb-5 leading-relaxed">
                Por trás de cada vídeo imersivo da Presença Mágica IA existe uma convergência perfeita entre tecnologia de ponta, arte cinematográfica e curadoria humana. Descubra os 7 pilares técnicos que elevam seu projeto ao nível dos maiores estúdios de Hollywood.
              </h3>

              {/* Corpo de Conteúdo Completo */}
              <div className="space-y-8 text-white/80 text-sm sm:text-base font-light leading-relaxed">
                
                {/* SEÇÃO 1 */}
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    1. A Arquitetura Neural de Ultra-Realismo
                  </h2>
                  <p>
                    Nossa agência opera com uma infraestrutura de <strong className="text-white font-semibold">Inteligência Artificial Generativa de última geração</strong>, treinada com milhões de referências cinematográficas de Hollywood. Não estamos falando de filtros de aplicativo ou templates prontos — estamos falando de <strong className="text-white font-semibold">redes neurais profundas</strong> que compreendem luz, textura, emoção e movimento humano em nível molecular.
                  </p>
                  <p>
                    Quando você nos envia suas fotos, nossos algoritmos não apenas "melhoram" a imagem. Eles <strong className="text-white font-semibold">reconstroem a cena</strong> pixel por pixel, analisando:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>A direção da luz original e recriando sombras realistas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>A textura da pele (poros, microexpressões, brilho natural)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>A profundidade de campo cinematográfica (desfoque de fundo profissional)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>A paleta de cores de filmes premiados</span>
                    </li>
                  </ul>
                  <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-4 rounded-r-lg mt-3">
                    <p className="text-white/95">
                      <strong className="text-[#D4AF37]">Resultado:</strong> Suas fotos ganham vida com a mesma qualidade visual de um comercial de luxo da Dior ou Chanel.
                    </p>
                  </div>
                </div>

                {/* SEÇÃO 2 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    2. O Pipeline de Produção em 8K Nativo
                  </h2>
                  <p>
                    Enquanto a maioria dos vídeos de evento são entregues em Full HD (1080p) ou no máximo 4K, nós trabalhamos com <strong className="text-white font-semibold">renderização nativa em 8K</strong> (7680 x 4320 pixels). Isso significa:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">4x mais detalhes</strong> que o 4K tradicional</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">16x mais resolução</strong> que o Full HD</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>Cada fio de cabelo, cada brilho no vestido, cada lágrima no rosto é capturado com precisão cirúrgica</span>
                    </li>
                  </ul>
                  <p>
                    Quando seu vídeo é exibido nos telões de LED do evento, mesmo que a tela tenha 10 metros de largura, a imagem permanece <strong className="text-white font-semibold">cristalina e impecável</strong>, sem pixelização ou borrões.
                  </p>
                </div>

                {/* SEÇÃO 3 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    3. Síntese de Movimento Orgânico (Motion Synthesis)
                  </h2>
                  <p>
                    Aqui está a mágica que separa nosso trabalho de animações robóticas e artificiais. Utilizamos uma tecnologia chamada <strong className="text-white font-semibold">Motion Synthesis Avançada</strong>, que estuda o movimento humano real para criar animações fluidas e naturais.
                  </p>
                  <p>
                    Nossos algoritmos analisam:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>Como uma pessoa pisca naturalmente (não é rápido demais, nem lento demais)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>Como o cabelo se move com o vento (física realista de partículas)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>Como a pele reage à luz durante o movimento (subsurface scattering)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span>Como as expressões faciais evoluem (microexpressões emocionais)</span>
                    </li>
                  </ul>
                  <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-4 rounded-r-lg mt-3">
                    <p className="text-white/95">
                      <strong className="text-[#D4AF37]">O que você vê:</strong> Sua debutante ou noiva não parece um boneco animado. Ela parece <strong className="text-white font-semibold">viva</strong>, respirando, sentindo, existindo no momento.
                    </p>
                  </div>
                </div>

                {/* SEÇÃO 4 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    4. Direção de Arte Cinematográfica
                  </h2>
                  <p>
                    Cada projeto passa por um processo de <strong className="text-white font-semibold">curadoria artística</strong> rigoroso, liderado por nossos diretores criativos. Não basta a tecnologia ser avançada — ela precisa servir à <strong className="text-white font-semibold">emoção da história</strong>.
                  </p>
                  <p>
                    Nossa equipe define:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Paleta de cores:</strong> Tons quentes para nostalgia, frios para elegância, dourados para luxo</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Iluminação dramática:</strong> Luzes de estúdio, luz natural de janela, luz de velas romântica</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Composição de cena:</strong> Regra dos terços, simetria cinematográfica, profundidade visual</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Ritmo narrativo:</strong> Quando acelerar, quando desacelerar, quando pausar para emocionar</span>
                    </li>
                  </ul>
                  <p>
                    Cada segundo do seu vídeo é <strong className="text-white font-semibold">pintado à mão digital</strong>, como se fosse uma obra de arte em movimento.
                  </p>
                </div>

                {/* SEÇÃO 5 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    5. Pós-Produção e Color Grading de Cinema
                  </h2>
                  <p>
                    Após a renderização inicial, cada cena passa por um processo de <strong className="text-white font-semibold">color grading profissional</strong>, o mesmo usado em filmes de Hollywood e comerciais de marcas de luxo.
                  </p>
                  <p>
                    Nossos coloristas ajustam:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Contraste e brilho:</strong> Para criar profundidade e drama</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Saturação seletiva:</strong> Destacar o vestido da noiva, os olhos da debutante, as flores</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Tons de pele:</strong> Garantir que a pele pareça natural, nunca 'emborrachada' ou artificial</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Vinheta cinematográfica:</strong> Escurecer as bordas para focar a atenção no centro da cena</span>
                    </li>
                  </ul>
                  <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-4 rounded-r-lg mt-3">
                    <p className="text-white/95">
                      <strong className="text-[#D4AF37]">Resultado final:</strong> Seu vídeo tem a mesma aparência visual de um filme dirigido por Christopher Nolan ou uma campanha da Vogue.
                    </p>
                  </div>
                </div>

                {/* SEÇÃO 6 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    6. Masterização e Entrega em Qualidade de Broadcast
                  </h2>
                  <p>
                    O arquivo final é masterizado em <strong className="text-white font-semibold">codec de alta eficiência</strong> (H.265/HEVC), garantindo:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Qualidade máxima</strong> com tamanho de arquivo otimizado</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Compatibilidade universal:</strong> Roda em qualquer telão, projetor, TV ou dispositivo</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Streaming fluido:</strong> Sem travamentos ou buffering durante a exibição</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Longevidade:</strong> Arquivo vitalício, sem perda de qualidade ao longo dos anos</span>
                    </li>
                  </ul>
                  <p>
                    Você recebe o vídeo em <strong className="text-white font-semibold">resolução 8K nativa</strong>, pronto para ser exibido em qualquer formato — desde um telão gigante até o smartphone dos convidados.
                  </p>
                </div>

                {/* SEÇÃO 7 */}
                <div className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#D4AF37]">
                    7. A Garantia de Qualidade Humana
                  </h2>
                  <p>
                    Por trás de toda essa tecnologia, existe uma <strong className="text-white font-semibold">equipe humana de especialistas</strong> que revisa cada frame, cada transição, cada detalhe emocional. Nossa IA é poderosa, mas o <strong className="text-white font-semibold">olhar humano</strong> é insubstituível.
                  </p>
                  <p>
                    Cada projeto passa por:
                  </p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Revisão técnica:</strong> Verificação de artefatos visuais, consistência de cores, fluidez de movimento</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Revisão emocional:</strong> Garantir que o vídeo transmita a emoção desejada (alegria, nostalgia, amor)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Revisão de sincronia:</strong> Áudio, narração e movimento perfeitamente alinhados</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                      <span><strong className="text-white font-semibold">Teste de exibição:</strong> Simulação em diferentes telas e ambientes antes da entrega final</span>
                    </li>
                  </ul>
                </div>

                {/* SEÇÃO FINAL - RESUMO */}
                <div className="pt-6 border-t border-white/10 space-y-5">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#D4AF37] text-center mt-4">
                    Em Resumo: A Convergência Perfeita
                  </h2>
                  <p className="text-center italic text-white/80">
                    O que entregamos não é apenas um vídeo. É a <strong className="text-white font-semibold">convergência perfeita</strong> entre:
                  </p>

                  {/* Grid de 3 colunas em desktop, 1 em mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/30 text-center">
                      <span className="text-2xl mb-2 block">⚡</span>
                      <h4 className="text-gold font-bold text-base mb-1">Tecnologia de Ponta</h4>
                      <p className="text-xs text-white/70">IA generativa, renderização 8K e motion synthesis orgânico.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/30 text-center">
                      <span className="text-2xl mb-2 block">🎨</span>
                      <h4 className="text-gold font-bold text-base mb-1">Arte Cinematográfica</h4>
                      <p className="text-xs text-white/70">Direção de arte, color grading de cinema e composição visual.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/[0.03] border border-[#D4AF37]/30 text-center">
                      <span className="text-2xl mb-2 block">👁️</span>
                      <h4 className="text-gold font-bold text-base mb-1">Curadoria Humana</h4>
                      <p className="text-xs text-white/70">Emoção, storytelling narrativo e revisão rigorosa de qualidade.</p>
                    </div>
                  </div>

                  <p className="text-center text-[#D4AF37] font-semibold text-base sm:text-lg mt-6">
                    Seu vídeo imersivo é uma <span className="underline decoration-[#D4AF37]/40 underline-offset-4">obra de arte digital</span>, criada com as mesmas ferramentas e processos usados pelos maiores estúdios de cinema do mundo — mas personalizada para contar <span className="italic text-white">a sua história</span>.
                  </p>
                </div>

                {/* Botão de Fechamento da Popup no Rodapé */}
                <div className="pt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsEngineeringModalOpen(false)}
                    className="px-8 py-3.5 rounded-full border border-[#D4AF37] text-gold hover:text-white hover:border-gold hover:bg-gold/15 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] cursor-pointer"
                  >
                    ✖ FECHAR E CONTINUAR EXPLORANDO
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
