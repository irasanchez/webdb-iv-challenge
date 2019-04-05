exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique("uq_dish_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
