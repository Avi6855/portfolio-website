import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { experience } from '../data/content';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

// Helper to bold text between **markers**
function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const highlights = [
  {
    text: "Engineered a scalable **Salesforce-inspired SaaS platform** for supply chain and sales automation, integrating inventory, procurement, orders, shipments, and customer workflows into a unified enterprise system.",
    delay: 0.1,
  },
  {
    text: "Developed a **context-aware AI Copilot** powered by LLMs that analyzes real-time business data to generate actionable insights, recommendations, and natural-language summaries across enterprise modules.",
    delay: 0.2,
  },
  {
    text: "Built an **agentic workflow automation system** that autonomously generates reports, identifies operational bottlenecks, prioritizes critical alerts, and assists users with data-driven actions throughout supply chain and sales processes.",
    delay: 0.3,
  },
  {
    text: "Implemented **AI-powered predictive analytics** for demand forecasting, low-stock detection, procurement planning, revenue trend analysis, and executive dashboards, enabling proactive business decision-making.",
    delay: 0.4,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading title="Professional Experience" subtitle="Building enterprise software and digital products." />

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            {/* Timeline vertical line */}
            <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-purple-500/50 to-transparent hidden md:block" />

            <div className="relative flex gap-6">
              {/* Timeline dot + icon */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0 z-10"
                >
                  <Briefcase className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="flex-1 pb-12">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden group shadow-xl shadow-black/40"
                >
                  {/* Glowing top border */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Header */}
                  <div className="p-8 pb-6 border-b border-white/5">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex flex-col gap-1.5 mt-2">
                          <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <MapPin className="w-3.5 h-3.5 text-gray-600" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full shrink-0 w-fit">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-8 space-y-5">
                    {highlights.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        className="flex gap-4 group/item"
                      >
                        <div className="mt-1 shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 group-hover/item:text-blue-400 transition-colors" />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-[0.95rem]">
                          {renderBold(item.text)}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skills tag row */}
                  <div className="px-8 pb-8 flex flex-wrap gap-2">
                    {['Android', 'Kotlin', 'Spring Boot', 'Next.js', 'TypeScript', 'OpenAI / LLMs', 'PostgreSQL', 'Firebase'].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
