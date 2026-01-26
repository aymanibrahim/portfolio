import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ayman Ibrahim</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Freelance Data Engineer</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/aymanibrahim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/aymanibrahim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:ayman.blended@gmail.com" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
           <div className="flex gap-6 mb-4 md:mb-0 text-sm font-medium text-slate-600 dark:text-slate-400">
             <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
             <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
             <a href="#services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</a>
             <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
           </div>

           <div className="flex items-center gap-4">
              <p className="text-slate-500 dark:text-slate-500 text-sm">
                © 2026 Ayman Ibrahim - Data Engineer
              </p>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-primary-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;