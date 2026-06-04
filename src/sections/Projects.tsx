import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { projects } from '../data/content';
import { ProjectModal } from '../components/ui/ProjectModal';
import { FolderGit2, ArrowRight } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Enterprise Business Automation Platform', 'Customer Engagement & Business Automation', 'Fintech Mobile Application', 'Privacy-Focused Video Streaming Platform'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading title="Projects" subtitle="Architecting robust applications and enterprise systems." />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat === 'Privacy-Focused Video Streaming Platform' ? 'Video Streaming' : cat.split(' ')[0]} {cat !== 'All' && cat !== 'Privacy-Focused Video Streaming Platform' ? '...' : ''}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any, index: number) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group h-full"
              >
              <Card className="h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col shadow-2xl shadow-black/50">
                <div className="h-56 bg-neutral-900 border-b border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <FolderGit2 className="w-20 h-20 text-white/10 group-hover:text-blue-500/40 transition-colors duration-500" />
                      </div>
                    </>
                  )}
                  {/* Overlay play button style indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-widest mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed line-clamp-3 mb-8 flex-1 text-[0.95rem]">
                    {project.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex gap-2 flex-wrap max-w-[70%]">
                      {project.techStack.slice(0, 3).map((tech: string, idx: number) => (
                        <span key={idx} className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="text-blue-400 flex items-center gap-1.5 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
