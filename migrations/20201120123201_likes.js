
exports.up = function(knex) {
    return knex.schema
    .createTable('likes', (table) => {
        table.increments('id');
        table.string('post_id', 255).notNullable();
        table.integer('user_id');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('likes');
};