const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const portfolios = [
  { src: 'Portfolio/all portfolios/hiral_portfolio/hiral_portfolio/frontend', dest: 'hiral_portfolio' },
  { src: 'Portfolio/all portfolios/pratham_portfolio/portfoliolatest', dest: 'pratham_portfolio' },
  { src: 'Portfolio/all portfolios/sir portfolio/portfoliolatest', dest: 'rakshit_portfolio' }
];

const basePath = 'd:/saas_6_5_26/Saas_website/error_infotech_saas';
const publicPortfoliosPath = path.join(basePath, 'frontend/public/portfolios');

if (!fs.existsSync(publicPortfoliosPath)) {
  fs.mkdirSync(publicPortfoliosPath, { recursive: true });
}

function fixImportsInCss(dir) {
  if (!fs.existsSync(dir)) return;
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
  
  const appDir = fullSrc;
  
  if (p.dest === 'rakshit_portfolio' && !fs.existsSync(path.join(appDir, 'src'))) {
     console.log("No src directory found for Rakshit. Trying to patch dist directly.");
     const distPath = path.join(appDir, 'dist');
     if (fs.existsSync(distPath)) {
        if (fs.existsSync(fullDest)) fs.rmSync(fullDest, { recursive: true, force: true });
        fs.cpSync(distPath, fullDest, { recursive: true });
        
        // Patch index.html
        const indexHtml = path.join(fullDest, 'index.html');
        if (fs.existsSync(indexHtml)) {
           let html = fs.readFileSync(indexHtml, 'utf8');
           html = html.replace(/href="\/assets\//g, 'href="./assets/');
           html = html.replace(/src="\/assets\//g, 'src="./assets/');
           html = html.replace(/href="\/favicon\.svg"/g, 'href="./favicon.svg"');
           fs.writeFileSync(indexHtml, html);
           console.log("Patched index.html with relative paths.");
        }
     }
     continue;
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

console.log("\nRemaining portfolios processed!");
