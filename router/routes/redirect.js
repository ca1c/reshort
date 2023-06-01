const URL = require('../../Model/URL.js');

async function redirect(req, res) {
    const data = req.params;
    const { URLID } = data;

    if(!URLID) {
        res.status(404);
        res.send({error: true, message: "URL Not Found."});
    }

    try {
        const url = await URL.findOne({ URLID: URLID});
        res.redirect(url.redirectURL);
    }
    catch(error) {
        res.status(404);
        res.send({error: true, message: "URL Not Found."});
        console(error);
    }
}

module.exports = redirect;