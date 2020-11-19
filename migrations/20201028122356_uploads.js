
exports.up = function(knex) {
    return knex.schema
      .createTable('uploads', (table) => {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.string('description', 255).notNullable();
        table.string('imgUrl', 1024).notNullable();
        table.integer('likes').defaultTo(0);
        table.string('user', 255).notNullable();
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('uploads');
  };