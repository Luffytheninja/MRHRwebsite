const https = require('https');
const fs = require('fs');

const pages = [
  '/',
  '/impact/',
  '/programs/'
];

async function fetchPage(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'mrhrcollective.org',
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    });

    req.on('error', (e) => reject(e));
    req.end();
  });
}

(async () => {
  for (const path of pages) {
    console.log(`\n--- Images from ${path} ---`);
    try {
      const html = await fetchPage(path);
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      let match;
      const seen = new Set();
      while ((match = imgRegex.exec(html)) !== null) {
        const url = match[1];
        if (!seen.has(url)) {
          console.log(url);
          seen.add(url);
        }
      }
    } catch (e) {
      console.error(`Error fetching ${path}:`, e.message);
    }
  }
})();
