import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Education & Certifications" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <FadeIn direction="left">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <BookOpen className="w-6 h-6 text-primary-500 mr-3" />
                Education
              </h3>
              
              <div className="space-y-8 relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900"></span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">Postgraduate Diploma in Structural Engineering</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">2000 - 2002</p>
                </div>
                <div className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900"></span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">Bachelor's in Civil Engineering</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">Alexandria University</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">1993 - 1999</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn direction="right">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
                <Award className="w-6 h-6 text-secondary-500 mr-3" />
                Certifications
              </h3>
              
              <div className="flex flex-wrap gap-3">
                 {[                   
                   "Google Project Management (2025)",
                   "Google Advanced Data Analytics (2025)",
                   "IBM Data Engineering (2025)",
                   "Huawei Cloud Certified Developer Associate - Big Data (2025)",
                   "Data Engineering Bootcamp | DataExpert (2025)",
                   "AWS Certified Cloud Practitioner (2023)",
                   "AWS Certified Data Analytics – Specialty (2022)"
                 ].map((cert, idx) => (
                   <span key={idx} className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:border-secondary-400 transition-colors cursor-default">
                     {cert}
                   </span>
                 ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Education;
