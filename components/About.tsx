import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { ShieldCheck, TrendingUp, MessageSquare, Layers } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => (
  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
    {Icon && <Icon className="w-8 h-8 text-primary-500 mb-4" />}
    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="About"             
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image & Intro */}
          <div className="lg:w-1/3 flex flex-col items-center text-center lg:items-start lg:text-left">
             <FadeIn direction="right">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl mb-8 mx-auto lg:mx-0 bg-slate-200 dark:bg-slate-700 relative">                 
                  <img src="/portfolio/ayman-ibrahim.jpeg" alt="Ayman Ibrahim" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Ayman Ibrahim
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  A freelance Data Engineer with 5+ years of experience designing end-to-end data platforms. My unique journey from Civil Engineering to Data Engineering brings analytical rigor and systems thinking to every data challenge.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  I help startups and growing businesses eliminate data chaos—centralizing scattered sources, automating manual workflows, and building reliable infrastructure that turns raw data into strategic advantage.
                </p>
            </FadeIn>
          </div>

          {/* Feature Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn delay={100} direction="up">
                <FeatureCard 
                  title="Quality-First Approach"
                  description="Engineering discipline ensures robust, maintainable systems that stand the test of time."
                  icon={ShieldCheck}
                />
              </FadeIn>
              <FadeIn delay={200} direction="up">
                <FeatureCard 
                  title="Business-Driven Solutions"
                  description="Technology serves your goals, not the other way around. I focus on ROI and actionable insights."
                  icon={TrendingUp}
                />
              </FadeIn>
              <FadeIn delay={300} direction="up">
                <FeatureCard 
                  title="Clear Communication"
                  description="I translate complex data concepts for all stakeholders, bridging the gap between tech and business."
                  icon={MessageSquare}
                />
              </FadeIn>
              <FadeIn delay={400} direction="up">
                <FeatureCard 
                  title="End-to-End Ownership"
                  description="From architecture design through production deployment, I handle the full lifecycle."
                  icon={Layers}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
