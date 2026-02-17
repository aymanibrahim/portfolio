import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import FadeIn from './ui/FadeIn';
import { Mail, Linkedin, Github, MapPin, Send, Loader2, CheckCircle, AlertCircle, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Consulting',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const ACCESS_KEY = "7d0b79a2-00b1-45aa-b9c4-988a5c5d034b";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `New Portfolio Inquiry: ${formData.type}`,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`,
          botcheck: false, // Hidden field to prevent spam
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', type: 'Consulting', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle'); // Reset status when user starts typing again
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

                        <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <Phone className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>Connect on WhatsApp</span>
                        </a>

                        <a href="https://t.me/aymanibrahim" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <div className="w-10 h-10 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                                <MessageCircle className="w-5 h-5 text-primary-500" />
                            </div>
                            <span>Connect on Telegram</span>
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
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="Tell me about your project or data challenges..."
                            ></textarea>
                        </div>

                        {status === 'success' && (
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3 text-green-700 dark:text-green-400">
                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-sm font-medium">{errorMessage}</p>
                            </div>
                        )}

                        <div className="flex items-center justify-between pt-2">
                             <p className="text-xs text-slate-500 dark:text-slate-400">
                                I typically respond within 24 hours
                             </p>
                             <button 
                                type="submit"
                                disabled={isSubmitting || status === 'success'}
                                className={`px-8 py-3 rounded-lg font-semibold shadow-md transition-all flex items-center gap-2 ${
                                    isSubmitting || status === 'success'
                                    ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed' 
                                    : 'bg-primary-600 hover:bg-primary-700 hover:shadow-lg text-white'
                                }`}
                             >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
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
