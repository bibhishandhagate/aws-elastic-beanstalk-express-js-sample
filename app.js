const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<div style="background-color: #0000FF; padding: 20px;">Hello Bibhishan good afternoon! </div>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
