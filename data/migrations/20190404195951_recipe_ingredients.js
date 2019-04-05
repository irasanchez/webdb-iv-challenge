exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(tbl) {
    tbl
      .integer("dish_id")
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE");
    tbl.primary(["dish_id", "recipe_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
