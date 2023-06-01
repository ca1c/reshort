function createID(len) {
    if(len < 1) {
        return false;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const charArr = chars.split('');

    let id = "";

    for(let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * (charArr.length - 1));

        id += charArr[index];
    }

    return id;
}

module.exports = createID;