import { MessageCircle, CreditCard, Calendar, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contato via WhatsApp",
      description: "Entre em contato com nossa equipe especializada. Respondemos em minutos!",
      color: "from-emerald-500 to-green-600",
      iconColor: "text-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Confirmação da compra",
      description: "Processo seguro e transparente. Pagamento facilitado via Pix, cartão ou boleto",
      color: "from-blue-500 to-cyan-600",
      iconColor: "text-blue-500"
    },
    {
      icon: Calendar,
      title: "Agendamento da instalação",
      description: "Escolha o melhor horário para você. Flexibilidade total na sua agenda",
      color: "from-purple-500 to-violet-600",
      iconColor: "text-purple-500"
    },
    {
      icon: Settings,
      title: "Instalação remota completa",
      description: "Técnico especializado instala e configura tudo via acesso remoto seguro",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Testes e validação",
      description: "Garantimos que tudo está funcionando perfeitamente antes de finalizar",
      color: "from-pink-500 to-rose-600",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <Settings className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700 tracking-wide">Processo Simples</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-4 text-slate-900">
            Como funciona a <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">instalação</span>?
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Em <span className="text-slate-900 font-semibold">5 passos simples</span>, você terá o Wilcom E4.2 instalado e funcionando
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector line - desktop only */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 z-0">
                      <div className="h-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  )}

                  {/* Step card */}
                  <div className="relative z-10 group">
                    {/* Number badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} p-1 shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                        <Icon className={`w-10 h-10 ${step.iconColor}`} />
                      </div>
                    </motion.div>

                    {/* Step number */}
                    <div className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-sm`}>
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg mb-2 text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector - mobile */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center my-4">
                      <ArrowRight className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl border border-slate-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl text-slate-900 mb-2">
                Todo o processo é remoto, seguro e acompanhado
              </h3>
              <p className="text-slate-600">
                Você não precisa sair de casa. Nossa equipe cuida de tudo para você.
              </p>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-sm text-slate-700">Tempo médio: <strong>30 minutos</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
