import { Shield, Wrench, CheckCircle, Users, Star, Award, Clock, Lock } from "lucide-react";
import { motion } from "motion/react";

export function TrustSection() {
  const trustItems = [
    {
      icon: Lock,
      title: "Compra 100% segura",
      description: "Transações protegidas e dados criptografados",
      gradient: "from-emerald-500 to-green-600",
      stats: "SSL 256-bit"
    },
    {
      icon: Wrench,
      title: "Suporte contínuo",
      description: "Assistência técnica sempre que precisar",
      gradient: "from-blue-500 to-cyan-600",
      stats: "24/7 disponível"
    },
    {
      icon: CheckCircle,
      title: "Garantia total",
      description: "Funcionamento garantido ou seu dinheiro de volta",
      gradient: "from-purple-500 to-violet-600",
      stats: "30 dias"
    },
    {
      icon: Users,
      title: "Atendimento humano",
      description: "Pessoas reais prontas para ajudar via WhatsApp",
      gradient: "from-orange-500 to-red-600",
      stats: "Resposta em 5min"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Designer Têxtil",
      content: "Melhor investimento que fiz para meu negócio. O suporte é impecável!",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Proprietária de Confecção",
      content: "A instalação foi super rápida e o software funciona perfeitamente.",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Bordador Profissional",
      content: "Uso há 6 meses e minha produtividade aumentou em 70%. Recomendo!",
      rating: 5
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full mb-6">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700 tracking-wide">Segurança e Confiança</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-4 text-slate-900">
            Por que <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">confiar em nós</span>?
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transparência, segurança e suporte real. Esses são nossos pilares.
          </p>
        </motion.div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-white border border-slate-200 rounded-2xl hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  
                  <div className="relative text-center">
                    {/* Icon with gradient */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-block mb-4"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Stats badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full mb-3">
                      <span className="text-xs text-slate-600">{item.stats}</span>
                    </div>

                    <h3 className="text-lg mb-2 text-slate-900">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-3 text-slate-900">
              O que nossos clientes dizem
            </h3>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-slate-600">4.9/5 de 500+ avaliações</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom commitment section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-3xl overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white">Nosso Compromisso</span>
              </div>
              <h3 className="text-3xl text-white mb-3">
                Sua satisfação é nossa prioridade
              </h3>
              <p className="text-slate-300 text-lg">
                Garantimos a melhor experiência desde a compra até o suporte contínuo. 
                Você não está sozinho nessa jornada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, label: "Compra Protegida" },
                { icon: Clock, label: "Instalação Rápida" },
                { icon: Users, label: "Suporte Real" },
                { icon: Award, label: "Garantia Total" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <Icon className="w-6 h-6 text-emerald-400" />
                    <span className="text-xs text-white text-center">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
