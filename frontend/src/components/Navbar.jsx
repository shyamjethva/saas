import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navbar = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isBusinessHubOpen, setIsBusinessHubOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const resourceRef = useRef(null);
  const businessHubRef = useRef(null);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
    setIsBusinessHubOpen(false);
  }, [location.pathname]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourceRef.current && !resourceRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
      if (businessHubRef.current && !businessHubRef.current.contains(event.target)) {
        setIsBusinessHubOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/marketing', label: 'Packages' },
    { path: '/ai-center', label: 'AI Center' },
    { path: '/portfolio', label: 'Portfolio' },
  ];

  const resourceItems = [
    { path: '/about-us', label: 'About Us', desc: 'Our company story', icon: 'info', color: 'slate' },
    { path: '/blog', label: 'Insights', desc: 'Latest articles', icon: 'article', color: 'slate' },
    { path: '/careers', label: 'Careers', desc: 'Join our team', icon: 'work_outline', color: 'slate' },
  ];

  const businessHubItems = [
    { path: '/crm/billing', label: 'Billing System', desc: 'Manage invoices & payments', icon: 'payments', color: 'slate' },
    { path: '/crm/settings', label: 'System Settings', desc: 'Configure preferences', icon: 'settings', color: 'slate' },
    { path: '/crm/security', label: 'Security Settings', desc: 'Configure security', icon: 'security', color: 'slate' },
    { path: '/crm/leads', label: 'Leads & Sales', desc: 'Track opportunities', icon: 'trending_up', color: 'slate' },
    { path: '/crm/terms', label: 'Terms Management', desc: 'Manage agreements', icon: 'gavel', color: 'slate' },
    { path: '/crm/analytics', label: 'Data Analytics', desc: 'Business insights', icon: 'analytics', color: 'slate' },
    { path: '/notifications', label: 'Notifications', desc: 'Updates and alerts', icon: 'notifications', color: 'slate' },
    { path: '/business-hub', label: 'Business Hub', desc: 'Central workspace', icon: 'workspaces', color: 'slate' },
  ];

  const isResourceActive = resourceItems.some(item => location.pathname === item.path);
  const isBusinessHubActive = businessHubItems.some(item => location.pathname === item.path);

  // Auto-detect dark theme paths
  const darkPaths = [];
  const isDarkTheme = isDark || darkPaths.includes(location.pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsResourcesOpen(false);
    setIsMobileResourcesOpen(false);
    setIsBusinessHubOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between border-b transition-all duration-300 bg-white/90 border-slate-100 backdrop-blur-2xl shadow-sm`}>
      <a href="https://errorinfotech.co.in/" className="flex items-center pl-2 sm:pl-4 group scale-110 origin-left ml-2">
        <img
          src="/images/error_logo_navbar.png"
          alt="Error Infotech"
          className="logo-img h-8 sm:h-10 w-auto object-contain transition-all duration-[400ms] group-hover:scale-105"
        />
      </a>

      <div className="flex-grow"></div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 mr-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 group ${location.pathname === item.path
              ? 'text-slate-900 bg-slate-100'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
          >
            <span className="relative z-10">{item.label}</span>
          </Link>
        ))}

        {/* Resources Dropdown */}
        <div
          ref={resourceRef}
          className="relative group nav-dropdown lg:pt-0"
        >
          <div
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 cursor-pointer relative flex items-center gap-2 group ${isResourceActive || isResourcesOpen
              ? 'text-slate-900 bg-slate-100'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsResourcesOpen(!isResourcesOpen);
              setIsBusinessHubOpen(false);
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              Resources
              <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </span>
          </div>
          <div className={`absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl border border-slate-100 shadow-xl transition-all duration-300 z-30 ${isResourcesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <div className="p-2 space-y-1">
              <h3 className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1 px-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[10px]">work</span>
                Resource Hub
              </h3>
              {resourceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 group/item ${location.pathname === item.path ? 'bg-slate-50 text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                  onClick={() => setIsResourcesOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-slate-400 text-[12px] group-hover/item:text-slate-900">{item.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-slate-900 underline-offset-4 group-hover/item:underline leading-tight">{item.label}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/join-contact" className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 group">
          <span>Get Started</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">rocket_launch</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:bg-slate-50 transition-all"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined text-sm sm:text-base">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-3xl z-40 shadow-2xl border-b border-slate-100 transition-all duration-300 lg:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all ${location.pathname === item.path ? 'text-slate-900 bg-slate-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Resources Accordion */}
          <div className="pt-2 border-t border-slate-100">
            <button
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${isResourceActive || isMobileResourcesOpen ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:bg-slate-50'}`}
              onClick={() => {
                setIsMobileResourcesOpen(!isMobileResourcesOpen);
              }}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">menu_book</span>
                Resources
              </span>
              <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMobileResourcesOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pl-8 pr-4 pb-2 space-y-1">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition-all text-sm flex items-center gap-2"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileResourcesOpen(false);
                    }}
                  >
                    <span className="material-symbols-outlined text-xs text-slate-400">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/join-contact" className="block mt-4">
            <button
              className="w-full bg-slate-900 text-white font-bold h-11 px-7 rounded-xl transition-all shadow-lg shadow-slate-900/20 border border-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
