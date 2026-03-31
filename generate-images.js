// Simple image generator for AI Conversation workflow
const fs = require('fs');
const path = require('path');

// Create image directory if it doesn't exist
const imageDir = path.join(__dirname, 'frontend', 'public', 'images', 'ai-conversation');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Generate simple SVG images
const images = [
  {
    name: 'main-workflow.jpg',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0f172a"/>
  <rect x="50" y="50" width="700" height="350" rx="20" fill="#1e293b" stroke="#22c55e" stroke-width="3"/>
  
  <!-- AI Brain Icon -->
  <circle cx="200" cy="150" r="60" fill="#22c55e" opacity="0.8"/>
  <circle cx="200" cy="150" r="40" fill="#16a34a"/>
  <text x="200" y="155" font-family="Arial" font-size="24" fill="white" text-anchor="middle" font-weight="bold">AI</text>
  
  <!-- Connection Lines -->
  <line x1="260" y1="150" x2="350" y2="150" stroke="#22c55e" stroke-width="3"/>
  <line x1="350" y1="150" x2="450" y2="120" stroke="#22c55e" stroke-width="3"/>
  <line x1="350" y1="150" x2="450" y2="180" stroke="#22c55e" stroke-width="3"/>
  
  <!-- Process Boxes -->
  <rect x="450" y="100" width="120" height="40" rx="10" fill="#0ea5e9" opacity="0.8"/>
  <text x="510" y="125" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Speech-to-Text</text>
  
  <rect x="450" y="160" width="120" height="40" rx="10" fill="#8b5cf6" opacity="0.8"/>
  <text x="510" y="185" font-family="Arial" font-size="12" fill="white" text-anchor="middle">AI Processing</text>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial" font-size="24" fill="#22c55e" text-anchor="middle" font-weight="bold">AI Conversation Workflow</text>
  
  <!-- Stats -->
  <text x="100" y="250" font-family="Arial" font-size="14" fill="#94a3b8">Real-time Processing</text>
  <text x="100" y="270" font-family="Arial" font-size="14" fill="#94a3b8">99.9% Accuracy</text>
  <text x="100" y="290" font-family="Arial" font-size="14" fill="#94a3b8">24/7 Availability</text>
</svg>`
  },
  {
    name: 'script-builder.jpg',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0f172a"/>
  <rect x="50" y="50" width="700" height="350" rx="20" fill="#1e293b" stroke="#3b82f6" stroke-width="3"/>
  
  <!-- Document Icons -->
  <rect x="100" y="120" width="80" height="100" rx="5" fill="#3b82f6" opacity="0.8"/>
  <rect x="110" y="130" width="60" height="5" fill="white"/>
  <rect x="110" y="145" width="50" height="3" fill="white"/>
  <rect x="110" y="155" width="55" height="3" fill="white"/>
  <rect x="110" y="165" width="45" height="3" fill="white"/>
  
  <rect x="200" y="120" width="80" height="100" rx="5" fill="#6366f1" opacity="0.8"/>
  <rect x="210" y="130" width="60" height="5" fill="white"/>
  <rect x="210" y="145" width="50" height="3" fill="white"/>
  <rect x="210" y="155" width="55" height="3" fill="white"/>
  <rect x="210" y="165" width="45" height="3" fill="white"/>
  
  <rect x="300" y="120" width="80" height="100" rx="5" fill="#8b5cf6" opacity="0.8"/>
  <rect x="310" y="130" width="60" height="5" fill="white"/>
  <rect x="310" y="145" width="50" height="3" fill="white"/>
  <rect x="310" y="155" width="55" height="3" fill="white"/>
  <rect x="310" y="165" width="45" height="3" fill="white"/>
  
  <!-- AI Generator -->
  <circle cx="500" cy="170" r="70" fill="#10b981" opacity="0.8"/>
  <circle cx="500" cy="170" r="50" fill="#059669"/>
  <text x="500" y="175" font-family="Arial" font-size="20" fill="white" text-anchor="middle" font-weight="bold">AI</text>
  <text x="500" y="200" font-family="Arial" font-size="14" fill="white" text-anchor="middle">GENERATOR</text>
  
  <!-- Arrows -->
  <line x1="380" y1="170" x2="430" y2="170" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
  <line x1="180" y1="250" x2="450" y2="250" stroke="#10b981" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Output Document -->
  <rect x="580" y="140" width="100" height="130" rx="5" fill="#10b981" opacity="0.9"/>
  <rect x="590" y="155" width="80" height="5" fill="white"/>
  <rect x="590" y="170" width="70" height="3" fill="white"/>
  <rect x="590" y="180" width="75" height="3" fill="white"/>
  <rect x="590" y="190" width="65" height="3" fill="white"/>
  <text x="630" y="215" font-family="Arial" font-size="12" fill="white" text-anchor="middle">SALES SCRIPT</text>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial" font-size="24" fill="#3b82f6" text-anchor="middle" font-weight="bold">Script Builder Agent</text>
  <text x="400" y="60" font-family="Arial" font-size="16" fill="#94a3b8" text-anchor="middle">AI-Powered Campaign Generation</text>
</svg>`
  },
  {
    name: 'analysis-dashboard.jpg',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0f172a"/>
  <rect x="50" y="50" width="700" height="350" rx="20" fill="#1e293b" stroke="#8b5cf6" stroke-width="3"/>
  
  <!-- Dashboard Header -->
  <rect x="80" y="80" width="640" height="40" fill="#374151" rx="10"/>
  <text x="400" y="105" font-family="Arial" font-size="18" fill="white" text-anchor="middle" font-weight="bold">CALL ANALYSIS DASHBOARD</text>
  
  <!-- Charts -->
  <rect x="100" y="140" width="180" height="120" fill="#374151" rx="8"/>
  <text x="190" y="160" font-family="Arial" font-size="14" fill="#d1d5db" text-anchor="middle">Sentiment Analysis</text>
  <!-- Simple bar chart -->
  <rect x="120" y="180" width="20" height="60" fill="#10b981"/>
  <rect x="150" y="160" width="20" height="80" fill="#f59e0b"/>
  <rect x="180" y="200" width="20" height="40" fill="#ef4444"/>
  <text x="130" y="250" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="middle">Pos</text>
  <text x="160" y="250" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="middle">Neu</text>
  <text x="190" y="250" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="middle">Neg</text>
  
  <rect x="300" y="140" width="180" height="120" fill="#374151" rx="8"/>
  <text x="390" y="160" font-family="Arial" font-size="14" fill="#d1d5db" text-anchor="middle">Call Score Distribution</text>
  <!-- Score bars -->
  <rect x="320" y="180" width="140" height="10" fill="#3b82f6"/>
  <rect x="320" y="195" width="120" height="10" fill="#8b5cf6"/>
  <rect x="320" y="210" width="100" height="10" fill="#d946ef"/>
  <text x="470" y="188" font-family="Arial" font-size="10" fill="#94a3b8">8-10</text>
  <text x="450" y="203" font-family="Arial" font-size="10" fill="#94a3b8">5-7</text>
  <text x="430" y="218" font-family="Arial" font-size="10" fill="#94a3b8">1-4</text>
  
  <rect x="500" y="140" width="180" height="120" fill="#374151" rx="8"/>
  <text x="590" y="160" font-family="Arial" font-size="14" fill="#d1d5db" text-anchor="middle">Lead Classification</text>
  <circle cx="540" cy="200" r="15" fill="#10b981"/>
  <circle cx="590" cy="200" r="15" fill="#f59e0b"/>
  <circle cx="640" cy="200" r="15" fill="#ef4444"/>
  <text x="540" y="205" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Hot</text>
  <text x="590" y="205" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Warm</text>
  <text x="640" y="205" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Cold</text>
  
  <!-- Stats Panel -->
  <rect x="100" y="280" width="580" height="80" fill="#374151" rx="10"/>
  <text x="120" y="300" font-family="Arial" font-size="14" fill="#d1d5db">Today's Summary:</text>
  <text x="120" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 45 Calls Analyzed</text>
  <text x="250" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 72% Positive Sentiment</text>
  <text x="420" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 23 Hot Leads Generated</text>
  <text x="120" y="340" font-family="Arial" font-size="12" fill="#94a3b8">• Average Score: 8.2/10</text>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial" font-size="24" fill="#8b5cf6" text-anchor="middle" font-weight="bold">Analysis & Sentiment Dashboard</text>
</svg>`
  },
  {
    name: 'decision-engine.jpg',
    content: `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0f172a"/>
  <rect x="50" y="50" width="700" height="350" rx="20" fill="#1e293b" stroke="#ec4899" stroke-width="3"/>
  
  <!-- Decision Engine Header -->
  <rect x="80" y="80" width="640" height="40" fill="#be185d" rx="10"/>
  <text x="400" y="105" font-family="Arial" font-size="18" fill="white" text-anchor="middle" font-weight="bold">SMART RETRY & DECISION ENGINE</text>
  
  <!-- Decision Flow -->
  <circle cx="150" cy="180" r="40" fill="#3b82f6" opacity="0.8"/>
  <text x="150" y="185" font-family="Arial" font-size="12" fill="white" text-anchor="middle">CALL</text>
  <text x="150" y="200" font-family="Arial" font-size="12" fill="white" text-anchor="middle">ENDED</text>
  
  <line x1="190" y1="180" x2="250" y2="180" stroke="#ec4899" stroke-width="2" marker-end="url(#arrow)"/>
  
  <rect x="250" y="150" width="100" height="60" rx="10" fill="#8b5cf6" opacity="0.8"/>
  <text x="300" y="175" font-family="Arial" font-size="12" fill="white" text-anchor="middle">ANALYZE</text>
  <text x="300" y="190" font-family="Arial" font-size="12" fill="white" text-anchor="middle">RESULTS</text>
  
  <line x1="350" y1="180" x2="400" y2="180" stroke="#ec4899" stroke-width="2" marker-end="url(#arrow)"/>
  
  <!-- Decision Points -->
  <circle cx="450" cy="140" r="30" fill="#10b981" opacity="0.8"/>
  <text x="450" y="145" font-family="Arial" font-size="10" fill="white" text-anchor="middle">INTERESTED</text>
  <text x="450" y="160" font-family="Arial" font-size="10" fill="white" text-anchor="middle">→ CRM</text>
  
  <circle cx="450" cy="220" r="30" fill="#f59e0b" opacity="0.8"/>
  <text x="450" y="225" font-family="Arial" font-size="10" fill="white" text-anchor="middle">NO ANSWER</text>
  <text x="450" y="240" font-family="Arial" font-size="10" fill="white" text-anchor="middle">→ RETRY</text>
  
  <circle cx="550" cy="180" r="30" fill="#ef4444" opacity="0.8"/>
  <text x="550" y="185" font-family="Arial" font-size="10" fill="white" text-anchor="middle">BUSY</text>
  <text x="550" y="200" font-family="Arial" font-size="10" fill="white" text-anchor="middle">→ CALLBACK</text>
  
  <!-- Connection Lines -->
  <line x1="300" y1="210" x2="420" y2="220" stroke="#ec4899" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="350" y1="150" x2="420" y2="140" stroke="#ec4899" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Actions Flow -->
  <rect x="500" y="100" width="120" height="40" rx="8" fill="#10b981"/>
  <text x="560" y="125" font-family="Arial" font-size="10" fill="white" text-anchor="middle">PUSH TO CRM</text>
  
  <rect x="500" y="200" width="120" height="40" rx="8" fill="#f59e0b"/>
  <text x="560" y="225" font-family="Arial" font-size="10" fill="white" text-anchor="middle">SCHEDULE RETRY</text>
  
  <rect x="600" y="160" width="120" height="40" rx="8" fill="#ef4444"/>
  <text x="660" y="185" font-family="Arial" font-size="10" fill="white" text-anchor="middle">CALLBACK</text>
  
  <!-- Stats -->
  <rect x="100" y="280" width="600" height="80" fill="#374151" rx="10"/>
  <text x="120" y="300" font-family="Arial" font-size="14" fill="#d1d5db">Engine Performance:</text>
  <text x="120" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 89% Decision Accuracy</text>
  <text x="280" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 4.2 Average Retries/Lead</text>
  <text x="460" y="320" font-family="Arial" font-size="12" fill="#94a3b8">• 15ms Response Time</text>
  <text x="120" y="340" font-family="Arial" font-size="12" fill="#94a3b8">• 12,500 Decisions/Day</text>
  
  <!-- Title -->
  <text x="400" y="30" font-family="Arial" font-size="24" fill="#ec4899" text-anchor="middle" font-weight="bold">Automation Decision Engine</text>
</svg>`
  }
];

// Create SVG files
images.forEach(image => {
  const filePath = path.join(imageDir, image.name);
  fs.writeFileSync(filePath, image.content, 'utf8');
  console.log(`Created: ${filePath}`);
});

console.log('\n✅ All images created successfully!');
console.log('📁 Location: frontend/public/images/ai-conversation/');
console.log('📁 Files:');
images.forEach(img => console.log(`  - ${img.name}`));