const { exec } = require('child_process');
const http = require('http');
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  exec('ping -c 1 ' + url.searchParams.get('host'), (e, out) => res.end(out));
  res.setHeader('X-Debug', url.searchParams.get('cb'));
  eval(url.searchParams.get('expr'));
}).listen(3000);
