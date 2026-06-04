import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { achievements } from '../data/content';
import { ExternalLink } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Trophy: 'from-yellow-500/20 to-amber-500/10 border-yellow-500/30 hover:border-yellow-400/60',
  Code2:  'from-blue-500/20 to-indigo-500/10 border-blue-500/30 hover:border-blue-400/60',
  Smartphone: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 hover:border-emerald-400/60',
  Server: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 hover:border-purple-400/60',
  Layout: 'from-pink-500/20 to-rose-500/10 border-pink-500/30 hover:border-pink-400/60',
};

const iconColors: Record<string, string> = {
  Trophy: 'text-yellow-400',
  Code2:  'text-blue-400',
  Smartphone: 'text-emerald-400',
  Server: 'text-purple-400',
  Layout: 'text-pink-400',
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading title="Key Achievements" subtitle="Milestones, recognitions, and competitive programming wins." />

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {achievements.map((achievement, index) => {
            const iconName = achievement.icon.displayName || achievement.icon.name || '';
            const gradColors = categoryColors[iconName] || 'from-white/10 to-white/5 border-white/10 hover:border-white/30';
            const iconColor = iconColors[iconName] || 'text-white';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group cursor-default"
              >
                <div className={`relative rounded-2xl border bg-gradient-to-br ${gradColors} p-6 h-full transition-all duration-300 shadow-lg shadow-black/30`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  <div className="relative z-10 h-full flex flex-col">

                  <div className={`w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`w-6 h-6 ${iconColor}`} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>

                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1 mt-4 text-xs font-semibold ${iconColor} hover:underline`}
                    >
                      <ExternalLink className="w-3 h-3" /> Verify
                    </a>
                  )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
