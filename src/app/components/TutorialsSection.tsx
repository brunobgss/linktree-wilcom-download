import { Play, Video, BookOpen, GraduationCap, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function TutorialsSection() {
  const tutorials = [
    {
      icon: Play,
      title: "Primeiros passos",
      description: "Aprenda o básico do Wilcom E4.2",
      duration: "15 min",
      level: "Iniciante",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Video,
      title: "Funções intermediárias",
      description: "Explore recursos avançados",
      duration: "30 min",
      level: "Intermediário",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Técnicas profissionais",
      description: "Domine o software como um expert",
      duration: "45 min",
      level: "Avançado",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: GraduationCap,
      title: "Dicas e truques",
      description: "Otimize seu fluxo de trabalho",
      duration: "20 min",
      level: "Todos",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Video className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 tracking-wide">Aprenda a Usar</span>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl mb-4 text-slate-900">
            Vídeos Tutoriais <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exclusivos</span>
          </h2>
          
          <p className="text-lg text-slate-600">
            Após a instalação, você terá acesso completo à nossa biblioteca de vídeos tutoriais, 
            do básico ao avançado
          </p>
        </motion.div>

        {/* Tutorials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tutorials.map((tutorial, index) => {
            const Icon = tutorial.icon;
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
                <div className="relative h-full overflow-hidden bg-slate-50 border border-slate-200 rounded-2xl hover:border-transparent transition-all duration-500">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tutorial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="absolute inset-[1px] bg-white rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Thumbnail area with icon */}
                    <div className={`relative aspect-video mb-4 rounded-xl bg-gradient-to-br ${tutorial.color} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                      {/* Play button overlay */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative z-10 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl cursor-pointer"
                      >
                        <Play className={`w-7 h-7 ml-1 text-${tutorial.color.split('-')[1]}-500 fill-current`} />
                      </motion.div>
                      
                      {/* Icon background */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Icon className="w-24 h-24 text-white" />
                      </div>

                      {/* Duration badge */}
                      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg">
                        <span className="text-xs text-white">{tutorial.duration}</span>
                      </div>
                    </div>

                    {/* Level badge */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1 mb-3 rounded-full text-xs bg-gradient-to-r ${tutorial.color} text-white`}>
                      <TrendingUp className="w-3 h-3" />
                      {tutorial.level}
                    </div>

                    {/* Title and description */}
                    <h3 className="text-lg mb-2 text-slate-900">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600">
                      {tutorial.description}
                    </p>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Video,
              title: "Biblioteca completa",
              description: "Mais de 20 horas de conteúdo exclusivo",
              color: "blue"
            },
            {
              icon: BookOpen,
              title: "Atualizações constantes",
              description: "Novos vídeos adicionados mensalmente",
              color: "purple"
            },
            {
              icon: Sparkles,
              title: "Acesso vitalício",
              description: "Assista quantas vezes quiser, sem limite",
              color: "emerald"
            }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-base mb-2 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
