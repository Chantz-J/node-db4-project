const Router = require('express').Router()
const Recipes = require('./model')

Router.get('/', (req, res, next) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(next)
})


module.exports = Router

