import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Trophy, Book, Github, Users, Award } from 'lucide-react';

const achievements = [
  { text: "AWS Certified Data Analytics Specialist", icon: Trophy, color: "text-amber-500" },
  { text: "Active Educator: 6+ years training professionals", icon: Book, color: "text-blue-500" },
  { text: "GitHub Arctic Code Vault Contributor", icon: Github, color: "text-slate-500" },
  { text: "GitHub Pull Shark Achievement", icon: Github, color: "text-purple-500" },
  { text: "3rd Prize - IBM Digital-Nation Competition Egypt", icon: Award, color: "text-yellow-600" },
  { text: "59 GitHub Followers", icon: Users, color: "text-green-500" },
  { text: "30+ Open Source Repositories", icon: Github, color: "text-slate-700 dark:text-slate-300" },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Achievements & Recognition" />
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
             <FadeIn key={index} delay={index * 50}>
               <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                 <div className={`mr-4 ${item.color}`}>
                   <item.icon className="w-8 h-8" />
                 </div>
                 <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{item.text}</span>
               </div>
             </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;