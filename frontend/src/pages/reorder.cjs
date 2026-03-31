const fs = require('fs');
const code = fs.readFileSync('Services.jsx', 'utf8');

const getObjStart = (code, id) => {
  let idx = code.indexOf(`id: '${id}'`);
  if (idx === -1) idx = code.indexOf(`id: "${id}"`);
  while(code[idx] !== '{' && idx > 0) idx--;
  return idx;
};

const getObjEnd = (code, startIdx) => {
  let braceCount = 0;
  let idx = startIdx;
  do {
    if(code[idx] === '{') braceCount++;
    if(code[idx] === '}') braceCount--;
    idx++;
  } while(braceCount > 0 && idx < code.length);
  return idx;
};

const extractSection = (id, newTitle) => {
  let startIdx = getObjStart(code, id);
  let endIdx = getObjEnd(code, startIdx);
  let content = code.substring(startIdx, endIdx);
  
  // replace title
  const titleRegex = /title:\s*['"][^'"]+['"]/;
  content = content.replace(titleRegex, `title: '${newTitle}'`);
  
  return content;
};

try {
  const blocks = {
    'ai-automation': extractSection('ai-automation', 'AI Automation Agent Service'),
    'software-development': extractSection('software-development', 'Software + APK Development Service'),
    'enterprise-solutions': extractSection('enterprise-solutions', 'Enterprise Industry Solution'),
    'digital-marketing': extractSection('digital-marketing', 'Digital + Performance Marketing Service'),
    'graphical-development': extractSection('graphical-development', 'Graphical Development Services'),
    'collaboration': extractSection('collaboration', 'Collaboration & Project Management')
  };

  const physicalMarketing = `{
    id: 'physical-marketing',
    title: 'Physical Marketing Services',
    subtitle: 'Complete Offline & Direct Marketing',
    description: 'Comprehensive physical marketing solutions designed to build real-world brand presence and drive direct local engagement.',
    icon: 'storefront',
    color: 'from-orange-500 to-red-500',
    services: [
      {
        category: 'Print & Promotions',
        description: 'High-quality print materials and promotional items',
        items: [
          'Business cards & brochures',
          'Banners & hoardings',
          'Custom promotional merchandise',
          'Event collateral'
        ],
        icon: 'print',
        color: 'from-orange-500 to-red-500'
      },
      {
        category: 'Direct Mail Campaigns',
        description: 'Targeted physical mailings to key demographics',
        items: [
          'Catalog distribution',
          'Postcard campaigns',
          'Local area marketing'
        ],
        icon: 'mail',
        color: 'from-red-500 to-rose-500'
      }
    ],
    packages: [
      {
        name: 'Basic Physical',
        price: '₹15,000/month',
        description: 'Essential physical marketing for local presence',
        features: [
          'Basic print materials',
          'Local distribution',
          'Monthly physical reports'
        ],
        color: 'from-orange-500 to-red-500',
        popular: false
      }
    ]
  }`;

  const newBlocks = [
    blocks['ai-automation'],
    blocks['software-development'],
    blocks['enterprise-solutions'],
    blocks['digital-marketing'],
    physicalMarketing,
    blocks['graphical-development'],
    blocks['collaboration']
  ];

  const arrayStart = code.indexOf('const serviceSections = [');
  const actualArrayStart = code.indexOf('[', arrayStart) + 1;
  const arrayEnd = code.lastIndexOf('];', code.indexOf('  const [activeSection, setActiveSection] = useState(', actualArrayStart));
  
  // Wait, let's find exactly the end of the array.
  // We know it's a top-level array in the component.
  // The line `  ];` right before `  const [activeSection, setActiveSection] = useState('digital-marketing');`
  
  // Let's find arrayStart
  let astart = getObjStart(code, 'digital-marketing'); 
  // Above this is `const serviceSections = [\n    `
  astart = code.lastIndexOf('[', astart) + 1;
  
  let aend = code.indexOf('];', getObjEnd(code, getObjStart(code, 'collaboration')));

  const newCode = code.substring(0, astart) + '\n    ' + newBlocks.join(',\n    ') + '\n  ' + code.substring(aend);
  fs.writeFileSync('Services.jsx', newCode);
  console.log('Successfully updated Services.jsx');
} catch(e) {
  console.error(e);
}
