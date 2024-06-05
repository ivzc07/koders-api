const jsonwebtoken = require('jsonwebtoken');

const { JWT_SECRET } = process.env;


 
function sing (payload){
    return jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

function verify(token) {
    return jsonwebtoken.verify(token, JWT_SECRET);
}

module.exports = {
    sing,
    verify
}