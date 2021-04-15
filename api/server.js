const express = require('express')
const helmet = require('helmet')

//ROUTES


const server = express()
server.use(helmet())
server.use(express.json())



server.get('/', (req, res) => {
    res.status(200).json('Recipe 🧆🥩 server (node db4 challenge) up and running!')
})
server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the Recipe API 🌭! No endpoints yet...`)
})

module.exports = server