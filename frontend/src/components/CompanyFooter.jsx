import React from 'react';
import { motion } from 'framer-motion';

const CompanyFooter = () => {
  return (
    <footer className="bg-background-dark border-t border-white/10 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-3 mb-8 text-center"
        >
          <img
            src="/images/logo4.png"
            alt="Error Infotech Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-white">Error Infotech</span>
          <p className="text-slate-400 max-w-2xl mx-auto text-center text-sm sm:text-base mt-2">
            Transforming businesses through innovative technology solutions. Partner with us to build scalable, secure digital platforms.
          </p>
        </motion.div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services-page" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Web Development</a></li>
              <li><a href="/services-page" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Mobile Apps</a></li>
              <li><a href="/services-page" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
              <li><a href="/services-page" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Cloud Services</a></li>
              <li><a href="/services-page" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
              <li><a href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
              <li><a href="/careers" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </motion.div>

          {/* Support & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Support & Legal</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Refund Policy</a></li>
              <li><a href="/support" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Support</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="social-icons-list"
        >
          <li className="icon-content">
            <div className="tooltip">Instagram</div>
            <a
              href="https://www.instagram.com/errorinfotech_pvt.ltd?igsh=NzVhOWU2Njc4YWV2"
              target="_blank"
              rel="noopener noreferrer"
              data-social="instagram"
              aria-label="Instagram"
            >
              <div className="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 1.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </a>
          </li>

          <li className="icon-content">
            <div className="tooltip">WhatsApp</div>
            <a
              href="https://wa.me/918128704400"
              target="_blank"
              rel="noopener noreferrer"
              data-social="whatsapp"
              aria-label="WhatsApp"
            >
              <div className="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
                <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.72.44 3.34 1.21 4.76L2 22l5.37-1.41c1.4.76 3 1.21 4.64 1.21 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.23.64-1.15 1.18-1.59 1.24-.44.06-.88.09-2.58-.6-2.07-.84-3.41-2.95-3.51-3.09-.1-.14-.84-1.12-.84-2.14 0-1.02.53-1.51.72-1.71.19-.2.43-.25.56-.25h.39c.14 0 .32 0 .49.4.17.4.58 1.4.63 1.51.05.11.08.23.01.36-.07.13-.1.21-.2.33-.1.12-.21.25-.3.34-.1.11-.21.22-.09.43.34.6 1.09 1.34 1.77 2 .77.68 1.42 1.12 1.64 1.22.22.1.35.08.49-.07.14-.15.58-.67.73-.9.15-.23.31-.2.52-.12.21.08 1.33.63 1.55.74.22.11.37.17.43.27.05.11.05.58-.19 1.26z" />
              </svg>
            </a>
          </li>

          <li className="icon-content">
            <div className="tooltip">Facebook</div>
            <a
              href="https://www.facebook.com/share/1Gt9Ec4B2A/"
              target="_blank"
              rel="noopener noreferrer"
              data-social="facebook"
              aria-label="Facebook"
            >
              <div className="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10.003 10.003 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
          </li>

          <li className="icon-content">
            <div className="tooltip">LinkedIn</div>
            <a
              href="https://in.linkedin.com/in/error-infotech704400"
              target="_blank"
              rel="noopener noreferrer"
              data-social="linkedin"
              aria-label="LinkedIn"
            >
              <div className="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.7V10.2H10v8.3h3.1v-4.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v4.5h3.1M6.7 8.7c1 0 1.8-.8 1.8-1.8S7.7 5.1 6.7 5.1s-1.8.8-1.8 1.8.8 1.8 1.8 1.8m1.5 9.8V10.2H5.2v8.3h3z" />
              </svg>
            </a>
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 text-slate-500 text-xs sm:text-sm text-center"
        >
          © 2024 Error Infotech. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default CompanyFooter;