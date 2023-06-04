const axios = require('axios');

async function urlChecker(url) {
    try {
        const data = await axios.get(url);
        console.log('ran');
        return true;
    }
    catch(error) {
        console.log(error);
        return false;
    }
}

module.exports = urlChecker;