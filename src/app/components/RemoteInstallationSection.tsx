import { Monitor, Headphones, CheckCircle2, Shield, Download, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function RemoteInstallationSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: "Acesso remoto seguro",
      description: "Utilizamos software de acesso remoto certificado e criptografado",
      color: "emerald"
    },
    {
      icon: Headphones,
      title: "Suporte em tempo real",
      description: "Técnico acompanha você por vídeo chamada durante toda a instalação",
      color: "blue"
    },
    {
      icon: Shield,
      title: "100% seguro e confiável",
      description: "Seus dados estão protegidos. Sem riscos para seu sistema",
      color: "purple"
    }
  ];

  const installSteps = [
    { status: "completed", text: "Sistema verificado" },
    { status: "completed", text: "Arquivos baixados" },
    { status: "progress", text: "Instalando componentes..." },
    { status: "pending", text: "Configurando software" },
    { status: "pending", text: "Testes finais" }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                <Monitor className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700 tracking-wide">Instalação Profissional</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl mb-6 text-slate-900">
                Instalação Remota
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  100% Assistida
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Esqueça as complicações de instalação. Nossa equipe especializada faz tudo remotamente 
                enquanto você acompanha cada passo do processo.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base mb-1 text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                      <CheckCircle2 className={`w-5 h-5 text-${feature.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "30min", label: "Tempo médio" },
                  { value: "100%", label: "Taxa de sucesso" },
                  { value: "1000+", label: "Instalações" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200"
                  >
                    <div className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Installation mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-3xl p-8 shadow-2xl border border-white/10">
              {/* Top bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div className="flex-1 text-center text-sm text-white/60">Instalação do Wilcom E4.2</div>
              </div>

              {/* Installation screen */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm">Instalando Wilcom E4.2</div>
                    <div className="text-white/60 text-xs">Não feche esta janela</div>
                  </div>
                  <div className="text-emerald-400 text-xs">{progress}%</div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Installation steps */}
                <div className="space-y-3">
                  {installSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      {step.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : step.status === "progress" ? (
                        <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-white/20 rounded-full flex-shrink-0" />
                      )}
                      <span className={`text-sm ${step.status === "pending" ? "text-white/40" : "text-white/90"}`}>
                        {step.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-white/60">Técnico online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/60">Conexão ativa</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-2xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-900">Setup rápido</div>
                  <div className="text-xs text-slate-500">Pronto em minutos</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
