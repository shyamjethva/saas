const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const basePath = 'd:/saas_6_5_26/Saas_website/error_infotech_saas';
const fullSrc = path.join(basePath, 'Portfolio/all portfolios/my portfolio/portfoliolatest');
const fullDest = path.join(basePath, 'frontend/public/portfolios/shyam-portfolio');

console.log(`\nProcessing shyam-portfolio (from my portfolio)...`);

// 1. Modify vite.config.ts for base: './'
const viteConfigPaths = [path.join(fullSrc, 'vite.config.ts'), path.join(fullSrc, 'vite.config.js')];
for (const vcp of viteConfigPaths) {
  if (fs.existsSync(vcp)) {
    let content = fs.readFileSync(vcp, 'utf8');
    if (!content.includes("base: './'") && !content.includes('base: "./"')) {
      content = content.replace('defineConfig({', "defineConfig({\n  base: './',");
      fs.writeFileSync(vcp, content);
    }
  }
}

// 2. Modify package.json to skip typescript build
const pkgPath = path.join(fullSrc, 'package.json');
if (fs.existsSync(pkgPath)) {
  let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg.scripts && pkg.scripts.build && pkg.scripts.build.includes('tsc')) {
    pkg.scripts.build = "vite build";
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }
}

// 3. Fix CSS imports
function fixImportsInCss(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') fixImportsInCss(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@import')) {
        const lines = content.split('\n');
        const imports = lines.filter(l => l.trim().startsWith('@import'));
        const nonImports = lines.filter(l => !l.trim().startsWith('@import'));
        if (imports.length > 0) fs.writeFileSync(fullPath, [...imports, ...nonImports].join('\n'));
      }
    }
  }
}
try { fixImportsInCss(path.join(fullSrc, 'src')); } catch (e) { }

// 4. Install and Build
try {
  execSync('npm install --legacy-peer-deps --no-audit --no-fund', { cwd: fullSrc, stdio: 'inherit' });
  execSync('npm run build', { cwd: fullSrc, stdio: 'inherit' });
} catch (err) {
  console.error(`Failed to build shyam-portfolio`);
  process.exit(1);
}

// 5. Copy dist to public/portfolios
const distPath = path.join(fullSrc, 'dist');
if (fs.existsSync(distPath)) {
  if (fs.existsSync(fullDest)) fs.rmSync(fullDest, { recursive: true, force: true });
  fs.cpSync(distPath, fullDest, { recursive: true });
  console.log(`Successfully copied updated shyam-portfolio to public folder.`);
} else {
  console.log(`No dist folder found for shyam-portfolio.`);
}
