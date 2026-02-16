import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { RefreshCw, BarChart2, Clock, Target } from 'lucide-react';
import { ProblemSolution } from '../types';

const problems: ProblemSolution[] = [
  {
    problem: "Data Fragmentation",
    solution: "Unified, centralized data platform",
    icon: RefreshCw
  },
  {
    problem: "Unreliable Reporting",
    solution: "Automated, trusted analytics",
    icon: BarChart2
  },
  {
    problem: "Manual Data Tasks",
    solution: "Automated ETL pipelines",
    icon: Clock
  },
  {
    problem: "No Single Source of Truth",
    solution: "One reliable data warehouse",
    icon: Target
  }
];

const Problems: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="The Problems I Solve" 
            subtitle="Your Data Challenges, My Solutions"
          />
        </FadeIn>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
            <FadeIn delay={100}>
              <div className="bg-primary-50 dark:bg-slate-800/50 p-8 rounded-xl border border-primary-100 dark:border-slate-700 max-w-2xl w-full mx-auto">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">Who I Work With:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 font-bold text-xl leading-none">•</span>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Startups scaling their data operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 font-bold text-xl leading-none">•</span>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Small-to-medium businesses drowning in spreadsheets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 font-bold text-xl leading-none">•</span>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">Teams ready to move from manual reporting to automated insights</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <FadeIn key={index} delay={index * 100 + 200}>
              <div className="h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group text-center">
                <div className="w-14 h-14 mx-auto bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{item.problem}</h4>
                <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto mb-3"></div>
                <p className="text-primary-700 dark:text-primary-300 font-medium">{item.solution}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;