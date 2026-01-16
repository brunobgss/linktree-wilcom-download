import { CheckCircle2, Gauge, FileType, Briefcase, TrendingUp, Layers, Zap, Target } from "lucide-react";
import { motion } from "motion/react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Interface profissional e intuitiva",
      description: "Curva de aprendizado acelerada com interface moderna e ferramentas organizadas",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Gauge,
      title: "Alta precisão nos pontos",
      description: "Tecnologia de ponta que garante qualidade profissional em cada detalhe",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: FileType,
      title: "Compatível com múltiplos formatos",
      description: "Suporte a DST, PES, JEF, EMB e todos os principais formatos do mercado",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Ideal para uso profissional",
      description: "Ferramentas enterprise para produção em escala e gestão de projetos",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Aumento de produtividade",
      description: "Automatize processos e reduza o tempo de produção em até 70%",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Layers,
      title: "Recursos avançados",
      description: "Edição 3D, simulação de bordado e preview em tempo real",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 tracking-wide">Poder e Eficiência</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-4 text-slate-900">
            Por que escolher o <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Wilcom E4.2</span>?
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recursos profissionais que transformam sua forma de trabalhar com bordados
          </p>
        </motion.div>

        {/* Benefits grid with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top border accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div className="relative">
                    {/* Icon container with animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block mb-6"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl mb-3 text-slate-900 group-hover:text-slate-900 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Check icon on bottom right */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                      <CheckCircle2 className={`w-6 h-6 text-${benefit.gradient.split('-')[1]}-500`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-2 border-white" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-900">Mais de 1.000+ profissionais</div>
                <div className="text-xs text-slate-500">já aumentaram sua produtividade</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
