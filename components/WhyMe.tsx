import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';

const WhyMe: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-900 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
           <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Me?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
           </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={100} direction="up">
            <div className="glass p-8 rounded-xl h-full border border-slate-700">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary-300 mb-2">Technical Depth Meets Business Acumen</h3>
                <p className="text-slate-300 text-sm">I solve business problems, not just build pipelines. I ensure technology aligns with your strategic goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-300 mb-2">Reliability You Can Count On</h3>
                <p className="text-slate-300 text-sm">20+ years engineering ensures production-ready systems that are robust and scalable.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="glass p-8 rounded-xl h-full border border-slate-700">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary-300 mb-2">Clear Communication</h3>
                <p className="text-slate-300 text-sm">Plain language, no jargon. I bridge the gap between technical complexity and business understanding.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-300 mb-2">Long-Term Partnership</h3>
                <p className="text-slate-300 text-sm">Scalable systems, not quick fixes. I build infrastructure designed to grow with your business.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
             <div className="glass p-8 rounded-xl h-full border border-slate-700">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Education & Empowerment</h3>
                <p className="text-slate-300 text-sm">Your team understands and maintains systems. I document and train to ensure sustainability.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                <p className="text-slate-300 text-sm">Consistent client success across industries with a focus on delivering tangible results.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;