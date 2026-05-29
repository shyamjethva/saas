import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Using import.meta.env for the access key (standard for Vite)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

    if (accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      alert('Please set your Web3Forms Access Key in the code or .env file!');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from Portfolio - ${formData.name}`,
          from_name: 'Portfolio Website',
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-[#e5e7eb] text-black">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.4em] text-black/40 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter"
          >
            LET'S BUILD SOMETHING <br /> <span className="text-black/40 italic">EXCEPTIONAL.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-10 md:space-y-12">
            <div className="flex gap-6 md:gap-8 items-start">
              <div className="bg-white/50 border border-black/5 backdrop-blur-xl p-3 md:p-4 rounded-2xl shrink-0">
                <Mail className="text-black" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1 md:mb-2">Email Me</p>
                <a href={`mailto:${portfolioData.email}`} className="text-xl md:text-2xl font-bold hover:text-black/60 transition-colors break-words">
                  {portfolioData.email}
                </a>
              </div>
            </div>

            <div className="flex gap-6 md:gap-8 items-start">
              <div className="bg-white/50 border border-black/5 backdrop-blur-xl p-3 md:p-4 rounded-2xl shrink-0">
                <Phone className="text-black" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1 md:mb-2">Call Me</p>
                <a href={`tel:${portfolioData.phone}`} className="text-xl md:text-2xl font-bold hover:text-black/60 transition-colors">
                  {portfolioData.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-6 md:gap-8 items-start">
              <div className="bg-white/50 border border-black/5 backdrop-blur-xl p-3 md:p-4 rounded-2xl shrink-0">
                <MapPin className="text-black" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-black/40 mb-1 md:mb-2">Location</p>
                <p className="text-xl md:text-2xl font-bold">{portfolioData.location}</p>
              </div>
            </div>

            <div className="pt-8 md:pt-12 flex flex-wrap gap-4 md:gap-6">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 border border-black/5 backdrop-blur-xl p-4 rounded-full hover:scale-110 transition-all text-[#24292e] shadow-sm hover:shadow-md"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 border border-black/5 backdrop-blur-xl p-4 rounded-full hover:scale-110 transition-all text-[#0077B5] shadow-sm hover:shadow-md"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 border border-black/5 backdrop-blur-xl p-4 rounded-full hover:scale-110 transition-all text-[#E4405F] shadow-sm hover:shadow-md"
                title="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={portfolioData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 border border-black/5 backdrop-blur-xl p-4 rounded-full hover:scale-110 transition-all text-black shadow-sm hover:shadow-md"
                title="X (Twitter)"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/50 border border-black/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle2 className="text-green-600 w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-black/60 max-w-[280px]">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-black/40 ml-2">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-black/30 transition-colors text-black placeholder:text-black/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-black/40 ml-2">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-black/30 transition-colors text-black placeholder:text-black/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-black/40 ml-2">Message</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full bg-black/5 border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-black/30 transition-colors resize-none text-black placeholder:text-black/20"
                    />
                  </div>

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm ml-2"
                    >
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full rounded-2xl bg-black py-6 text-sm font-bold uppercase tracking-[0.2em] text-white flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>Sending... <Loader2 className="animate-spin" size={16} /></>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-black/5 bg-[#e5e7eb]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-black/40 text-xs uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-black/10" />
          <span>© 2026 Error Infotech. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
        <div className="italic">
          Designed by  PRATHAM-DEV.M4
        </div>
      </div>
    </footer>
  );
};
