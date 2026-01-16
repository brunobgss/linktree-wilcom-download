import { MessageCircle, Zap, Clock, ArrowRight, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5535998498798?text=Ol%C3%A1%21%20Vim%20pelo%20YouTube%20e%20quero%20adquirir%20o%20Wilcom%20E4.2";

export function FinalCTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('final-cta')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section id="final-cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          pointerEvents: 'none',
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-400/30 to-emerald-500/20 rounded-full" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border border-emerald-400/30" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Sparkles className="w-4 h-4 text-emerald-400 relative z-10 animate-pulse" />
            <span className="text-sm text-emerald-100 relative z-10 tracking-wide">Última Chance de Hoje</span>
            <Zap className="w-4 h-4 text-yellow-400 relative z-10 animate-pulse" />
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight"
          >
            Pronto para <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">revolucionar</span>
            <br />
            seu negócio de bordados?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Fale agora com nossa equipe especializada e garanta sua instalação com <span className="text-emerald-400 font-semibold">suporte completo incluído</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center gap-4 px-10 py-6 overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {/* Button backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Animated shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-emerald-500/50 group-hover:shadow-emerald-400/70 transition-shadow duration-300" />
              
              {/* Content */}
              <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl text-white relative z-10 tracking-wide">
                Falar no WhatsApp e Comprar Agora
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-7 h-7 text-white" />
              </motion.div>
            </button>
          </motion.div>

          {/* Features row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {[
              { icon: Zap, text: "Resposta em 5 minutos" },
              { icon: Clock, text: "Instalação em 30 min" },
              { icon: Shield, text: "100% Seguro" },
              { icon: MessageCircle, text: "Suporte vitalício" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <item.icon className="w-5 h-5 text-emerald-400" />
                <span className="text-sm text-slate-200">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-12 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-2 border-slate-900" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm text-white">1.000+ profissionais</div>
                  <div className="text-xs text-slate-400">já instalaram hoje</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <div className="text-left ml-2">
                  <div className="text-sm text-white">4.9/5 estrelas</div>
                  <div className="text-xs text-slate-400">500+ avaliações</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
