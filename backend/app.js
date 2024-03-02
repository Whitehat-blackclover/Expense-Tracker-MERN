const express = require('express')
const cors = require('cors')
const { db } = require('./db/db')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Listning to port:' ,PORT)
    })
}

server()