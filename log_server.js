const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok');
            process.exit(0);
        });
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
    }
});

server.listen(3002, () => {
    console.log('Listening on 3002');
});
