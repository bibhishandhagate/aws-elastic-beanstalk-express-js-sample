const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<div style="background-color: #f0f0f0; padding: 20px;">Hello Bibhishan Dhagate, How are you?, YOu are great</div>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
