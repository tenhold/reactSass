const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()


const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));

app.get('*', (_req, res) => {
  res.sendFile(HTML_FILE);
});

http.listen(port, () => {
  console.info(`App listening http://localhost:${port}`);
});
