import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-950 -z-20"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:mix-blend-normal dark:opacity-10"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:mix-blend-normal dark:opacity-10"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:mix-blend-normal dark:opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">       
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight leading-tight">
            Ayman Ibrahim
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-6 font-heading">
            Data Engineer
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-xl md:text-3xl text-slate-700 dark:text-slate-300 font-light mb-8 max-w-4xl mx-auto">
            Transforming fragmented data into <span className="text-primary-600 dark:text-primary-400 font-semibold">trusted insights</span>
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Building scalable data platforms that empower businesses to make decisions.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary-500/30 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400 dark:text-slate-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;