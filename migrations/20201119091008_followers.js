
exports.up = function(knex) {
    return knex.schema
      .createTable('followers', (table) => {
        table.increments('id');
        table.string('follower', 255).notNullable();
        table.string('followed', 255).notNullable();
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('followers');
  };