import React from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import {
  Trophy,
  Quote,
  Linkedin,
  Star,
  User,
  Clock,
  Share2,
  Calendar
} from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading title="Achievements & Recognition" />
        </FadeIn>

        {/* ========================= */}
        {/* Nafezely Testimonial */}
        {/* ========================= */}
        <FadeIn delay={100}>
          <div className="max-w-5xl mx-auto mb-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-8 hover:shadow-lg transition-shadow">

              <div className="flex flex-col lg:flex-row gap-8">

                {/* Rating */}
                <div className="lg:w-1/4 flex flex-col gap-3 items-center justify-center">
                  {Array.from({ length: 6 }).map((_, row) => (
                    <div key={row} className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Review Content */}
                <div className="lg:w-3/4">
                  <Quote className="w-10 h-10 text-primary-300 mb-4" />

                  <blockquote>
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic">
                      "Eng. Ayman is highly professional and knowledgeable in
                      Python Data Analysis. Communication was excellent,
                      delivery was on time, and the quality of work exceeded
                      expectations. I strongly recommend working with him and
                      would gladly collaborate again."
                    </p>
                  </blockquote>

                  <div className="border-t border-slate-200 dark:border-slate-700 mt-6 pt-6">

                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-primary-600">
                        <User className="w-4 h-4" />
                        <span className="font-semibold">
                          Alaa Mohamed
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>5 months ago</span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Python Data Analysis Project</span>
                      </div>

                      <div className="flex items-center gap-1 text-primary-600 text-sm">
                        <Share2 className="w-4 h-4" />
                        <span>Shared Review</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400">
                      Verified client review from Nafezely freelance platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ========================= */}
        {/* Existing Achievement Cards */}
        {/* ========================= */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">

          {/* IBM Award */}
          <FadeIn delay={200} className="lg:w-1/3">
            <div className="h-full bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center justify-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-500">
                <Trophy className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                3rd Prize Winner
              </h3>

              <p className="text-slate-600 dark:text-slate-300 font-medium">
                IBM Digital-Nation Competition Egypt
              </p>
            </div>
          </FadeIn>

          {/* LinkedIn Recommendation */}
          <FadeIn delay={300} className="lg:w-2/3">
            <div className="h-full bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col relative hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-primary-200 dark:text-slate-700 mb-4" />

              <blockquote className="flex-1">
                <p className="text-slate-700 dark:text-slate-300 text-lg italic leading-relaxed mb-6">
                  "Mr. Ayman is a dedicated and professional engineer with a
                  wide array of certificates and skills, specifically in data
                  engineering and data analytics. I, without hesitation,
                  recommend Mr. Ayman to anyone who wants to do business with
                  him."
                </p>
              </blockquote>

              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700 pt-6 mt-auto">
                <div className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Amr Shoula
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Data Steward and Quality Analyst | D&C | Oil & Gas
                  </p>

                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    January 16, 2023 • Client
                  </p>
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
