import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { ExternalLink, Briefcase, ShoppingBag } from 'lucide-react';

const platforms = [
  {
    name: 'Upwork',
    url: 'https://upwork.com/freelancers/aymanibrahimawad',
    description: 'Expert-vetted talent for complex data engineering projects.',
    color: 'text-[#14a800]',
    bgColor: 'bg-[#14a800]',
    borderColor: 'hover:border-[#14a800]',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.211 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.816v6.629c0 .375-.02.738-.052 1.086-.771-.098-1.551-1.01-1.551-2.277V3.492H2.95v5.803c0 1.059.279 2.062.836 2.875.766 1.117 2.126 1.765 3.522 1.765 2.158 0 4.093-1.564 4.887-3.665a21.31 21.31 0 0 0 1.626 4.31l-3.327 9.93h3.585l1.636-5.842c.815.65 1.769 1.042 2.849 1.042 2.992 0 5.436-2.444 5.436-5.437 0-3-2.444-5.438-5.436-5.438z"/>
      </svg>
    )
  },
  {
    name: 'Mostaql',
    url: 'https://mostaql.com/u/aymaniawad',
    description: 'The leading freelance platform in the MENA region.',
    color: 'text-[#2386c8]',
    bgColor: 'bg-[#2386c8]',
    borderColor: 'hover:border-[#2386c8]',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    name: 'Khamsat',
    url: 'https://khamsat.com/user/aymaniawad',
    description: 'Marketplace for micro-services and quick consultations.',
    color: 'text-[#b68a3e]',
    bgColor: 'bg-[#b68a3e]',
    borderColor: 'hover:border-[#b68a3e]',
    icon: <ShoppingBag className="w-8 h-8" />
  }
];

const FreelanceProfiles: React.FC = () => {
  return (
    <section id="freelance" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="Hire Me On" 
            subtitle="Securely hire me through your preferred platform"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <a 
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center text-center p-8 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent ${platform.borderColor} transition-all duration-300 hover:shadow-xl group h-full relative overflow-hidden`}
              >
                <div className={`w-16 h-16 rounded-full ${platform.bgColor} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                   <div className={`${platform.color}`}>
                      {platform.icon}
                   </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{platform.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {platform.description}
                </p>
                
                <div className={`flex items-center text-sm font-bold ${platform.color}`}>
                  Visit Profile <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceProfiles;