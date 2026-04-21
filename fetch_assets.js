const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'mrhrcollective.org',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('mrhr_raw.html', data);
    console.log('Successfully saved mrhr_raw.html');
    
    // Find image tags
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    console.log('\n--- Image URLs ---');
    while ((match = imgRegex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
