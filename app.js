const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<div style="background-color: #0000FF; padding: 20px;">Hello Bibhishan Dhagate, How are you?, You are awsome</div>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
