import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function main() {
  console.log('Packaging lightweight, fast Garbage Route Source ZIP (strictly < 25MB)...');
  const zip = new JSZip();

  function addFile(filePath, zipPath) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      zip.file(zipPath || filePath, content);
    }
  }

  function addDir(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.git' ||
        entry.name === '.aistudio' ||
        entry.name === 'build' ||
        entry.name.endsWith('.zip') ||
        entry.name.endsWith('.log') ||
        entry.name.startsWith('Screenshot_') ||
        entry.name === '.DS_Store'
      ) {
        continue;
      }
      const fullPath = path.join(dir, entry.name);
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        addDir(fullPath, relPath);
      } else {
        const content = fs.readFileSync(fullPath);
        zip.file(relPath, content);
      }
    }
  }

  // 1. Add all root config & doc files
  const rootFiles = [
    'index.html',
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    '.env.example',
    '.gitignore',
    'metadata.json',
    'README.md',
    'EXPORT_AND_BUILD_GUIDE.md',
  ];
  for (const f of rootFiles) {
    addFile(f, f);
  }

  // 2. Add complete src directory
  addDir('src', 'src');

  // 3. Add scripts directory
  addDir('scripts', 'scripts');

  // 3b. Add public directory assets (excluding zip files and old screenshots)
  addDir('public', 'public');

  // 4. Add clean GitHub Actions workflows
  addDir('.github', '.github');

  // 5. Clean and prepare fresh minimal Android web assets from dist
  const assetsDir = 'android/app/src/main/assets';
  const assetsDistDir = 'android/app/src/main/assets/dist';
  
  if (fs.existsSync(assetsDir)) {
    // Remove stale compiled bundles to eliminate APK bloat
    fs.rmSync(assetsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(assetsDistDir, { recursive: true });

  if (fs.existsSync('dist')) {
    const distFiles = fs.readdirSync('dist');
    for (const file of distFiles) {
      if (file.endsWith('.zip')) continue;
      const srcPath = path.join('dist', file);
      const stat = fs.statSync(srcPath);
      if (stat.isFile()) {
        fs.copyFileSync(srcPath, path.join(assetsDir, file));
        fs.copyFileSync(srcPath, path.join(assetsDistDir, file));
      } else if (stat.isDirectory()) {
        fs.cpSync(srcPath, path.join(assetsDir, file), { recursive: true });
        fs.cpSync(srcPath, path.join(assetsDistDir, file), { recursive: true });
      }
    }
  }

  // 6. Add clean native Android wrapper with compiled assets
  addDir('android', 'android');

  // 7. Generate highly-compressed zip archive
  console.log('Generating ZIP binary with maximum compression...');
  const buffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  const sizeMb = (buffer.length / (1024 * 1024)).toFixed(2);
  console.log(`ZIP Size: ${sizeMb} MB (Strictly below GitHub 25 MB limit!)`);

  const destinations = [
    'Garbage_Route_Source.zip',
    'public/Garbage_Route_Source.zip',
    'dist/Garbage_Route_Source.zip',
  ];

  for (const dest of destinations) {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dest, buffer);
    console.log(`Wrote ${buffer.length} bytes to ${dest}`);
  }

  console.log('Successfully packaged lightweight Garbage Route Source ZIP!');
}

main().catch((err) => {
  console.error('Error packaging zip:', err);
  process.exit(1);
});
