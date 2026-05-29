// Example Usage Files

// 1. Adding Consultation Banner to Existing Homepage
// File: src/pages/Homepage.jsx

import ConsultationBanner from '../components/ConsultationBanner';

// Add this line near the top with other imports

// Then add this component before the closing div tag:
<ConsultationBanner variant="default" />

// 2. Creating a Dedicated Consultation Page
// File: src/pages/ConsultationPage.jsx

import ConsultationHero from '../components/ConsultationHero';
import ConsultationTestimonials from '../components/ConsultationTestimonials';
import ConsultationSection from '../components/ConsultationSection';

function ConsultationPage() {
  return (
    <div>
      <ConsultationHero />
      <ConsultationTestimonials />
      <ConsultationSection />
    </div>
  );
}

export default ConsultationPage;

// 3. Replacing Hero Section with Consultation Focus
// File: src/pages/Homepage.jsx

import ConsultationHero from '../components/ConsultationHero';

function Homepage() {
  return <ConsultationHero />;
}

// 4. Adding Multiple Components to One Page
// File: src/pages/ServicesPage.jsx

import ConsultationBanner from '../components/ConsultationBanner';
import ConsultationTestimonials from '../components/ConsultationTestimonials';

function ServicesPage() {
  return (
    <div>
      {/* Your services content */}
      
      <ConsultationBanner variant="premium" />
      
      {/* More services content */}
      
      <ConsultationTestimonials />
      
      {/* Final content */}
    </div>
  );
}

// 5. Customizing the Banner Variant
// File: src/pages/EnterprisePage.jsx

import ConsultationBanner from '../components/ConsultationBanner';

function EnterprisePage() {
  return (
    <div>
      {/* Enterprise content */}
      <ConsultationBanner variant="enterprise" />
      {/* More content */}
    </div>
  );
}
