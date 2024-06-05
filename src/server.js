const express = require('express');
const kodersRouter = require("./routes/koders.router");
const mentorsRouter = require('./routes/mentors.router')
const authRouter = require('./routes/auth.router');
const generationsRouter = require('./routes/generations.router');
const app = express();



//middleware
app.use(express.json());

app.use('/koders', kodersRouter);
app.use('/mentors', mentorsRouter);
app.use('/auth', authRouter);
app.use('/generations', generationsRouter);
app.get('/',(request, response) => {
    response.json({
        message : "Koders APIv1",
    });
})

module.exports = app;