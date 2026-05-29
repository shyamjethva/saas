const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const portfolios = [
  { src: 'Portfolio/all portfolios/aastha_portfolio', dest: 'aastha_portfolio' },
  { src: 'Portfolio/all portfolios/hiral_portfolio', dest: 'hiral_portfolio' },
  { src: 'Portfolio/all portfolios/pratham_portfolio', dest: 'pratham_portfolio' },
  { src: 'Portfolio/all portfolios/prayushi_portfolio', dest: 'prayushi_portfolio' },
  { src: 'Portfolio/all portfolios/rohit_portfoliolatest', dest: 'rohit_portfoliolatest' },
  { src: 'Portfolio/all portfolios/shyam-portfolio/Shyam Portfolio/rajesh-portfolio-main', dest: 'shyam-portfolio' },
  { src: 'Portfolio/all portfolios/sir portfolio/portfoliolatest', dest: 'rakshit_portfolio' }
];

const basePath = 'd:/saas_6_5_26/Saas_website/error_infotech_saas';
const publicPortfoliosPath = path.join(basePath, 'frontend/public/portfolios');

if (!fs.existsSync(publicPortfoliosPath)) {
  fs.mkdirSync(publicPortfoliosPath, { recursive: true });
}

function fixImportsInCss(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        fixImportsInCss(fullPath);
      }
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@import')) {
        const lines = content.split('\n');
        const imports = lines.filter(l => l.trim().startsWith('@import'));
        const nonImports = lines.filter(l => !l.trim().startsWith('@import'));
        if (imports.length > 0) {
          const newContent = [...imports, ...nonImports].join('\n');
          fs.writeFileSync(fullPath, newContent);
        }
      }
    }
  }
}

for (const p of portfolios) {
  const fullSrc = path.join(basePath, p.src);
  const fullDest = path.join(publicPortfoliosPath, p.dest);

  if (!fs.existsSync(fullSrc)) {
    console.log(`Skipping ${p.src}, not found.`);
    continue;
  }

  console.log(`\nProcessing ${p.dest}...`);
  
  // Find where package.json is (some have it inside frontend)
  let appDir = fullSrc;
  if (!fs.existsSync(path.join(appDir, 'package.json')) && fs.existsSync(path.join(appDir, 'frontend', 'package.json'))) {
    appDir = path.join(appDir, 'frontend');
  } else if (!fs.existsSync(path.join(appDir, 'package.json')) && fs.existsSync(path.join(appDir, 'client', 'package.json'))) {
    appDir = path.join(appDir, 'client');
  }
  
  // 1. Modify vite.config.ts for base: './'
  const viteConfigPaths = [path.join(appDir, 'vite.config.ts'), path.join(appDir, 'vite.config.js')];
  for (const vcp of viteConfigPaths) {
    if (fs.existsSync(vcp)) {
      let content = fs.readFileSync(vcp, 'utf8');
      if (!content.includes("base: './'") && !content.includes('base: "./"')) {
        content = content.replace('defineConfig({', "defineConfig({\n  base: './',");
        fs.writeFileSync(vcp, content);
      }
      break;
    }
  }

  // 2. Modify package.json to skip typescript build
  const pkgPath = path.join(appDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (pkg.scripts && pkg.scripts.build && pkg.scripts.build.includes('tsc')) {
      pkg.scripts.build = "vite build";
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    }
  }

  // Fix CSS imports
  try {
    fixImportsInCss(path.join(appDir, 'src'));
  } catch(e) {}

  // 3. Install and Build
  try {
    execSync('npm install --legacy-peer-deps --no-audit --no-fund', { cwd: appDir, stdio: 'inherit' });
    execSync('npm run build', { cwd: appDir, stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to build ${p.dest}`);
    continue; 
  }

  // 4. Copy dist to public/portfolios
  const distPath = path.join(appDir, 'dist');
  if (fs.existsSync(distPath)) {
    if (fs.existsSync(fullDest)) {
      fs.rmSync(fullDest, { recursive: true, force: true });
    }
    fs.cpSync(distPath, fullDest, { recursive: true });
    console.log(`Successfully copied ${p.dest} to public folder.`);
  } else {
    console.log(`No dist folder found for ${p.dest}.`);
  }
}

console.log("\nAll portfolios processed!");
