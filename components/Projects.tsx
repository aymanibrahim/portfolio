import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "E-Commerce Analytics Platform",
    challenge: "Transactional data locked in MySQL, product catalog in MongoDB, no unified reporting.",
    solution: "Built centralized data warehouse with Airflow orchestration, Spark processing, and Tableau dashboards.",
    techStack: ["MySQL", "MongoDB", "Apache Airflow", "Apache Spark", "Tableau", "Python"],
    impact: "Single source of truth, real-time dashboards, predictive analytics enabled.",
    githubLink: "https://github.com/aymanibrahim/ecommerce"
  },
  {
    title: "Data Pipeline Automation with Airflow",
    challenge: "Manual data updates, no pipeline visibility, inconsistent schedules.",
    solution: "End-to-end automated workflows with DAGs, error handling, monitoring dashboard.",
    techStack: ["Apache Airflow", "Python", "PostgreSQL"],
    impact: "Zero manual intervention, full transparency, proactive issue detection.",
    githubLink: "https://github.com/aymanibrahim/data-pipeline-airflow"
  },
  {
    title: "Data Warehouse with Amazon Redshift",
    challenge: "Growing data volume, slow queries, need for cloud scalability.",
    solution: "Redshift cluster with star schema, distribution keys, query optimization.",
    techStack: ["Amazon Redshift", "AWS S3", "Python", "SQL"],
    impact: "100x faster queries, seamless TB-scale data processing.",
    githubLink: "https://github.com/aymanibrahim/data-warehouse-redshift"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Featured Projects" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group h-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Challenge</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Solution</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mt-1">{project.solution}</p>
                  </div>
                  
                   <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="p-4 bg-primary-50 dark:bg-slate-700/50 rounded-lg mb-6 border-l-4 border-primary-500">
                        <span className="block text-xs font-bold text-primary-700 dark:text-primary-300 uppercase">Impact</span>
                        <span className="text-sm text-slate-800 dark:text-slate-200 font-medium">{project.impact}</span>
                      </div>
                      
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="text-center">
            <FadeIn delay={400}>
              <a href="https://github.com/aymanibrahim" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 rounded-full transition-colors">
                View All 30+ Projects on GitHub <Github className="w-4 h-4 ml-2"/>
              </a>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Projects;