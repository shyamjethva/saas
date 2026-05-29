// Sample Case Study Data - Real Business Scenarios

export const sampleCaseStudies = [
  {
    id: 1,
    title: "Digital Transformation for Manufacturing Leader",
    company: "TechFlow Manufacturing Pvt. Ltd.",
    industry: "Manufacturing & Industrial",
    duration: "6 months",
    industryDetails: "Precision engineering components manufacturer with 250+ employees serving automotive and aerospace sectors",
    companySize: "250-500 employees",
    timeline: "Jan 2024 - Jun 2024",
    summary: "TechFlow Manufacturing approached us to modernize their outdated inventory management system and implement data-driven production planning. The company was losing 15% productivity due to manual processes and poor visibility into their supply chain operations.",
    objectives: [
      "Automate inventory tracking and reorder processes",
      "Implement real-time production monitoring",
      "Reduce manual data entry by 80%",
      "Improve supply chain visibility and coordination"
    ],
    technologies: ["Node.js", "React", "MongoDB", "IoT Sensors", "AI Analytics", "Mobile App"],
    challenges: [
      {
        title: "Manual Inventory Management",
        description: "Daily inventory checks were done manually across 3 warehouse locations, leading to 20% stock discrepancies"
      },
      {
        title: "Disconnected Production Lines",
        description: "Lack of real-time data from machinery meant production delays weren't identified until they caused bottlenecks"
      },
      {
        title: "Data Silos",
        description: "Critical information was scattered across spreadsheets, emails, and paper reports making strategic decisions difficult"
      }
    ],
    preSolutionMetrics: [
      { value: "15%", label: "Productivity Loss" },
      { value: "20%", label: "Inventory Discrepancy" },
      { value: "3 Days", label: "Reporting Delay" }
    ],
    solutions: [
      {
        title: "Custom ERP System Development",
        description: "Built integrated enterprise resource planning system connecting all departments",
        benefits: ["Real-time inventory", "Automated reorder", "Multi-location tracking"]
      },
      {
        title: "IoT Integration",
        description: "Installed sensors on production machinery to capture real-time performance data",
        benefits: ["Predictive maintenance", "Production monitoring", "Quality control"]
      },
      {
        title: "Mobile Dashboard",
        description: "Created mobile-first interface for supervisors to monitor operations from anywhere",
        benefits: ["Remote access", "Instant alerts", "Mobile reporting"]
      }
    ],
    implementation: [
      { title: "Requirement Analysis", duration: "2 weeks" },
      { title: "System Design", duration: "3 weeks" },
      { title: "Development Phase", duration: "10 weeks" },
      { title: "Testing & Deployment", duration: "3 weeks" },
      { title: "Training & Support", duration: "2 weeks" }
    ],
    team: [
      { name: "Rahul Sharma", role: "Project Lead" },
      { name: "Priya Patel", role: "Full Stack Developer" },
      { name: "Vikram Singh", role: "IoT Specialist" },
      { name: "Anjali Mehta", role: "Business Analyst" }
    ],
    results: [
      { value: "35%", metric: "Productivity Increase", description: "Through process automation" },
      { value: "80%", metric: "Manual Work Reduced", description: "Data entry and reporting" },
      { value: "99.5%", metric: "Inventory Accuracy", description: "Real-time tracking implementation" }
    ],
    roi: {
      investment: "₹12,50,000",
      revenueIncrease: "₹45,00,000 annually",
      costSavings: "₹18,00,000 annually",
      percentage: "298%",
      timeframe: "18 months"
    },
    testimonials: [
      {
        name: "Amit Verma",
        position: "Operations Director",
        company: "TechFlow Manufacturing",
        rating: 5,
        quote: "The transformation has been remarkable. We've gone from struggling with outdated processes to having complete visibility across our entire operation. The ROI exceeded our expectations within the first year.",
        projectType: "ERP Implementation",
        duration: "6 months"
      }
    ]
  },
  {
    id: 2,
    title: "E-commerce Platform for Retail Giant",
    company: "StyleMart Retail Group",
    industry: "E-commerce & Retail",
    duration: "4 months",
    industryDetails: "Multi-brand retail chain with 50 physical stores expanding to online marketplace",
    companySize: "500+ employees",
    timeline: "Mar 2024 - Jul 2024",
    summary: "StyleMart needed to compete with established e-commerce platforms by creating a unique shopping experience that connected their offline and online presence. Their previous attempts had failed to drive meaningful conversion rates.",
    objectives: [
      "Build seamless omnichannel shopping experience",
      "Implement advanced personalization engine",
      "Connect physical inventory with online orders",
      "Reduce cart abandonment by 50%"
    ],
    technologies: ["React", "Next.js", "Python", "AWS", "Machine Learning", "Payment Gateway Integration"],
    challenges: [
      {
        title: "Poor Customer Experience",
        description: "90% of online visitors were leaving without making purchases due to slow loading and complicated checkout process"
      },
      {
        title: "Inventory Sync Issues",
        description: "Offline inventory updates took 2-3 days to reflect online, leading to customer frustration and order cancellations"
      },
      {
        title: "Weak Customer Engagement",
        description: "Limited tools for customer communication, reviews, and personalized recommendations led to poor repeat visits"
      }
    ],
    preSolutionMetrics: [
      { value: "90%", label: "Cart Abandonment Rate" },
      { value: "2.3%", label: "Conversion Rate" },
      { value: "3 Days", label: "Inventory Sync Delay" }
    ],
    solutions: [
      {
        title: "Headless E-commerce Platform",
        description: "Built modern, fast-loading storefront with seamless API integration",
        benefits: ["Lightning fast", "Mobile optimized", "SEO friendly"]
      },
      {
        title: "AI-Powered Personalization",
        description: "Implemented machine learning algorithms for product recommendations and dynamic pricing",
        benefits: ["Smart recommendations", "Dynamic pricing", "Customer segmentation"]
      },
      {
        title: "Real-time Inventory System",
        description: "Connected all physical stores with central inventory management system",
        benefits: ["Instant sync", "Smart allocation", "Demand forecasting"]
      }
    ],
    implementation: [
      { title: "Platform Architecture", duration: "2 weeks" },
      { title: "UI/UX Design", duration: "2 weeks" },
      { title: "Backend Development", duration: "6 weeks" },
      { title: "AI Integration", duration: "3 weeks" },
      { title: "Testing & Launch", duration: "3 weeks" }
    ],
    team: [
      { name: "Sneha Gupta", role: "Project Manager" },
      { name: "Rohan Kumar", role: "Frontend Lead" },
      { name: "Neha Sharma", role: "Backend Developer" },
      { name: "Arjun Patel", role: "AI Specialist" }
    ],
    results: [
      { value: "65%", metric: "Conversion Rate Increase", description: "From 2.3% to 3.8%" },
      { value: "45%", metric: "Cart Abandonment Drop", description: "Improved checkout experience" },
      { value: "2.5X", metric: "Customer Retention", description: "Repeat purchase rate" }
    ],
    roi: {
      investment: "₹8,00,000",
      revenueIncrease: "₹32,00,000 annually",
      costSavings: "₹5,00,000 annually",
      percentage: "462%",
      timeframe: "15 months"
    },
    testimonials: [
      {
        name: "Kavita Desai",
        position: "Digital Transformation Head",
        company: "StyleMart Retail",
        rating: 5,
        quote: "The platform has transformed our business. Our online sales have tripled, and customers love the seamless experience between our stores and website. The personalization features alone have increased our average order value by 40%.",
        projectType: "E-commerce Platform",
        duration: "4 months"
      }
    ]
  },
  {
    id: 3,
    title: "AI-Powered CRM for Financial Services",
    company: "WealthFirst Financial Advisors",
    industry: "Financial Services",
    duration: "5 months",
    industryDetails: "Wealth management firm serving 5000+ high-net-worth individuals with personalized investment advisory",
    companySize: "150-250 employees",
    timeline: "Feb 2024 - Jul 2024",
    summary: "WealthFirst needed to enhance client relationship management with predictive analytics and automated portfolio recommendations. Their existing CRM couldn't handle complex client data or provide actionable insights for advisors.",
    objectives: [
      "Implement AI-driven client insights",
      "Automate portfolio recommendation engine",
      "Enhance compliance reporting capabilities",
      "Improve advisor productivity by 40%"
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AI/ML Models", "Compliance Framework"],
    challenges: [
      {
        title: "Manual Client Analysis",
        description: "Financial advisors spent 6 hours weekly analyzing client portfolios manually instead of client meetings"
      },
      {
        title: "Compliance Reporting",
        description: "Generating regulatory reports took 3 days each quarter, with high risk of human error"
      },
      {
        title: "Missed Opportunities",
        description: "Lack of predictive analytics meant advisors couldn't proactively identify client needs"
      }
    ],
    preSolutionMetrics: [
      { value: "6 Hours", label: "Weekly Manual Analysis" },
      { value: "3 Days", label: "Quarterly Reporting Time" },
      { value: "25%", label: "Missed Opportunities" }
    ],
    solutions: [
      {
        title: "Intelligent CRM System",
        description: "Built AI-powered client management with predictive analytics and automated insights",
        benefits: ["Smart client insights", "Risk assessment", "Opportunity identification"]
      },
      {
        title: "Automated Portfolio Engine",
        description: "Developed machine learning models for personalized investment recommendations",
        benefits: ["Risk profiling", "Asset allocation", "Performance prediction"]
      },
      {
        title: "Compliance Automation",
        description: "Created automated reporting system that generates regulatory reports instantly",
        benefits: ["Instant compliance", "Audit trail", "Risk monitoring"]
      }
    ],
    implementation: [
      { title: "Data Integration", duration: "2 weeks" },
      { title: "AI Model Development", duration: "6 weeks" },
      { title: "System Integration", duration: "4 weeks" },
      { title: "Compliance Testing", duration: "2 weeks" },
      { title: "Training & Deployment", duration: "2 weeks" }
    ],
    team: [
      { name: "Deepak Malhotra", role: "Solution Architect" },
      { name: "Shweta Rao", role: "Data Scientist" },
      { name: "Manish Jain", role: "Full Stack Developer" },
      { name: "Pooja Deshmukh", role: "Compliance Specialist" }
    ],
    results: [
      { value: "75%", metric: "Time Saved Weekly", description: "On manual analysis tasks" },
      { value: "98%", metric: "Compliance Accuracy", description: "Automated reporting" },
      { value: "35%", metric: "Client Satisfaction", description: "Improved advisory quality" }
    ],
    roi: {
      investment: "₹15,00,000",
      revenueIncrease: "₹60,00,000 annually",
      costSavings: "₹12,00,000 annually",
      percentage: "480%",
      timeframe: "20 months"
    },
    testimonials: [
      {
        name: "Rajesh Khanna",
        position: "Chief Technology Officer",
        company: "WealthFirst Financial",
        rating: 5,
        quote: "This AI-powered CRM has revolutionized how we serve our clients. Our advisors can now focus on building relationships instead of crunching numbers. The compliance automation alone has saved us countless hours and eliminated reporting risks.",
        projectType: "AI-Powered CRM",
        duration: "5 months"
      }
    ]
  }
];

export default sampleCaseStudies;
