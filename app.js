const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// Middleware
app.use(bodyParser.json())

// import routes
const postsRoute = require('./routes/posts')

// Middleware
app.use('/posts', postsRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('connected to DB')
)

// Listening to the server
app.listen(3000)
