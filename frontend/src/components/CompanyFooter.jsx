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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 flex-wrap"
        >
          <a 
            href="https://www.instagram.com/errorinfotech_pvt.ltd?igsh=NzVhOWU2Njc4YWV2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.844c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://wa.me/8128704400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M17.472 14.387c-.3-.298-1.76-.865-2.058-.964-.297-.099-.518-.148-.74.149.22.297.662.817.81.988.146.17.295.195.443.07.149-.123.64-.231.938-.676.298-.445.396-.816.47-.938.075-.123.149-.37.0-.52-.149-.148-.4-.222-.668-.32-.27-.099-2.46-.099-3.237 0-.777.099-1.375.247-1.873.644-.498.396-.777.866-1.055 1.335-.278.47-.556.938-.556 1.335 0 .397.22.794.498 1.068.278.275.68.423.986.522.307.099 1.52.099 1.826 0 .306-.099.612-.222.843-.422.23-.2.379-.4.479-.622.1-.222.1-.52 0-.74-.1-.222-.276-.42-.663-.665-.387-.244-.8-.392-1.24-.515-.44-.123-.878-.245-1.24-.42-.362-.174-.622-.395-.87-.667-.25-.272-.375-.57-.425-.795-.05-.224-.025-.424.075-.574.1-.15.298-.224.573-.174.276.05.647.275.922.424.275.15.575.224.873.274.298.05.597.025.822-.075.225-.1.375-.25.475-.4.1-.15.125-.325.075-.5-.05-.174-.2-.324-.448-.423-.25-.099-.574-.124-.873-.074-.297.05-.597.223-.872.397-.275.174-.524.397-.773.645-.25.248-.474.52-.673.82-.198.3-.373.622-.473.97-.1.348-.125.697-.075 1.02.05.325.2.623.448.87.25.25.574.448.923.598.35.15.724.225 1.098.275.375.05.748.025 1.123-.075.375-.1.723-.25 1.023-.45.3-.2.573-.45.798-.723.225-.275.374-.573.474-.898.1-.325.124-.65.074-.975z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.facebook.com/share/1Gt9Ec4B2A/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          
          <a 
            href="https://in.linkedin.com/in/error-infotech704400" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-15.4h3.366v2.24h.05c.456-.884 1.577-1.85 3.248-1.85 3.479 0 4.107 2.45 4.107 5.667v6.662zm-13.066-13.4h-3.42v15.4h3.42v-15.4zm-3.426-3.4c-1.164 0-2.098.934-2.098 2.098s.934 2.098 2.098 2.098 2.098-.934 2.098-2.098-.934-2.098-2.098-2.098zm0 0"/>
            </svg>
          </a>
        </motion.div>
        
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