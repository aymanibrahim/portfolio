import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Trophy, Quote, Linkedin } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Achievements & Recognition" />
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
          {/* Award Card */}
          <FadeIn delay={100} className="lg:w-1/3">
            <div className="h-full bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center justify-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-500">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3rd Prize Winner</h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium">IBM Digital-Nation Competition Egypt</p>
            </div>
          </FadeIn>

          {/* LinkedIn Recommendation Card */}
          <FadeIn delay={200} className="lg:w-2/3">
            <div className="h-full bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col relative hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-primary-200 dark:text-slate-700 mb-4" />
              <blockquote className="flex-1">
                <p className="text-slate-700 dark:text-slate-300 text-lg italic leading-relaxed mb-6">
                  "Mr. Ayman is a dedicated and a professional engineer with a wide array of certificates and skills, specifically in data engineering and data analytics. I, without hesitation, recommend Mr. Ayman to anyone who wants to do business with him."
                </p>
              </blockquote>
              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700 pt-6 mt-auto">
                <div className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Amr SHOULA</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Data Steward and Quality Analyst | D&C | Oil & Gas</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">January 16, 2023 • Client</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
