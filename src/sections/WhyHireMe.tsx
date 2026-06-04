import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { whyHireMe } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const WhyHireMe = () => {
  return (
    <section id="whyhireme" className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading title="Why Recruiters Should Hire Me" subtitle="What I bring to the table." />

        <div className="grid md:grid-cols-2 gap-8">
          {whyHireMe.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
