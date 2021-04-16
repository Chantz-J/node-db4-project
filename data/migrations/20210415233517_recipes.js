
exports.up = function(knex) {
  return knex.schema
  //Recipes Table
  .createTable("recipes", table => {
    table.increments("recipe_id")
    table.string("recipe_name", 128)
    table.date("created_at")
})

//Ingredients table
.createTable("ingredients", table => {
    table.increments("ingredient_id")
    table.string("ingredient_name", 128)
})
//Steps Table
.createTable("steps", table => {
    table.increments('step_id')
    table.integer("step_number").notNullable()
    table.string("step_instructions", 128)
    table.integer("recipe_id")
    .unsigned()
    .notNullable()
    .references("recipe_id")
    .inTable("recipes")
    .onDelete("CASCADE")
  })
  //Step Ingredients Table
  .createTable("step_ingredients" , table => {
    table.increments('step_ingredient_id')

    table.integer('step_id')
    .unsigned()
    .notNullable()
    .references("step_id")
    .inTable("steps")
    .onDelete("CASCADE")

    table.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references("ingredient_id")
    .inTable("ingredients")
    .onDelete("CASCADE")

    table.integer("quantity").notNullable()
  })
  
  
  


}

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("step_ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
}
