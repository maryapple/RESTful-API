const express = require('express')
const app = new express()
const mongoose = require('mongoose')
require('dotenv/config')

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})

/* app.get('/posts', (req, res) => {
    res.send('We are on posts')
}) */


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('conncted to DB')
)

// Listening to the server
app.listen(3000)