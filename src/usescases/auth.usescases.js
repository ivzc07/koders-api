const createError = require('http-errors');
const jwt = require('../lib/jwt');
const Koders = require('../models/koders.model');
const encrypt = require('../lib/encrypt');

async function login(email, password) {

    const koder = await Koders.findOne({ email: email })

    if (!koder) throw createError(401, "Invalid data mail")

    const isPasswordValid = await encrypt.compare(password, koder.password)

    if (!isPasswordValid) throw createError(401, "Invalid data pass")

    const token = jwt.sing({ id: koder._id })

    return token

}

module.exports = {
    login
}