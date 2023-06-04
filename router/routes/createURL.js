require('dotenv').config();
const URL = require('../../Model/URL.js');
const createID = require('../../lib/createID.js');
const urlChecker = require('../../lib/urlChecker.js');

async function createURL(req, res) {
    const data = req.body;
    const { redirectURL } = data;

    if(!redirectURL) {
        res.send({error: true, message: "did not receive redirectURL"});
        return;
    }

    const urlValid = await urlChecker(redirectURL);

    if(!urlValid) {
        res.send({error: true, message: "invalid url"});
        return;
    }

    let URLID = createID(8);

    try {
        await URL.create({ URLID: URLID, redirectURL: redirectURL });
        res.send({error: false, message: `${process.env.LOCAL_URL}${URLID}`});
    }
    catch(error) {
        res.send({error: true, message: "db error"});
        console(error);
    }
}

module.exports = createURL;