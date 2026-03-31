import { useState } from 'react';

const SimpleBlog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Digital Transformation in Manufacturing",
      excerpt: "How IoT and AI are revolutionizing manufacturing processes",
      author: "Rahul Sharma",
      date: "March 15, 2024",
      content: `
        <h2>The Future of Manufacturing</h2>
        <p>Manufacturing is experiencing a digital revolution like never before. IoT sensors, artificial intelligence, and automation are transforming factory floors across the globe.</p>
        
        <h3>Key Technologies Driving Change</h3>
        <ul>
          <li>IoT sensors for real-time monitoring</li>
          <li>AI-powered quality control systems</li>
          <li>Automated predictive maintenance</li>
          <li>Digital twin technology</li>
        </ul>
        
        <p>Companies implementing these technologies are seeing productivity increases of 30-40% while reducing operational costs significantly.</p>
      `
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Essential strategies for e-commerce growth and scalability",
      author: "Sneha Gupta",
      date: "April 2, 2024",
      content: `
        <h2>E-commerce Scalability Guide</h2>
        <p>Building e-commerce platforms that can grow with your business requires careful planning and the right technology stack.</p>
        
        <h3>Architecture Best Practices</h3>
        <ul>
          <li>Microservices architecture for independent scaling</li>
          <li>Cloud-native deployment strategies</li>
          <li>Database optimization techniques</li>
          <li>Performance monitoring systems</li>
        </ul>
        
        <p>Proper implementation can handle traffic increases of 1000% without performance degradation.</p>
      `
    },
    {
      id: 3,
      title: "AI-Powered Customer Relationship Management",
      excerpt: "Transforming CRM with artificial intelligence",
      author: "Deepak Malhotra",
      date: "February 28, 2024",
      content: `
        <h2>AI Revolution in CRM</h2>
        <p>Artificial intelligence is fundamentally changing how businesses manage customer relationships and drive sales growth.</p>
        
        <h3>AI Capabilities in Modern CRM</h3>
        <ul>
          <li>Predictive analytics for customer behavior</li>
          <li>Automated lead scoring and qualification</li>
          <li>Personalized recommendation engines</li>
          <li>Natural language processing for communications</li>
        </ul>
        
        <p>Organizations using AI-powered CRM see 25-35% improvement in sales conversion rates.</p>
      `
    }
  ];

  const openPost = (post) => {
    console.log('=== BUTTON CLICKED ===');
    console.log('Post ID:', post.id);
    console.log('Post Title:', post.title);
    setSelectedPost(post);
    console.log('Modal should be open now');
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '20px',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Our <span style={{ color: '#22c55e' }}>Blog</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
          Industry insights and technology trends
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {blogPosts.map(post => (
          <div 
            key={post.id}
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '15px',
              padding: '25px',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '15px',
              color: '#22c55e'
            }}>
              {post.title}
            </h3>
            
            <p style={{ 
              color: '#94a3b8', 
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              {post.excerpt}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '0.9rem',
              color: '#64748b',
              marginBottom: '20px'
            }}>
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>
            
            <button
              onClick={() => openPost(post)}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(45deg, #22c55e, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Read Detailed Article
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={closePost}
        >
          <div 
            style={{
              background: '#1e293b',
              borderRadius: '15px',
              padding: '30px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h2 style={{ 
                fontSize: '2rem',
                color: '#22c55e',
                margin: 0
              }}>
                {selectedPost.title}
              </h2>
              <button
                onClick={closePost}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.5rem'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '20px',
              fontSize: '0.9rem',
              color: '#94a3b8',
              marginBottom: '25px'
            }}>
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>
            
            <div 
              style={{ 
                color: '#e2e8f0',
                lineHeight: '1.7'
              }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            
            <div style={{ 
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <button
                onClick={closePost}
                style={{
                  padding: '12px 25px',
                  background: 'linear-gradient(45deg, #22c55e, #3b82f6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleBlog;