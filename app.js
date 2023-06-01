const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

main().catch(error => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/urlshortener');
}

const router = require('./router/controller');

app.use(bodyParser.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send("<h1>WELCOME</h1>");
});

app.listen(3000, function() {
    console.log("Listening on port 3000")
});