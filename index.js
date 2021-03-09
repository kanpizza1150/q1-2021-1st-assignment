const express = require('express')

const app = express()
const main = require('./routes/main')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', main)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
