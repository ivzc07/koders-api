//tercero
const express = require('express')
const authUseCase = require('../usescases/auth.usescases');
const router = express.Router()

// POST 
router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body
        const token = await authUseCase.login(email, password)
        res.json({
            success: true,
            data: {
                koder: { token }
            }
        })

    } catch (error) {

        res.status(error.status || 500)
        res.json({
            success: false,
            error: error.message
        })

    }
})


module.exports = router