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
    { id: 'mail', path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", link: 'mailto:errorinfotech404@gmail.com' },
    { id: 'phone', path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", link: 'tel:+918128704400' },
    { id: 'location', path: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", link: 'https://www.google.com/maps/search/?api=1&query=Error+Infotech+Rajkot+Gujarat' },
    { id: 'whatsapp', path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.556 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z", link: 'https://wa.me/918128704400' },
    { id: 'linkedin', path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2", link: 'https://in.linkedin.com/in/error-infotech704400' },
    { id: 'instagram', path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z M17.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", link: 'https://www.instagram.com/errorinfotech_pvt.ltd?igsh=NzVhOWU2Njc4YWV2' }
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
                className="h-7 sm:h-8 w-auto object-contain transition-all duration-[400ms] group-hover:scale-105 mix-blend-multiply contrast-[1.4] brightness-100"
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
            <div className="flex gap-[6px]">
              {socialIcons.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[26px] h-[26px] rounded-full border border-white/[0.1] flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#00d4ff]/[0.08] transition-all duration-200 group"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#64748b] group-hover:text-[#00d4ff] transition-colors"
                  >
                    <path d={social.path || "M 0 0"} />
                  </svg>
                </a>
              ))}
            </div>

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

          <div className="flex gap-[5px] mt-2 md:mt-0">
            {[
              { id: 'linkedin', path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2" },
              { id: 'instagram', path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z M17.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" },
              { id: 'twitter', path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
              { id: 'whatsapp', path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" }
            ].map((icon) => (
              <div key={icon.id} className="w-[22px] h-[22px] rounded-full border border-white/[0.07] flex items-center justify-center hover:border-[#00d4ff]/[0.35] transition-all cursor-pointer">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.path || "M 0 0"} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;