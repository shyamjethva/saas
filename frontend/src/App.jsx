import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

// ScrollToTop Component - Resets scroll to top on route change
function ScrollToTop() {
  const pathname = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling effect
    });
  }, [pathname]);

  return null;
}

// AnchorLinkHandler Component - Handles smooth scrolling for anchor links
function AnchorLinkHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      // Check if clicked element is an anchor link
      const target = event.target.closest('a');
      if (target && target.getAttribute('href')) {
        const href = target.getAttribute('href');

        // If it's an anchor link (starts with #)
        if (href.startsWith('#')) {
          event.preventDefault();

          // Find the target element
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return null;
}

// Complete Error Infotech Pages
import Homepage from './pages/PremiumHomepage';
import Services from './pages/PremiumServices';
import ServicesPage from './pages/ServicesPage';
import CRMPricing from './pages/CRMPricing';
import PremiumPricingPage from './pages/PremiumPricingPage';
import PackagesPage from './pages/PackagesPage';
import ClientsProjects from './pages/PremiumClientsProjects';
import AICenter from './pages/ModernAICenter';
import MarketingFramework from './pages/StructuredMarketingFramework';
import CRMPackagesPage from './pages/CRMPackagesPage';
import AboutUs from './pages/PremiumAbout';
import Careers from './pages/PremiumCareers';
import Blog from './pages/PremiumBlog';
import BillingSystem from './pages/BillingSystem';
import SystemSettings from './pages/SystemSettings';
import SecuritySettings from './pages/SecuritySettings';
import LeadsSales from './pages/LeadsSales';
import TermsManagement from './pages/TermsManagement';
import DataAnalytics from './pages/DataAnalytics';
import Portfolio from './pages/PremiumPortfolio';
import JoinContact from './pages/JoinContact';
import NotificationCenter from './pages/NotificationCenter';
import ContactPage from './pages/PremiumContact';
import CRMDemoPage from './pages/CRMDemoPage';
import SimpleBlog from './pages/SimpleBlog';
import BusinessHub from './pages/PremiumBusinessHub';
import CRMERPSolutions from './pages/CRMERPSolutions';
import BlogPostDetail from './pages/BlogPostDetail';
import AIVoiceCallerDetail from './pages/AIVoiceCallerDetail';
import MasterWhatsAppAgentDetail from './pages/MasterWhatsAppAgentDetail';
import LeadGenerationDetail from './pages/LeadGenerationDetail';
import ConsultationPage from './pages/ConsultationPage';
import PartnerProfilePage from './pages/PartnerProfilePage';

function App() {
  // Ensure light mode is default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <AnchorLinkHandler />
      <div className="min-h-screen premium-bg relative overflow-x-hidden text-[#0f172a]">
        {/* Animated Cursor */}
        <AnimatedCursor />

        <Navbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services-page" element={<ServicesPage />} />
          <Route path="/services-packages" element={<ServicesPage />} />
          <Route path="/crm-pricing" element={<CRMPricing />} />
          <Route path="/premium-pricing" element={<PremiumPricingPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/clients-projects" element={<ClientsProjects />} />
          <Route path="/ai-center" element={<AICenter />} />
          <Route path="/ai-voice-caller" element={<AIVoiceCallerDetail />} />
          <Route path="/master-whatsapp-agent" element={<MasterWhatsAppAgentDetail />} />
          <Route path="/lead-generation-agent" element={<LeadGenerationDetail />} />
          <Route path="/marketing-framework" element={<MarketingFramework />} />
          <Route path="/marketing" element={<PackagesPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/join-contact" element={<JoinContact />} />
          <Route path="/notifications" element={<NotificationCenter />} />
          <Route path="/crm/billing" element={<BillingSystem />} />
          <Route path="/crm/settings" element={<SystemSettings />} />
          <Route path="/crm/security" element={<SecuritySettings />} />
          <Route path="/crm/leads" element={<LeadsSales />} />
          <Route path="/crm/terms" element={<TermsManagement />} />
          <Route path="/crm/analytics" element={<DataAnalytics />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/business-hub" element={<BusinessHub />} />
          <Route path="/book-demo" element={<CRMDemoPage />} />
          <Route path="/crm-erp-solutions" element={<CRMERPSolutions />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/crm-packages" element={<CRMPackagesPage />} />
          <Route path="/blog/post/:id" element={<BlogPostDetail />} />
          <Route path="/partner-profile/:type/:name" element={<PartnerProfilePage />} />

          {/* Special Pages */}
          {/* <Route path="/why-choose-us" element={<WhyChooseUs />} /> */}
          {/* <Route path="/security-trust" element={<SecurityTrust />} /> */}
          {/* <Route path="/book-demo" element={<DemoBooking />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;