import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';

const BlogPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Blog posts data (same as PremiumBlog.jsx) - Reordered
  const blogPosts = [
    {
      id: 1,
      title: "Life at Error Infotech: Our Journey & Culture",
      excerpt: "A personal look into our company culture, values, and what makes us unique in the IT industry...",
      date: "February 18, 2024",
      category: "Company Culture",
      readTime: "6 min read",
      image: "/images/insights-blog/company-culture.png",
      author: "Error Infotech Team",
      views: "1.9K",
      likes: "287",
      tags: ["Culture", "Team", "Journey"],
      content: `Error Infotech Pvt. Ltd. started with a simple belief: technology should empower businesses, not complicate them. Based in Rajkot, Gujarat, we have grown from a small team to a trusted IT solutions provider serving clients across India and internationally.

Our Journey:

Founded in 2021, we began with just 3 passionate developers working from a small office. Today, we are a team of 15+ professionals delivering cutting-edge solutions to clients worldwide. Our growth story is built on:

• 3+ Years of Excellence
• 13+ Unique Customers
• 11+ Completed Projects
• 6+ Countries Served

Our Core Values:

1. Innovation First
   We constantly explore new technologies and methodologies to deliver the best solutions to our clients.

2. Customer Success
   Our success is measured by our clients' success. We go the extra mile to ensure project success.

3. Quality Over Quantity
   We focus on delivering high-quality solutions rather than rushing to complete projects.

4. Continuous Learning
   Technology evolves rapidly, and so do we. Regular training and skill development are part of our DNA.

5. Work-Life Balance
   Happy employees create better products. We ensure our team has a healthy work-life balance.

Our Work Culture:

• Flexible Working Hours
• Remote Work Options
• Regular Team Outings
• Learning & Development Budget
• Performance Bonuses
• Health Insurance
• Casual Dress Code
• Open Door Policy

Our Team:

We have a diverse team of:
• Full-Stack Developers
• Mobile App Developers
• UI/UX Designers
• QA Engineers
• Project Managers
• Business Analysts
• Digital Marketing Experts

What Makes Us Different:

Personalized Approach:
Unlike large corporations, we provide personalized attention to each client. You're not just a project number to us.

Agile Methodology:
We follow agile practices ensuring transparent communication and iterative development.

Long-term Partnerships:
We don't just deliver projects; we build lasting relationships. Many of our clients have been with us since our inception.

Local Presence, Global Reach:
While we're based in Rajkot, our solutions serve clients globally. We bring the best of both worlds—local understanding with global standards.

Our Achievements:

• Successfully delivered projects across 6 countries
• Maintained 95% client satisfaction rate
• Zero project failures
• Multiple long-term client partnerships
• Recognition in local business communities

Looking Ahead:

As we continue to grow, our mission remains the same: to help businesses leverage technology for growth and success. We're excited about the future and the opportunities it brings.

This personal blog shares our journey, the challenges we've overcome, our work philosophy, and why we love what we do. Join us as we continue transforming ideas into impactful digital realities.`
    },
    {
      id: 2,
      title: "Global Reach: Serving International Clients from Rajkot",
      excerpt: "How a Gujarat-based IT company is making waves in the global technology market...",
      date: "March 5, 2024",
      category: "Global Business",
      readTime: "7 min read",
      image: "/images/insights-blog/global-clients.png",
      author: "Error Infotech Team",
      views: "2.8K",
      likes: "165",
      tags: ["International", "Global", "Outsourcing"],
      content: `Based in Rajkot, Gujarat, Error Infotech has successfully expanded its footprint beyond Indian borders to serve clients worldwide. Our journey from a local startup to a global technology partner is a testament to our commitment to quality and innovation.

Our International Presence:

We currently serve clients across:
• United States - Silicon Valley startups to Fortune 500 companies
• United Kingdom - Financial services and healthcare organizations
• Canada - E-commerce and education technology companies
• Australia - Mining, logistics, and retail sectors
• UAE - Real estate, hospitality, and government projects
• Singapore - Fintech and trading platforms

Why International Clients Choose Us:

1. Quality at Competitive Rates
   - World-class development at Indian market rates
   - Significant cost savings without compromising quality
   - Transparent pricing models

2. Time Zone Advantage
   - 24/7 development cycles with overlapping work hours
   - Faster project delivery through continuous work
   - Dedicated teams for different regions

3. Cultural Adaptability
   - Understanding of Western business practices
   - Clear communication in English
   - Experience with international compliance standards

Our Global Project Portfolio:

Enterprise Applications:
• ERP systems for manufacturing companies in USA
• Supply chain platforms for logistics firms in UK
• Healthcare management systems for clinics in Canada

Mobile Applications:
• E-commerce apps with millions of downloads
• Fintech solutions handling secure transactions
• Educational platforms serving global students

AI & Machine Learning:
• Predictive analytics for retail chains
• Computer vision for quality control
• NLP solutions for customer service automation

Ensuring Global Standards:

• GDPR Compliance for European clients
• HIPAA Compliance for healthcare projects
• PCI DSS for payment processing
• ISO 27001 security standards
• SOC 2 Type II certification

Communication & Collaboration:

• Daily standups via video conferencing
• Project management through Jira, Trello, Asana
• Real-time updates via Slack and Microsoft Teams
• Weekly progress reports and demos
• Dedicated account managers

Success Stories:

We've helped a US-based healthcare startup scale from 10 to 10,000 users in 6 months. A UK retail chain saw 40% increase in online sales after our e-commerce platform launch. An Australian logistics company reduced operational costs by 35% with our custom ERP solution.

This blog shares our journey of building trust with international clients, the challenges we overcame, and how we maintain quality while working remotely across continents.`
    },
    {
      id: 3,
      title: "EduTend Technology: Transforming Education Through Innovation",
      excerpt: "A deep dive into our education technology solutions and how they're reshaping learning experiences...",
      date: "February 28, 2024",
      category: "Education Technology",
      readTime: "9 min read",
      image: "/images/insights-blog/edutend.jpeg",
      author: "Error Infotech Team",
      views: "3.5K",
      likes: "234",
      tags: ["EdTech", "Education", "E-Learning"],
      content: `Education is the foundation of progress, and technology is its greatest enabler. At Error Infotech, we believe that technology should make life easier—not complicated. Our EduTend Technology division focuses on creating smart digital learning ecosystems for educational institutions.

Our Education Solutions Portfolio:

1. School Management Systems
   - Student enrollment and admissions
   - Fee management and payment tracking
   - Attendance management with biometric integration
   - Timetable and scheduling automation
   - Report card generation and progress tracking

2. Learning Management Systems (LMS)
   - Course content management
   - Assignment submission and grading
   - Online quizzes and examinations
   - Progress tracking and analytics
   - Certificate generation

3. Virtual Classroom Solutions
   - Live video conferencing
   - Interactive whiteboards
   - Screen sharing capabilities
   - Breakout rooms for group discussions
   - Recording and playback features

4. Mobile Learning Apps
   - Access courses on-the-go
   - Offline content availability
   - Push notifications for assignments
   - Discussion forums
   - Parent-teacher communication

5. AI-Powered Learning Platforms
   - Personalized learning paths
   - Adaptive assessments
   - Smart content recommendations
   - Automated doubt resolution
   - Performance prediction

Key Features:

For Students:
• Interactive learning materials
• Self-paced learning options
• Peer collaboration tools
• Digital library access
• Career guidance modules

For Teachers:
• Automated grading systems
• Lesson planning tools
• Student performance analytics
• Communication portals
• Resource sharing platforms

For Parents:
• Real-time progress tracking
• Fee payment portals
• Direct communication with teachers
• Attendance monitoring
• Event notifications

For Administrators:
• Comprehensive dashboards
• Financial management
• Staff management
• Inventory tracking
• Compliance reporting

Success Stories:

We've implemented our solutions in multiple institutions across Gujarat and other states:
• 50% reduction in administrative workload
• 30% improvement in student engagement
• 25% increase in parent satisfaction
• Significant cost savings on paper and resources

Our platforms support both online and offline learning modes, making education accessible to all. This blog explores how EduTend Technology is helping educational institutions embrace digital transformation.`
    },
    {
      id: 4,
      title: "Healthcare Industry Solutions: Technology for Better Care",
      excerpt: "How Error Infotech is revolutionizing healthcare management with digital solutions...",
      date: "February 22, 2024",
      category: "Healthcare",
      readTime: "11 min read",
      image: "/images/insights-blog/healthcare.png",
      author: "Error Infotech Team",
      views: "2.2K",
      likes: "156",
      tags: ["Healthcare", "HealthTech", "Digital Health"],
      content: `The healthcare industry is undergoing a digital revolution, and Error Infotech is at the forefront of this transformation. Our healthcare solutions improve patient care, operational efficiency, and data security for hospitals, clinics, and diagnostic centers.

Our Healthcare Solutions:

1. Hospital Management Systems (HMS)
   - Patient registration and EMR
   - Appointment scheduling
   - Bed management
   - Pharmacy integration
   - Laboratory management
   - Billing and insurance processing

2. Electronic Health Records (EHR)
   - Centralized patient data
   - Medical history tracking
   - Prescription management
   - Allergy and medication alerts
   - Integration with diagnostic devices

3. Telemedicine Platforms
   - Video consultations
   - Remote patient monitoring
   - Digital prescriptions
   - Follow-up scheduling
   - Multi-specialty consultations

4. Patient Portal Systems
   - Online appointment booking
   - Access to medical records
   - Lab results viewing
   - Secure messaging with doctors
   - Payment and billing history

5. AI-Powered Health Solutions
   - Diagnostic assistance
   - Predictive health analytics
   - Patient risk stratification
   - Treatment recommendation engines
   - Medical image analysis

Key Benefits:

For Patients:
• Reduced wait times
• 24/7 access to health records
• Convenient online appointments
• Better communication with healthcare providers
• Improved medication adherence

For Healthcare Providers:
• Streamlined workflows
• Reduced paperwork
• Better patient outcomes
• Increased patient satisfaction
• Data-driven decision making

For Administrators:
• Efficient resource allocation
• Revenue cycle management
• Regulatory compliance
• Performance analytics
• Cost optimization

Security & Compliance:

We ensure the highest standards of data protection:
• HIPAA Compliance
• End-to-end encryption
• Role-based access control
• Regular security audits
• Disaster recovery planning
• Data backup and redundancy

Our solutions have helped healthcare providers:
• Reduce patient wait times by 40%
• Minimize paperwork by 60%
• Improve patient satisfaction scores
• Achieve better clinical outcomes
• Ensure regulatory compliance

This article discusses the challenges in healthcare digitization and how our tailored solutions address them effectively.`
    },
    {
      id: 5,
      title: "B2B Solutions: Empowering Business Partnerships",
      excerpt: "Comprehensive enterprise solutions designed for seamless business-to-business operations and collaborations...",
      date: "March 20, 2024",
      category: "Business Solutions",
      readTime: "12 min read",
      image: "/images/insights-blog/b2b-solutions.png",
      author: "Error Infotech Team",
      views: "2.8K",
      likes: "165",
      tags: ["B2B", "ERP", "Enterprise"],
      content: `Business-to-Business (B2B) solutions form the backbone of modern commerce, enabling seamless transactions and collaborations between companies. At Error Infotech, we understand the unique challenges that businesses face when dealing with other businesses.

Our comprehensive B2B solutions are designed to streamline operations, reduce costs, and foster stronger business relationships. Our Enterprise Resource Planning (ERP) systems integrate all core business processes including inventory management, order processing, accounting, and human resources into a unified platform.

This integration eliminates data silos and provides real-time visibility across the organization. For supply chain management, we develop sophisticated platforms that connect manufacturers with distributors, wholesalers with retailers, and service providers with enterprise clients.

Key Features of Our B2B Solutions:

• Automated Procurement Systems - Streamline purchasing workflows with automated vendor selection, purchase order generation, and invoice matching.

• Vendor Management Portals - Centralized platforms for managing supplier relationships, performance tracking, and contract negotiations.

• Bulk Ordering Systems - Handle large volume transactions with tiered pricing, volume discounts, and automated reordering.

• Contract Management - Digital contract creation, approval workflows, and compliance tracking.

• B2B E-commerce Portals - Customized catalogs, complex pricing models, and quote management systems.

• Multi-Currency Support - Handle international transactions with real-time currency conversion and tax calculations.

• Advanced Analytics Dashboards - Gain insights into sales trends, customer behavior, and operational efficiency.

• Role-Based Access Control - Secure data access with granular permissions and audit trails.

Our solutions help businesses automate processes, reduce operational costs by up to 40%, and scale efficiently. Whether you're a manufacturer looking to digitize your distribution network or a service provider seeking to automate client onboarding, our B2B solutions provide the technology foundation for growth and success.`
    },
    {
      id: 6,
      title: "B2C Solutions: Connecting Directly with Consumers",
      excerpt: "Creating engaging digital experiences that transform how businesses connect with their end customers...",
      date: "March 18, 2024",
      category: "Business Solutions",
      readTime: "10 min read",
      image: "/images/insights-blog/b2c-solutions.png",
      author: "Error Infotech Team",
      views: "3.2K",
      likes: "189",
      tags: ["B2C", "E-Commerce", "Customer Experience"],
      content: `Business-to-Consumer (B2C) solutions are all about creating meaningful connections between brands and their customers. At Error Infotech, we specialize in developing digital platforms that deliver exceptional customer experiences and drive business growth.

Our E-Commerce Solutions:

We build responsive websites and mobile applications that work seamlessly across all devices, ensuring customers can shop anytime, anywhere. Our platforms include:

• AI-Powered Product Recommendations - Machine learning algorithms analyze customer behavior to suggest relevant products, increasing conversion rates by up to 30%.

• Advanced Search & Filtering - Faceted search, autocomplete, and visual search capabilities for easy product discovery.

• One-Click Checkout - Streamlined payment processes with saved preferences and multiple payment options.

• Wishlist & Save for Later - Features that improve customer retention and reduce cart abandonment.

Customer Relationship Management (CRM):

Our CRM systems help businesses understand their customers better by tracking interactions, purchase history, and preferences. This data enables:

• Targeted Marketing Campaigns - Personalized email marketing and push notifications.
• Loyalty Program Integration - Points systems, tier-based rewards, and exclusive offers.
• Customer Service Tools - Ticketing systems, live chat, and knowledge bases.

Omnichannel Solutions:

For retail businesses, we develop solutions that integrate online and offline experiences:

• Buy Online, Pick Up In-Store (BOPIS)
• Return Online Purchases at Physical Locations
• Unified Inventory Management
• Cross-Channel Customer Profiles

Mobile App Features:

• Push Notifications for Promotions
• Augmented Reality for Virtual Try-Ons
• Mobile Wallet Integration
• Biometric Authentication

Security & Compliance:

• SSL Encryption for all transactions
• PCI DSS Compliance
• Fraud Detection Systems
• GDPR Compliance for customer data

Analytics & Insights:

Our dashboards provide real-time insights into:
• Customer behavior and journey mapping
• Conversion rates and funnel analysis
• Campaign performance metrics
• Inventory and sales forecasting

Whether you're a startup launching your first online store or an established brand looking to enhance your digital presence, our B2C solutions help you build lasting relationships with your customers.`
    },
    {
      id: 7,
      title: "AI Revolution: Transforming Business Operations",
      excerpt: "Explore how Artificial Intelligence is reshaping industries and how Error Infotech implements AI solutions...",
      date: "March 10, 2024",
      category: "Artificial Intelligence",
      readTime: "10 min read",
      image: "/images/insights-blog/ai-revolution.png",
      author: "Error Infotech Team",
      views: "3.1K",
      likes: "198",
      tags: ["AI", "Automation", "Innovation"],
      content: `Artificial Intelligence is no longer a futuristic concept—it's a present-day reality transforming how businesses operate. At Error Infotech, we integrate AI capabilities into our solutions to help clients automate repetitive tasks, gain predictive insights, and enhance customer experiences.

Our AI Implementation Services:

1. Intelligent Chatbots & Virtual Assistants
   - 24/7 customer support automation
   - Natural language understanding
   - Multi-language support
   - Integration with CRM and helpdesk systems

2. Machine Learning Solutions
   - Sales forecasting and demand prediction
   - Customer churn analysis
   - Fraud detection systems
   - Price optimization algorithms

3. Computer Vision Applications
   - Quality control in manufacturing
   - Facial recognition for security
   - Object detection and tracking
   - Medical image analysis

4. Natural Language Processing (NLP)
   - Sentiment analysis for customer feedback
   - Automated document processing
   - Language translation services
   - Voice recognition systems

Industry-Specific AI Solutions:

Education Sector:
• AI-powered learning platforms that adapt to student pace
• Automated grading systems
• Personalized learning recommendations
• Student performance prediction

Healthcare Sector:
• Diagnostic assistance tools
• Patient monitoring systems
• Drug discovery acceleration
• Medical record analysis

Retail & E-commerce:
• Personalized product recommendations
• Visual search capabilities
• Dynamic pricing optimization
• Inventory forecasting

Finance & Banking:
• Risk assessment models
• Algorithmic trading systems
• Credit scoring automation
• Anti-money laundering detection

Our Technology Stack:

We stay updated with the latest AI frameworks including:
• TensorFlow and PyTorch for deep learning
• OpenAI APIs for generative AI
• scikit-learn for traditional ML
• Hugging Face for NLP models

Benefits of Our AI Solutions:

• 40-60% reduction in operational costs
• 24/7 automated operations
• Improved decision-making with data insights
• Enhanced customer satisfaction
• Scalable solutions that grow with your business

Whether you're looking to optimize operations, create intelligent products, or gain competitive advantage, our AI expertise can turn your vision into reality.`
    },
    {
      id: 8,
      title: "Web Development Trends: What's New in 2024",
      excerpt: "Explore the latest web development technologies and frameworks shaping the future of online experiences...",
      date: "February 10, 2024",
      category: "Technology",
      readTime: "8 min read",
      image: "/images/insights-blog/web-development.png",
      author: "Error Infotech Team",
      views: "2.5K",
      likes: "178",
      tags: ["Web Development", "Trends", "Frameworks"],
      content: `The web development landscape is constantly evolving, with new technologies and frameworks emerging every year. In 2024, we're seeing significant shifts in how websites and web applications are built.

Progressive Web Apps (PWAs):

PWAs continue to gain traction, offering native app-like experiences through browsers. They work offline, send push notifications, and can be installed on home screens. Major companies like Twitter, Pinterest, and Starbucks have seen significant engagement increases after adopting PWA technology.

Frontend Frameworks Evolution:

React, Vue, and Angular remain dominant, but newer options are gaining popularity:
• React 19 with Server Components for better performance
• Vue 3 with Composition API for better code organization
• Svelte for compile-time optimization
• Solid.js for fine-grained reactivity

Backend Technologies:

Node.js and Python continue to lead, with exciting developments:
• Serverless architectures becoming mainstream
• Edge computing for faster response times
• GraphQL adoption for flexible APIs
• WebSocket implementations for real-time features

WebAssembly (Wasm):

WebAssembly is enabling high-performance web applications previously impossible in browsers. It's being used for:
• Video editing in the browser
• CAD applications
• Scientific simulations
• High-performance games

AI Integration:

Artificial Intelligence is transforming web development:
• AI-powered code completion tools like GitHub Copilot
• Automated accessibility testing
• Personalized user experiences
• Intelligent search functionality
• Automated content generation

At Error Infotech, we stay ahead of these trends to deliver cutting-edge solutions to our clients. Our team regularly experiments with new technologies to ensure we're always offering the best solutions.`
    },
    {
      id: 9,
      title: "Mobile App Development: iOS vs Android vs Cross-Platform",
      excerpt: "A comprehensive comparison to help you choose the right approach for your mobile application...",
      date: "February 5, 2024",
      category: "Technology",
      readTime: "9 min read",
      image: "/images/insights-blog/mobile-development.png",
      author: "Error Infotech Team",
      views: "3.1K",
      likes: "215",
      tags: ["Mobile Apps", "iOS", "Android", "Cross-Platform"],
      content: `Choosing the right mobile app development approach is crucial for project success. Each approach has its strengths and ideal use cases.

Native Development:

iOS (Swift):
• Best performance and user experience
• Full access to iOS features and APIs
• Better App Store visibility
• Higher development cost
• Requires separate codebase for Android

Android (Kotlin):
• Largest global market share
• More flexible app store policies
• Full hardware access
• Fragmentation challenges across devices
• Requires separate codebase for iOS

Cross-Platform Development:

React Native:
• Share 70-90% code between iOS and Android
• Large community and ecosystem
• Hot reload for faster development
• Near-native performance
• Backed by Meta (Facebook)

Flutter:
• Single codebase for all platforms
• Beautiful, customizable UI with widgets
• Excellent performance with Dart
• Growing ecosystem
• Backed by Google

Xamarin:
• C# for both platforms
• Good for enterprise applications
• Microsoft ecosystem integration
• Smaller community than React Native

When to Choose Native:
• Performance-critical applications (games, video editing)
• Apps requiring extensive hardware access
• Platform-specific feature integration
• High-budget projects targeting single platform

When to Choose Cross-Platform:
• Limited budget and timeline
• Need to launch on both platforms quickly
• Content-focused apps
• MVPs and prototypes
• Apps with standard UI components

At Error Infotech, we analyze your specific requirements—budget, timeline, target audience, and feature complexity—to recommend the best approach. We've successfully delivered native apps for performance-critical applications and cross-platform solutions for startups looking to launch quickly on both platforms.`
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen premium-bg pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
          <p className="text-slate-500 mb-8 font-medium">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-gradient-to-r from-blue-700 to-sky-500 text-white font-bold px-6 py-3 rounded-full"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Split content into paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <div className="min-h-screen premium-bg">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-black uppercase tracking-widest text-[10px]"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Intelligence Hub
          </motion.button>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                {post.category}
              </span>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold text-xs">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-blue-600">person</span>
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-blue-600">schedule</span>
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-blue-600">visibility</span>
                {post.views} views
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full h-64 md:h-[550px] rounded-[3rem] overflow-hidden mb-16 border border-slate-200 shadow-2xl relative group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover saturate-[0.85] brightness-[1.05] group-hover:saturate-150 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
          </motion.div>


          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            <div className="prose prose-slate max-w-none relative z-10">
              {paragraphs.map((paragraph, index) => {
                // Check if it's a heading (starts with certain patterns)
                if (paragraph.startsWith('Our ') || paragraph.startsWith('Key ') || paragraph.startsWith('Success ') || paragraph.startsWith('Industry') || paragraph.startsWith('Benefits') || paragraph.startsWith('What ') || paragraph.startsWith('The ') || paragraph.startsWith('Progressive') || paragraph.startsWith('Frontend') || paragraph.startsWith('Backend') || paragraph.startsWith('WebAssembly') || paragraph.startsWith('AI Integration') || paragraph.startsWith('Native') || paragraph.startsWith('Cross-Platform') || paragraph.startsWith('When to') || paragraph.startsWith('Choosing')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">
                      {paragraph}
                    </h2>
                  );
                }
                // Check if it's a list
                if (paragraph.includes('•')) {
                  const items = paragraph.split('\n').filter(item => item.trim().startsWith('•'));
                  return (
                    <ul key={index} className="space-y-2 ml-6 mb-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-4 text-slate-600 font-medium py-1">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shadow-lg shadow-blue-500/20 flex-shrink-0" />
                          <span>{item.replace('•', '').trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraph
                return (
                  <p key={index} className="text-slate-600 leading-relaxed mb-6 font-medium text-lg">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-slate-100">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-slate-50 text-slate-500 font-black uppercase tracking-widest text-[9px] rounded-full border border-slate-200/50"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Section */}
            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100">
              <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Share report:</span>
              <div className="flex gap-2">
                {['share', 'favorite_border', 'bookmark'].map((icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 flex items-center justify-center transition-all border border-slate-100"
                  >
                    <span className="material-symbols-outlined text-sm">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center mt-8"
          >
            {post.id > 1 && (
              <Link to={`/blog/post/${post.id - 1}`}>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-black uppercase tracking-widest text-[10px]">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Previous Report
                </button>
              </Link>
            )}
            {post.id < blogPosts.length && (
              <Link to={`/blog/post/${post.id + 1}`} className="ml-auto">
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-black uppercase tracking-widest text-[10px]">
                  Next Release
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
