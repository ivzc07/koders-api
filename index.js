require('dotenv').config();

const server = require('./src/server.js')
const db = require('./src/lib/db.js');
const PORT = process.env.PORT || 8080

db.connect()
    .then(() => {
        server.listen(PORT, () => {
            console.log("DB connected")
            console.log("Server running on port: ", PORT);
        } )
    })
    .catch((error) => {
        console.error("DB connection erro",error);
    })

