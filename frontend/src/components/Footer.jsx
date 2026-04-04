import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
    if (activeTab !== id) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const categories = [
    {
      id: 0,
      title: 'Our Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.1 6.3a1 1 0 0 0 0 1.78l9.07 4.12a2 2 0 0 0 1.66 0l9.07-4.12a1 1 0 0 0 0-1.78Z" /><path d="m2.1 11.7 9.07 4.12a2 2 0 0 0 1.66 0l9.07-4.12" /><path d="m2.1 16.5 9.07 4.12a2 2 0 0 0 1.66 0l9.07-4.12" /></svg>
      ),
      links: [
        { name: 'AI Automation Agent Service', link: '/services' },
        { name: 'Software + APK Development Service', link: '/services' },
        { name: 'Enterprise Industry Solution', link: '/services' },
        { name: 'Digital + Performance Marketing Service', link: '/services' },
        { name: 'Physical Marketing Services', link: '/services' },
        { name: 'Graphical Development Services', link: '/services' },
        { name: 'Collaboration and Project Management', link: '/services' }
      ]
    },
    {
      id: 1,
      title: 'Company',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2"><path d="M10 20V14h4v6" /><path d="M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" /><rect width="20" height="2" x="2" y="20" /><path d="M10 8h.01" /><path d="M10 12h.01" /><path d="M14 8h.01" /><path d="M14 12h.01" /></svg>
      ),
      links: [
        { name: 'About Us', link: '/about' },
        { name: 'Careers', link: '/careers' },
        { name: 'Blog & Insights', link: '/blog' },
        { name: 'Our Portfolio', link: '/portfolio' },
        { name: 'Contact Us', link: '/contact' }
      ]
    },
    {
      id: 2,
      title: 'Support & Legal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
      ),
      links: [
        { name: 'Get Support', link: 'mailto:errorinfotech404@gmail.com', isEmail: true },
        { name: 'Contact Support', link: '/contact' },
        { name: 'Book a Demo', link: '/book-demo' },
        { name: 'Privacy Policy', link: '/contact' },
        { name: 'Terms of Service', link: '/contact' }
      ]
    }
  ];

  const socialIcons = [
    { id: 'mail', name: 'Email', path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", link: 'mailto:errorinfotech404@gmail.com' },
    { id: 'phone', name: 'Phone', path: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z", link: 'tel:+918128704400' },
    { id: 'location', name: 'Location', path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", link: 'https://www.google.com/maps/search/?api=1&query=Error+Infotech+Rajkot+Gujarat' },
    { id: 'whatsapp', name: 'WhatsApp', path: "M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.72.44 3.34 1.21 4.76L2 22l5.37-1.41c1.4.76 3 1.21 4.64 1.21 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.23.64-1.15 1.18-1.59 1.24-.44.06-.88.09-2.58-.6-2.07-.84-3.41-2.95-3.51-3.09-.1-.14-.84-1.12-.84-2.14 0-1.02.53-1.51.72-1.71.19-.2.43-.25.56-.25h.39c.14 0 .32 0 .49.4.17.4.58 1.4.63 1.51.05.11.08.23.01.36-.07.13-.1.21-.2.33-.1.12-.21.25-.3.34-.1.11-.21.22-.09.43.34.6 1.09 1.34 1.77 2 .77.68 1.42 1.12 1.64 1.22.22.1.35.08.49-.07.14-.15.58-.67.73-.9.15-.23.31-.2.52-.12.21.08 1.33.63 1.55.74.22.11.37.17.43.27.05.11.05.58-.19 1.26z", link: 'https://wa.me/918128704400' },
    { id: 'linkedin', name: 'LinkedIn', path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.7V10.2H10v8.3h3.1v-4.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v4.5h3.1M6.7 8.7c1 0 1.8-.8 1.8-1.8S7.7 5.1 6.7 5.1s-1.8.8-1.8 1.8.8 1.8 1.8 1.8m1.5 9.8V10.2H5.2v8.3h3z", link: 'https://in.linkedin.com/in/error-infotech704400' },
    { id: 'instagram', name: 'Instagram', path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 1.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z", link: 'https://www.instagram.com/errorinfotech_pvt.ltd?igsh=NzVhOWU2Njc4YWV2' }
  ];

  return (
    <footer className="footer-premium bg-slate-50 pt-12 px-10 pb-0 w-full mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">

        {/* SECTION 1 — TOP (Logo left + Info center) */}
        <div className="relative min-h-[100px] border-b border-white/[0.07] pb-[18px] flex flex-col md:flex-row items-center md:items-start">
          <div className="md:absolute md:left-0 md:top-0 mb-6 md:mb-0 origin-left ml-2">
            <Link to="/" className="group block">
              <img
                src="/images/error_logo_horiz.png"
                alt="Error Infotech"
                className="logo-img h-7 sm:h-8 w-auto object-contain transition-all duration-[400ms] group-hover:scale-105"
              />
            </Link>
          </div>

          {/* INFO BLOCK */}
          <div className="w-full flex flex-col items-center text-center">
            <p className="text-[11.5px] text-[#64748b] text-center max-w-[380px] leading-[1.5] mb-[10px]">
              Your trusted partner for web development, app development, web designing,
              digital marketing, and AI-powered solutions. Based in Rajkot, Gujarat.
            </p>

            {/* Social icons row */}
            <ul className="social-icons-list">
              {socialIcons.map((social) => (
                <li key={social.id} className="icon-content">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-social={social.id}
                  >
                    <div className="filled"></div>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={social.path || "M 0 0"} />
                    </svg>
                  </a>
                  <div className="tooltip">{social.name}</div>
                </li>
              ))}
            </ul>

            <p className="text-[10px] text-[#334155] text-center mt-2">
              302 - Malviya Coins, Dr Yagnik Rd, Rajkot, Gujarat 360002
            </p>
          </div>
        </div>

        {/* SECTION 2 — 3 HORIZONTAL TAB BUTTONS */}
        <div className="flex flex-col md:flex-row gap-[10px] pt-[14px]">
          {categories.map((cat) => (
            <div key={cat.id} className="flex-1 flex flex-col">
              <button
                onClick={() => toggleTab(cat.id)}
                className={`w-full flex items-center justify-between gap-[8px] border rounded-lg px-[14px] py-[10px] cursor-pointer transition-all duration-250 outline-none
                  ${activeTab === cat.id
                    ? 'bg-slate-100 border-slate-300 text-slate-900'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900'
                  }`}
              >
                <div className="flex items-center gap-[8px]">
                  <div className="w-[28px] h-[28px] rounded-md bg-[#00d4ff]/[0.08] flex items-center justify-center">
                    <span className={`transition-colors duration-250 ${activeTab === cat.id ? 'text-[#00d4ff]' : 'text-[#64748b] group-hover:text-[#00d4ff]'}`}>
                      {cat.icon}
                    </span>
                  </div>
                  <span className="text-[12px] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 uppercase tracking-tight">{cat.title}</span>
                </div>
                <span
                  className={`text-[14px] transition-all duration-300 ${activeTab === cat.id ? 'text-[#00d4ff] rotate-90' : 'text-[#334155]'}`}
                >
                  ›
                </span>
              </button>

              <AnimatePresence>
                {activeTab === cat.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-[10px] px-0 flex flex-col gap-[2px]">
                      {cat.links.map((link, idx) => (
                        link.isEmail ? (
                          <a
                            key={idx}
                            href={link.link}
                            className="text-[11.5px] text-[#475569] hover:text-[#00d4ff] hover:bg-[#00d4ff]/[0.06] hover:pl-[12px] px-[8px] py-[5px] rounded-md transition-all duration-200 flex items-center gap-[5px] group"
                          >
                            <span className="text-[#00d4ff]">›</span>
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={link.link}
                            className="text-[11.5px] text-[#475569] hover:text-[#00d4ff] hover:bg-[#00d4ff]/[0.06] hover:pl-[12px] px-[8px] py-[5px] rounded-md transition-all duration-200 flex items-center gap-[5px] group"
                          >
                            <span className="text-[#00d4ff]">›</span>
                            {link.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* SECTION 3 — BOTTOM COPYRIGHT BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center py-3 px-[2px] mt-2 border-t border-white/[0.05]">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2024 ERROR INFOTECH PVT. LTD. ALL RIGHTS RESERVED.
          </p>

          <ul className="social-icons-list !gap-1">
            {[
              { id: 'linkedin', name: 'LinkedIn', path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.7V10.2H10v8.3h3.1v-4.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v4.5h3.1M6.7 8.7c1 0 1.8-.8 1.8-1.8S7.7 5.1 6.7 5.1s-1.8.8-1.8 1.8.8 1.8 1.8 1.8m1.5 9.8V10.2H5.2v8.3h3z" },
              { id: 'instagram', name: 'Instagram', path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 1.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
              { id: 'twitter', name: 'Twitter', path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 6.18 21 9.12 21 18.75 21 24 13.06 24 6.15v-.68c1.02-.74 1.9-1.66 2.6-2.7z" },
              { id: 'whatsapp', name: 'WhatsApp', path: "M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.72.44 3.34 1.21 4.76L2 22l5.37-1.41c1.4.76 3 1.21 4.64 1.21 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.23.64-1.15 1.18-1.59 1.24-.44.06-.88.09-2.58-.6-2.07-.84-3.41-2.95-3.51-3.09-.1-.14-.84-1.12-.84-2.14 0-1.02.53-1.51.72-1.71.19-.2.43-.25.56-.25h.39c.14 0 .32 0 .49.4.17.4.58 1.4.63 1.51.05.11.08.23.01.36-.07.13-.1.21-.2.33-.1.12-.21.25-.3.34-.1.11-.21.22-.09.43.34.6 1.09 1.34 1.77 2 .77.68 1.42 1.12 1.64 1.22.22.1.35.08.49-.07.14-.15.58-.67.73-.9.15-.23.31-.2.52-.12.21.08 1.33.63 1.55.74.22.11.37.17.43.27.05.11.05.58-.19 1.26z" }
            ].map((icon) => (
              <li key={icon.id} className="icon-content">
                <div className="tooltip">{icon.name}</div>
                <a href="#" data-social={icon.id} className="!w-6 !h-6 !rounded-md">
                  <div className="filled"></div>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path || "M 0 0"} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;