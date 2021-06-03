const express = require('express');
const app = express();
const port = 3000;

const expresConfig = require('./config/expres');

expresConfig(app);

app.listen(port, () => console.log('Server is listening on port 3000 ...'))