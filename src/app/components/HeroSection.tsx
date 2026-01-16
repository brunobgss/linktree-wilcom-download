import { Download, Shield, Headphones, Settings, Sparkles, Award, Zap, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/5535998498798?text=Ol%C3%A1%21%20Vim%20pelo%20YouTube%20e%20quero%20adquirir%20o%20Wilcom%20E4.2";

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-slate-900/95 to-blue-950/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1682368062957-b1b68b26daf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwbWFjaGluZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg1NzAyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          animate={{
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
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
          animate={{
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

      <FloatingParticles />

      {/* Grid pattern with parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              {/* Premium badge with shine effect */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2.5 mb-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 rounded-full" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border border-amber-400/30" />
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
                <Award className="w-4 h-4 text-amber-400 relative z-10" />
                <span className="text-sm text-amber-100 relative z-10 tracking-wide">Software Profissional Premium</span>
                <Sparkles className="w-4 h-4 text-amber-400 relative z-10 animate-pulse" />
              </motion.div>

              {/* Main headline with gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mb-6 leading-[1.1]"
              >
                <span className="block mb-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                  Wilcom E4.2
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold">
                  Transforme Seus Bordados Hoje Mesmo
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl text-slate-300 mb-6 leading-relaxed"
              >
                Software completo para criação, edição e digitalização de bordados 
                com <span className="text-blue-400 font-medium">precisão profissional</span>
              </motion.p>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  { icon: Shield, text: "Instalação Segura" },
                  { icon: Headphones, text: "Suporte 24/7" },
                  { icon: Zap, text: "Setup Imediato" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <item.icon className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-slate-200">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button with shimmer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mb-6"
              >
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Button background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
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
                  
                  {/* Shadow */}
                  <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-emerald-500/50 group-hover:shadow-emerald-400/60 transition-shadow duration-300" />
                  
                  <Download className="w-6 h-6 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg text-white relative z-10 tracking-wide">DOWNLOAD WILCOM</span>
                  <Zap className="w-5 h-5 text-white relative z-10 group-hover:scale-125 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Subtexto explicativo */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="text-xs text-slate-400 mt-3 text-left"
              >
                Entre em contato via WhatsApp para receber o download e instalação assistida
              </motion.p>

              {/* Trust indicators */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-sm text-slate-400 flex items-center gap-2"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Mais de 1.000+ profissionais já instalaram
              </motion.p>
            </div>

            {/* Right side - Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { 
                  number: "100%", 
                  label: "Garantia de Funcionamento", 
                  icon: Shield, 
                  iconColor: "text-emerald-400",
                  gradientFrom: "from-emerald-500/10",
                  gradientTo: "to-transparent",
                  numberGradient: "from-emerald-300 to-emerald-400",
                  glowColor: "shadow-emerald-500/20"
                },
                { 
                  number: "24/7", 
                  label: "Suporte Técnico", 
                  icon: Headphones,
                  iconColor: "text-blue-400",
                  gradientFrom: "from-blue-500/10",
                  gradientTo: "to-transparent",
                  numberGradient: "from-blue-300 to-blue-400",
                  glowColor: "shadow-blue-500/20"
                },
                { 
                  number: "30min", 
                  label: "Instalação Remota", 
                  icon: Zap,
                  iconColor: "text-purple-400",
                  gradientFrom: "from-purple-500/10",
                  gradientTo: "to-transparent",
                  numberGradient: "from-purple-300 to-purple-400",
                  glowColor: "shadow-purple-500/20"
                },
                { 
                  number: "1000+", 
                  label: "Clientes Satisfeitos", 
                  icon: Star,
                  iconColor: "text-amber-400",
                  gradientFrom: "from-amber-500/10",
                  gradientTo: "to-transparent",
                  numberGradient: "from-amber-300 to-amber-400",
                  glowColor: "shadow-amber-500/20"
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Glow shadow on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${stat.glowColor} blur-xl -z-10`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <stat.icon className={`w-8 h-8 ${stat.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-3xl font-bold text-white mb-2 bg-gradient-to-r ${stat.numberGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-300 leading-tight group-hover:text-slate-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom trust badges - mobile visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 mt-12 lg:hidden"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Settings className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-slate-300 text-center group-hover:text-slate-200 transition-colors duration-300">Instalação Assistida</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Headphones className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-slate-300 text-center group-hover:text-slate-200 transition-colors duration-300">Suporte Premium</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <Shield className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs text-slate-300 text-center group-hover:text-slate-200 transition-colors duration-300">100% Seguro</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}