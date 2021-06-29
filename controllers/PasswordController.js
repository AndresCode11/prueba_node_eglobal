const bcrypt = require('bcrypt');
const saltRounds = 10;

async function encrypt(password) {
    return bcrypt.hash(password, saltRounds)
}

async function check(password, hash) {
    return bcrypt.compare(password, hash);
}

module.exports = {
    encrypt: encrypt,
    check: check
}