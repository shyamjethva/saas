import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);

  // Error Infotech Blog Posts - Reordered
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
      content: "Error Infotech Pvt. Ltd. started with a simple belief: technology should empower businesses, not complicate them. Based in Rajkot, Gujarat, we have grown from a small team to a trusted IT solutions provider serving clients across India and internationally. Our company culture is built on innovation, trust, and excellence. We believe in creating an environment where creativity thrives and every team member contributes to our collective success. Over the past 3+ years, we have completed 11+ projects for 13+ unique customers, building lasting relationships based on quality and reliability. Our team comprises passionate developers, designers, and strategists who bring diverse skills to the table. We invest in continuous learning, encourage experimentation, and celebrate both successes and failures as learning opportunities. This personal blog shares our journey, the challenges we've overcome, our work philosophy, and why we love what we do. Join us as we continue transforming ideas into impactful digital realities."
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
      content: "Based in Rajkot, Gujarat, Error Infotech has successfully expanded its footprint beyond Indian borders to serve clients worldwide. Our international client base spans across the United States, United Kingdom, Canada, Australia, UAE, and Singapore. We have delivered projects for diverse industries including healthcare, education, finance, and e-commerce. Our ability to work across time zones, understand cultural nuances, and deliver quality solutions has made us a preferred technology partner for businesses abroad. We follow international coding standards, ensure GDPR compliance for European clients, and provide 24/7 support to accommodate different time zones. Our portfolio includes complex enterprise applications, mobile apps with millions of downloads, and AI-powered platforms serving global users. This blog shares our journey of building trust with international clients, the challenges we overcame, and how we maintain quality while working remotely across continents."
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
      content: "Education is the foundation of progress, and technology is its greatest enabler. At Error Infotech, we believe that technology should make life easier—not complicated. Our EduTend Technology division focuses on creating smart digital learning ecosystems for educational institutions. We develop comprehensive school management systems, student mobile applications, AI-powered learning platforms, attendance tracking systems, and parent communication tools. Our solutions help schools and colleges streamline administrative processes, enhance student engagement, and improve learning outcomes. We have successfully implemented our education solutions in multiple institutions across Gujarat and other states. Features include virtual classrooms, online examination systems, progress tracking dashboards, and digital libraries. Our platforms support both online and offline learning modes, making education accessible to all. This blog explores how EduTend Technology is helping educational institutions embrace digital transformation."
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
      content: "The healthcare industry is undergoing a digital revolution, and Error Infotech is at the forefront of this transformation. Our healthcare solutions improve patient care, operational efficiency, and data security for hospitals, clinics, and diagnostic centers. We develop hospital management software, patient record systems, online appointment booking platforms, telemedicine solutions, and pharmacy management systems. Our AI-powered health monitoring tools help in early diagnosis and patient care. We ensure HIPAA compliance and implement robust security measures to protect sensitive patient data. Features include electronic health records (EHR), billing and insurance integration, laboratory management, and patient portal systems. Our solutions have helped healthcare providers reduce wait times, minimize paperwork, and improve patient satisfaction. This article discusses the challenges in healthcare digitization and how our tailored solutions address them effectively."
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
      content: "Business-to-Business (B2B) solutions form the backbone of modern commerce, enabling seamless transactions and collaborations between companies. At Error Infotech, we understand the unique challenges that businesses face when dealing with other businesses. Our comprehensive B2B solutions are designed to streamline operations, reduce costs, and foster stronger business relationships. Our Enterprise Resource Planning (ERP) systems integrate all core business processes including inventory management, order processing, accounting, and human resources into a unified platform. This integration eliminates data silos and provides real-time visibility across the organization. For supply chain management, we develop sophisticated platforms that connect manufacturers with distributors, wholesalers with retailers, and service providers with enterprise clients. Features include automated procurement, vendor management, bulk ordering systems, and contract management. Our B2B e-commerce portals support complex pricing models, volume-based discounts, and customized catalogs for different client tiers. We implement secure payment gateways that handle large transaction volumes and support multiple currencies for international trade. Our solutions also include advanced analytics dashboards that provide insights into sales trends, customer behavior, and operational efficiency. Security is paramount in B2B transactions, which is why we implement role-based access control, audit trails, and compliance with industry standards. Whether you're a manufacturer looking to digitize your distribution network or a service provider seeking to automate client onboarding, our B2B solutions provide the technology foundation for growth and success."
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
      content: "Business-to-Consumer (B2C) solutions are all about creating meaningful connections between brands and their customers. At Error Infotech, we specialize in developing digital platforms that deliver exceptional customer experiences and drive business growth. Our e-commerce solutions go beyond basic online stores to create immersive shopping experiences. We build responsive websites and mobile applications that work seamlessly across all devices, ensuring customers can shop anytime, anywhere. Features include personalized product recommendations powered by AI, advanced search and filtering, wishlist functionality, and one-click checkout processes. Our Customer Relationship Management (CRM) systems help businesses understand their customers better by tracking interactions, purchase history, and preferences. This data enables targeted marketing campaigns, personalized promotions, and improved customer service. For retail businesses, we develop omnichannel solutions that integrate online and offline experiences, allowing customers to buy online and pick up in-store, or return online purchases at physical locations. Our mobile apps include features like push notifications for promotions, loyalty program integration, and augmented reality for virtual product try-ons. Payment integration is seamless with support for credit cards, digital wallets, UPI, and buy-now-pay-later options. We also implement robust security measures including SSL encryption, PCI DSS compliance, and fraud detection systems. Analytics dashboards provide insights into customer behavior, conversion rates, and campaign performance. Whether you're a startup launching your first online store or an established brand looking to enhance your digital presence, our B2C solutions help you build lasting relationships with your customers."
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
      content: "Artificial Intelligence is no longer a futuristic concept—it's a present-day reality transforming how businesses operate. At Error Infotech, we integrate AI capabilities into our solutions to help clients automate repetitive tasks, gain predictive insights, and enhance customer experiences. Our AI implementations include chatbots for 24/7 customer support, machine learning algorithms for sales forecasting, computer vision for quality control, and natural language processing for sentiment analysis. We have helped educational institutions implement AI-powered learning platforms, assisted healthcare providers with diagnostic tools, and enabled retail businesses with personalized recommendation engines. Our team stays updated with the latest AI frameworks including TensorFlow, PyTorch, and OpenAI APIs to deliver cutting-edge solutions. Whether you're looking to optimize operations or create intelligent products, our AI expertise can turn your vision into reality."
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
      content: "The web development landscape is constantly evolving, with new technologies and frameworks emerging every year. In 2024, we're seeing significant shifts in how websites and web applications are built. Progressive Web Apps (PWAs) continue to gain traction, offering native app-like experiences through browsers. React, Vue, and Angular remain dominant frontend frameworks, but newer options like Svelte and Solid are gaining popularity for their performance benefits. On the backend, Node.js and Python continue to lead, while serverless architectures are becoming the norm for scalable applications. WebAssembly is enabling high-performance web applications previously impossible in browsers. AI integration in web development is automating coding tasks and personalizing user experiences. At Error Infotech, we stay ahead of these trends to deliver cutting-edge solutions to our clients."
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
      content: "Choosing the right mobile app development approach is crucial for project success. Native development using Swift for iOS and Kotlin for Android offers the best performance and access to platform-specific features. However, cross-platform frameworks like React Native and Flutter have matured significantly, offering near-native performance with shared codebases. React Native, backed by Meta, has a vast ecosystem and is ideal for apps requiring frequent updates. Flutter, Google's framework, provides beautiful UIs with its widget-based approach and excellent performance. For simpler apps, progressive web apps (PWAs) can be a cost-effective alternative. At Error Infotech, we analyze your specific requirements—budget, timeline, target audience, and feature complexity—to recommend the best approach. We've successfully delivered native apps for performance-critical applications and cross-platform solutions for startups looking to launch quickly on both platforms."
    }

  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory ||
      (selectedCategory === 'AI' && post.category === 'Artificial Intelligence'));

  const categories = ['All', 'Business Solutions', 'Artificial Intelligence', 'Global Business', 'Education Technology', 'Healthcare', 'Company Culture', 'Technology'];

  return (
    <main className="min-h-screen premium-bg relative pt-12 pb-12">
      <div className="bg-slate-50/30 rounded-[4rem] mx-6 border border-slate-100/50 relative overflow-hidden pt-8 pb-40 mb-12">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]"></div>
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6 relative z-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-slate-400/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
              <span className="heading-underline active pb-2 inline-block">
                Insights & <span className="text-slate-500">Leadership</span>
              </span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Cutting-edge analysis, industry benchmarks, and expert technical strategy.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl border transition-all font-black uppercase tracking-widest text-[10px] ${selectedCategory === category
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-500/10'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900 shadow-sm'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview - Replaced Boxes with Typographic Columns */}
      <section className="py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.2K', label: 'Monthly Readers', color: 'from-slate-900 to-slate-600' },
              { value: '200+', label: 'Articles', color: 'from-slate-500 to-slate-400' },
              { value: '98%', label: 'Engagement Rate', color: 'from-slate-900 to-slate-600' },
              { value: '24/7', label: 'Updates', color: 'from-slate-500 to-slate-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 relative overflow-hidden md:border-r border-slate-200/60 last:border-0 group transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`text-4xl md:text-5xl font-black mb-4 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} py-1`}>{stat.value}</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-normal">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-consistent-3xl overflow-hidden border border-slate-200 shadow-3xl hover:border-slate-300 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="lg:order-2">
                <div className="h-96 lg:h-full bg-slate-100 relative overflow-hidden group">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover saturate-[0.8] group-hover:saturate-125 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-8 right-8">
                    <span className="px-6 py-2 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-2xl">
                      Featured Report
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 flex flex-col justify-center p-12 lg:p-20">
                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-slate-400 font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-8">
                  <span className="px-3 md:px-4 py-1.5 bg-slate-50 text-slate-600 rounded-full border border-slate-200/60">Technology</span>
                  <span>March 15, 2024</span>
                  <div className="hidden sm:block w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                  <span>8 min read</span>
                </div>

                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.15] font-space-grotesk group-hover:text-slate-900 transition-colors">
                  {blogPosts[0].title}
                </h2>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-8 mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-black text-xs">RP</div>
                    <span className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Rakshit Patadiya</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-slate-300">visibility</span>
                      <span className="text-slate-500 font-black text-[10px]">2.4K</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-slate-300">favorite</span>
                      <span className="text-slate-500 font-black text-[10px]">142</span>
                    </div>
                  </div>
                </div>

                <Link to={`/blog/post/${blogPosts[0].id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] px-10 py-5 rounded-full shadow-2xl shadow-slate-900/10 hover:bg-slate-800 transition-all"
                  >
                    Read Intelligence Report
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white transition-all duration-700 shadow-xl hover:shadow-2xl hover:border-slate-400/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none"></div>
                {/* Post Image */}
                <div className="h-64 bg-slate-100 relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover saturate-[0.7] group-hover:saturate-150 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-1.5 bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 font-black uppercase tracking-widest text-[8px] rounded-full border border-slate-100">
                      {post.readTime}
                    </span>
                  </div>
                </div>


                {/* Post Content */}
                <div className="p-10">
                  <div className="flex items-center gap-4 text-slate-400 font-black uppercase tracking-widest text-[10px] mb-6">
                    <span>{post.date}</span>
                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                    <span>{post.author}</span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-slate-800 transition-colors leading-tight font-space-grotesk">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 font-medium mb-8 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-500 font-black uppercase tracking-widest text-[8px] rounded-full border border-slate-200/50">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-100">
                    <div className="flex gap-6">
                      <span className="text-slate-400 font-black text-[10px] flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">visibility</span> {post.views}
                      </span>
                      <span className="text-slate-400 font-black text-[10px] flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">favorite</span> {post.likes}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-8 p-8 bg-slate-50 rounded-consistent-xl border border-slate-100"
                    >
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {post.content}
                      </p>
                    </motion.div>
                  )}

                  <div className="flex items-center gap-6">
                    <Link to={`/blog/post/${post.id}`}>
                      <motion.button
                        className="bg-slate-900 text-white font-black uppercase tracking-widest text-[9px] px-6 py-3 rounded-full shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all"
                      >
                        Read Report
                      </motion.button>
                    </Link>

                    <button
                      onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      className="text-slate-600 font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:text-slate-800 transition-colors group/btn"
                    >
                      {expandedPost === post.id ? 'Minimize' : 'Briefing'}
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-y-1">
                        {expandedPost === post.id ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      </div>
    </main>
  );
};

export default Blog;
