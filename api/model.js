const db = require('../data/db.config')

module.exports = {
    getRecipes(){
        return db('recipes as r')
        .leftJoin('steps as s', 's.recipe_id', 's.step_instructions')
        .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 's.step_instructions')
    },

}