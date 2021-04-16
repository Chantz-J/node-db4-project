exports.seed = function(knex, Promise){
    return knex('recipes').insert([
        {recipe_name: "Some recipe", created_at: Date.now()}
    ])
}