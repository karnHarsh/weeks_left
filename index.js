const express = require('express');
const path = require('path');

const app = express();
const port = 2900;

app.use(express.static(path.join(__dirname + '/static')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/static/index.html')));

app.listen(port, () => {console.log(`Weeks Left App listening at http://localhost:${port}`)})