import { Sparkles, Image, Edit, Layers, Cpu, Palette, Shapes, Workflow } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  const applications = [
    {
      icon: Palette,
      title: "Criação de bordados do zero",
      description: "Design completo com ferramentas profissionais",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Image,
      title: "Digitalização de imagens",
      description: "Converta qualquer arte em bordado de alta qualidade",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Edit,
      title: "Edição de arquivos de bordado",
      description: "Modifique e otimize seus designs com precisão",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Workflow,
      title: "Compatível com diversas máquinas",
      description: "Suporta todos os formatos principais do mercado",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-700 tracking-wide">Software Completo</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-6 text-slate-900">
            O que é o <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Wilcom E4.2</span>?
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            O Wilcom E4.2 é reconhecido mundialmente como{" "}
            <span className="text-slate-900 font-semibold">o software mais completo</span> para bordado profissional,
            utilizado por fábricas, designers têxteis e profissionais que exigem precisão e qualidade incomparável.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-white border border-slate-200 rounded-2xl hover:border-transparent transition-all duration-500 overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="absolute inset-[1px] bg-white rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <motion.div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${app.color} mb-6 group-hover:scale-110 transition-transform duration-500`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg text-slate-900 mb-2 group-hover:text-slate-900 transition-colors">
                      {app.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                    style={{ width: '50%' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl text-white mb-2">
                Usado pelos melhores profissionais do mundo
              </h3>
              <p className="text-slate-300">
                Escolhido por empresas líderes na indústria têxtil e de bordados
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl text-white mb-1">10+</div>
                <div className="text-sm text-slate-400">Anos no mercado</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl text-white mb-1">50+</div>
                <div className="text-sm text-slate-400">Países</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl text-white mb-1">100K+</div>
                <div className="text-sm text-slate-400">Usuários</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}