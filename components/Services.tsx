import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Server, Share2, Database, Shield } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Data Infrastructure & Architecture",
    points: ["Analytics platform design", "Cloud data architecture (AWS)", "Legacy system migration"],
    icon: Server
  },
  {
    title: "Data Integration & Pipelines",
    points: ["ETL/ELT implementation", "Multi-source integration", "Workflow automation (Airflow)"],
    icon: Share2
  },
  {
    title: "Data Warehousing & Analytics",
    points: ["Dimensional modeling", "Analytics-ready datasets", "Query optimization"],
    icon: Database
  },
  {
    title: "Data Quality & Governance",
    points: ["Validation frameworks", "Quality monitoring", "Data lineage & audit trails"],
    icon: Shield
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Services I Offer" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="h-full bg-slate-50 dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-800 group">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-colors text-primary-600 dark:text-primary-400">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={400}>
            <div className="mt-12 text-center bg-primary-50 dark:bg-slate-800/50 p-6 rounded-lg inline-block w-full">
                <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">Engagement Models</h4>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-slate-800 dark:text-slate-200 font-medium">Project-based</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-slate-800 dark:text-slate-200 font-medium">Ongoing retainer</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-slate-800 dark:text-slate-200 font-medium">Technical consulting</span>
                </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;