import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { Button } from './Button';
import { useState, useEffect } from 'react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
    }
    if (url.includes('drive.google.com/drive/folders/')) {
      const match = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
      return match ? `https://drive.google.com/embeddedfolderview?id=${match[1]}#grid` : url;
    }
    return url;
  };

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
    }
  }, [project, isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-[5%] left-[5%] right-[5%] bottom-[5%] md:top-[10%] md:left-[10%] md:right-[10%] md:bottom-[10%] bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/20">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Video Player */}
                {project?.demoVideo ? (
                  <div className="aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative">
                    {!isPlaying ? (
                      <div 
                        className="w-full h-full relative cursor-pointer group"
                        onClick={() => setIsPlaying(true)}
                      >
                        <img 
                          src={project.thumbnail} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-blue-500/80 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-md shadow-xl shadow-blue-500/30 border border-white/20">
                            <Play className="w-8 h-8 text-white translate-x-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    ) : project.demoVideo.includes('drive.google.com') ? (
                      <iframe 
                        src={getEmbedUrl(project.demoVideo)}
                        className="w-full h-full object-contain border-0"
                        allow="autoplay"
                        allowFullScreen
                      />
                    ) : (
                      <video 
                        src={project.demoVideo} 
                        controls 
                        autoPlay
                        className="w-full h-full object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : (
                  <div className="aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer border border-white/20 backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white translate-x-0.5" />
                    </div>
                    <span className="absolute bottom-4 left-4 text-sm text-gray-400 font-medium">Add 'demoVideo' property in content.ts to show a real video</span>
                  </div>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white/90">Overview</h4>
                      <p className="text-gray-300 leading-relaxed">{project.summary}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-white/90">Key Features</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex gap-3 text-gray-300">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider">Challenges & Solutions</h4>
                      <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <p className="text-xs text-red-400 font-medium mb-1">Challenge</p>
                          <p className="text-sm text-gray-300">{project.challenges}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <p className="text-xs text-green-400 font-medium mb-1">Solution</p>
                          <p className="text-sm text-gray-300">{project.solutions}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-gray-400 uppercase tracking-wider">Links</h4>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full gap-2">
                            <GithubIcon className="w-4 h-4" /> GitHub
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
