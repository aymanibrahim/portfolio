import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Data Engineering Fundamentals",
      skills: [
        "Data Modeling (OLTP → OLAP)",
        "ETL/ELT Pipeline Architecture",
        "Data Validation & Quality Frameworks",
        "Data Warehousing & Lake Design",
        "Data Governance & Lineage"
      ]
    },
    {
      title: "Cloud & Big Data",
      skills: [
        "AWS (Glue, Redshift, S3, Athena, EMR)",
        "Huawei Cloud",
        "Apache Spark (PySpark)",
        "Hadoop, Hive, HBase",
        "Apache Airflow"
      ]
    },
    {
      title: "Technologies",
      skills: [
        "Languages: Python, SQL",
        "Databases: PostgreSQL, MySQL, MongoDB",
        "Analytics: Tableau, BI Tools",
        "DevOps: Docker, Containers"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Core Technical Expertise" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border-t-4 border-primary-500 h-full">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300">
                      <span className="mr-3 text-primary-500 font-bold">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;