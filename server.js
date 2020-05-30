const express = require('express')
require('./config/db')
const apartmentRouter = require('./routes/apartments')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(apartmentRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Apartement API')
})

app.listen(port, (e) => {
    if (e) {
        return console.log(`There is something error on your server ${e}`)
    }
        console.log(`Server is up on port ${port}`)
})