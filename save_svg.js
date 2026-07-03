const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            fs.writeFileSync('e:/metallo-industrial/public/data/world-map.svg', body);
            res.end('ok');
            console.log('SVG Saved!');
            process.exit(0);
        });
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    }
});

server.listen(3001, () => {
    console.log('Listening on 3001');
});
