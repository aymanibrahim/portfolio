import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Briefcase, Calendar } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    role: "Huawei Big Data Engineer | DEPI",
    company: "Huawei",
    period: "Nov 2024 - Present",
    description: "Specializing in Python automation, advanced SQL, and Spark/Hive optimization for enterprise-scale data infrastructure.",
    type: 'current'
  },
  {
    role: "Data Engineer",
    company: "Freelance (Upwork)",
    period: "Jul 2019 - Present",
    description: "Designing cloud data warehouses, optimizing PySpark jobs, orchestrating pipelines with Airflow, and implementing data quality frameworks for diverse international clients.",
    type: 'current'
  },
  {
    role: "Data Analytics Trainer",
    company: "Various Institutions",
    period: "2019 - Present",
    description: "Training professionals in data analytics and engineering concepts. Previously Programming Instructor at NASS Academy (2023).",
    type: 'past'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Professional Experience" />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 100} direction="left">
                <div className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[14px] top-0 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 ${exp.type === 'current' ? 'bg-primary-500' : 'bg-slate-400'} shadow-md`}></div>
                  
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                {exp.role}
                                {exp.type === 'current' && (
                                    <span className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded-full font-medium">Current</span>
                                )}
                            </h3>
                            <h4 className="text-primary-600 dark:text-primary-400 font-medium text-lg">{exp.company}</h4>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0 font-medium">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                        </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                        {exp.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-primary-100 dark:border-slate-700">
               <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary-500" />
                  Key Achievements
               </h4>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">Improved data accuracy for multiple clients</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">Reduced manual work by 70-90%</span>
                  </div>
                   <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">Enabled scalable analytics infrastructure</span>
                  </div>
               </div>
               <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 italic">
                 Note: Leveraging 20+ years of engineering background in project management.
               </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Experience;