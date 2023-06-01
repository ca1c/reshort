const URL = require('../../Model/URL.js');
const createID = require('../../lib/createID.js');

async function createURL(req, res) {
    const data = req.body;
    const { redirectURL } = data;

    if(!redirectURL) {
        res.send({error: true, message: "did not receive redirectURL"});
    }

    let URLID = createID(8);

    try {
        await URL.create({ URLID: URLID, redirectURL: redirectURL });
        res.send({error: false, message: `http://localhost:3000/api/${URLID}`});
    }
    catch(error) {
        res.send({error: true, message: "db error"});
        console(error);
    }
}

module.exports = createURL