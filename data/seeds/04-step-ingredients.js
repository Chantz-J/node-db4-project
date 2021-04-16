exports.seed = function(knex, Promise){
    return knex('step_ingredients').insert([
        {step_id: 1, ingredient_id: 1, quantity: 20}
    ])
}