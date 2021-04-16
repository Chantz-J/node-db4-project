exports.seed = function(knex, Promise){
    return knex('steps').insert([
        {step_number: 1, step_instructions: "Some instructions", recipe_id: 1}
    ])
}