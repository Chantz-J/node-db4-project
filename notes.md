Install knex and sqllite 3
Run knex init to create knex file

in Knex object's development object set connection's filename value to point to database
set useNullAsDefault to true

then run command >>>> knex migrate:make <name-of-database-table-here>

after you make the table in the migration file run >>>>> knex migrate:latest 




SEEDS 
When making seeds first run >>>>> knex migrate:latest 
then run knex seed:make <01-example>
after you make some seeds run >>>>> knex seed:run