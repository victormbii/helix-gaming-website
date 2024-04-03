const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/news.js') {
        // Set correct MIME type for JavaScript files
        res.writeHead(200, { 'Content-Type': 'text/javascript' });

        // Read and serve the JavaScript file
        fs.readFile('news.js', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
