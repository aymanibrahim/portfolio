import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Consulting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message! I'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', type: 'Consulting', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <FadeIn>
          <SectionHeading 
            title="Let's Build Something Great Together" 
            subtitle="Ready to Transform Your Data Infrastructure?"
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <FadeIn direction="right">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                        <a href="mailto:ayman.blended@gmail.com" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <Mail className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>ayman.blended@gmail.com</span>
                        </a>
                        
                         <a href="https://linkedin.com/in/aymanibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <Linkedin className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>linkedin.com/in/aymanibrahim</span>
                        </a>

                        <a href="https://github.com/aymanibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <Github className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>github.com/aymanibrahim</span>
                        </a>

                         <div className="flex items-center text-slate-600 dark:text-slate-300">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <MapPin className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>Alexandria, Egypt (Remote Global)</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Available For:</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Freelance Projects", "Consulting", "Training", "Partnerships"].map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
             <FadeIn direction="left" delay={200}>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        
                         <div>
                            <label htmlFor="type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
                            <select 
                                id="type" 
                                name="type" 
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white"
                            >
                                <option>Consulting</option>
                                <option>Full Project</option>
                                <option>Training</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white resize-none"
                                placeholder="Tell me about your project or data challenges..."
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                             <p className="text-xs text-slate-500 dark:text-slate-400">
                                I typically respond within 24 hours
                             </p>
                             <button 
                                type="submit"
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                             >
                                <Send className="w-4 h-4" />
                                Send Message
                             </button>
                        </div>
                    </form>
                </div>
             </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;