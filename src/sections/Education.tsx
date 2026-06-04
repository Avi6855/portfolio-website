import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { education } from '../data/content';
import { GraduationCap, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading title="Education" subtitle="Academic background and foundational knowledge." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shrink-0 border border-white/10">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                  <div className="text-lg text-gray-400 flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4" />
                    {education.institution}
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <span className="text-sm text-gray-400">CGPA:</span>
                    <span className="font-bold text-white">{education.cgpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 shrink-0">
                <span className="text-lg font-medium tracking-wide">{education.duration}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
