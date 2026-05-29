import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Error Infotech</h3>
            <p className="text-slate-600 mb-4 font-medium">
              Building structured, scalable digital systems for modern businesses.
            </p>
            <ul className="social-icons-list !justify-start">
              {/* Facebook */}
              <li className="icon-content">
                <div className="tooltip">Facebook</div>
                <a href="#" className="!w-9 !h-9" data-social="facebook">
                  <div className="filled"></div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10.003 10.003 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>
              </li>
              {/* LinkedIn */}
              <li className="icon-content">
                <div className="tooltip">LinkedIn</div>
                <a href="https://in.linkedin.com/in/error-infotech704400" target="_blank" rel="noopener noreferrer" className="!w-9 !h-9" data-social="linkedin">
                  <div className="filled"></div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.7 1.7V10.2H10v8.3h3.1v-4.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v4.5h3.1M6.7 8.7c1 0 1.8-.8 1.8-1.8S7.7 5.1 6.7 5.1s-1.8.8-1.8 1.8.8 1.8 1.8 1.8m1.5 9.8V10.2H5.2v8.3h3z" />
                  </svg>
                </a>
              </li>
              {/* WhatsApp */}
              <li className="icon-content">
                <div className="tooltip">WhatsApp</div>
                <a href="https://wa.me/918128704400" target="_blank" rel="noopener noreferrer" className="!w-9 !h-9" data-social="whatsapp">
                  <div className="filled"></div>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.72.44 3.34 1.21 4.76L2 22l5.37-1.41c1.4.76 3 1.21 4.64 1.21 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.23.64-1.15 1.18-1.59 1.24-.44.06-.88.09-2.58-.6-2.07-.84-3.41-2.95-3.51-3.09-.1-.14-.84-1.12-.84-2.14 0-1.02.53-1.51.72-1.71.19-.2.43-.25.56-.25h.39c.14 0 .32 0 .49.4.17.4.58 1.4.63 1.51.05.11.08.23.01.36-.07.13-.1.21-.2.33-.1.12-.21.25-.3.34-.1.11-.21.22-.09.43.34.6 1.09 1.34 1.77 2 .77.68 1.42 1.12 1.64 1.22.22.1.35.08.49-.07.14-.15.58-.67.73-.9.15-.23.31-.2.52-.12.21.08 1.33.63 1.55.74.22.11.37.17.43.27.05.11.05.58-.19 1.26z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link to="/enterprise/services" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/enterprise/services" className="hover:text-blue-600 transition-colors">Custom CRM</Link></li>
              <li><Link to="/enterprise/services" className="hover:text-blue-600 transition-colors">AI & Automation</Link></li>
              <li><Link to="/enterprise/services" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><Link to="/enterprise/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/enterprise/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/enterprise/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="/enterprise/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                hello@errorinfotech.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">
              © 2024 Error Infotech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500 font-medium">
              <Link to="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">Refund Policy</Link>
              <Link to="#" className="hover:text-blue-600 transition-colors">Support Center</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
