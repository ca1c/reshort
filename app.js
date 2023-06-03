const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const path = require('path');

main().catch(error => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/urlshortener');
}

const router = require('./router/controller');

app.use(bodyParser.json());
app.use('/', serveStatic(path.join(__dirname, '/client/build')));
app.use('/api', router);

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(4000, function() {
    console.log("Listening on port 4000")
});