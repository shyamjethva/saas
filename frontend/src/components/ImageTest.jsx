import React from 'react';

const ImageTest = () => {
  const images = [
    { id: 1, src: '/images/ai-conversation/aiconversationagent1.jpeg', alt: 'AI Conversation Agent' },
    { id: 2, src: '/images/ai-conversation/scriptbuilder2.jpeg', alt: 'Script Builder' },
    { id: 3, src: '/images/ai-conversation/callanalysis3.jpeg', alt: 'Call Analysis' },
    { id: 4, src: '/images/ai-conversation/smartretry4.jpeg', alt: 'Smart Retry' }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#1e293b', color: 'white', minHeight: '100vh' }}>
      <h1>Image Test Component</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map((img) => (
          <div key={img.id} style={{ border: '2px solid #22c55e', borderRadius: '8px', padding: '10px' }}>
            <h3>Image {img.id}</h3>
            <img 
              src={img.src} 
              alt={img.alt}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
              onError={(e) => {
                console.error('Image failed to load:', img.src);
                e.target.style.border = '2px solid red';
              }}
              onLoad={(e) => {
                console.log('Image loaded successfully:', img.src);
                e.target.style.border = '2px solid green';
              }}
            />
            <p style={{ marginTop: '10px' }}>{img.alt}</p>
            <p style={{ fontSize: '12px', color: '#94a3b8' }}>{img.src}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;