const express = require('express')
const helmet = require('helmet')

//ROUTES
const RecipeRouter = require('./router')


const server = express()
server.use(helmet())
server.use(express.json())

server.use('/api/recipes', RecipeRouter)



server.get('/', (req, res) => {
    res.status(200).json('Recipe 🧆🥩 server (node db4 challenge) up and running! Head over to /api to get started!')
})
server.get('/api', (req, res) => {
    res.status(200).json(`Welcome to the Recipe API 🌭! No endpoints yet...`)
})

module.exports = server