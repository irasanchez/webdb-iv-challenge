exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(tbl) {
    tbl.increments("id");
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
