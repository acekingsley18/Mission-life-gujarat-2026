import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const screenshotsDir = path.join(projectRoot, 'submission', 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Simple static file server for dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  let filePath = path.join(distDir, reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  } catch (err) {
    res.writeHead(500);
    res.end('Server Error: ' + err.code);
  }
});

const PORT = 5174;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const pages = [
    { name: '01_dashboard.png', hash: '#dashboard' },
    { name: '02_carbon_calculator.png', hash: '#calculator' },
    { name: '03_green_recommendations.png', hash: '#recommendations' },
    { name: '04_challenges_gamification.png', hash: '#challenges' },
    { name: '05_rooftop_solar_explorer.png', hash: '#solar' },
    { name: '06_education_knowledge_hub.png', hash: '#education' },
    { name: '07_district_community_pulse.png', hash: '#community' }
  ];

  for (const page of pages) {
    const targetUrl = `http://127.0.0.1:${PORT}/${page.hash}`;
    const outputPath = path.join(screenshotsDir, page.name);

    console.log(`Capturing ${page.name} from ${targetUrl}...`);
    try {
      execFileSync(chromePath, [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--window-size=1440,900',
        '--virtual-time-budget=2500',
        `--screenshot=${outputPath}`,
        targetUrl
      ], { timeout: 15000 });
      console.log(`✓ Saved ${page.name}`);
    } catch (err) {
      console.error(`Error capturing ${page.name}:`, err.message);
    }
  }

  server.close(() => {
    console.log('Finished capturing all screenshots.');
    process.exit(0);
  });
});
