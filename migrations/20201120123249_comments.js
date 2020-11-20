
exports.up = function(knex) {
    return knex.schema
    .createTable('comments', (table) => {
        table.increments('id');
        table.string('comment', 255).notNullable();
        table.integer('user_id');
        table.integer('upload_id');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('comments');
};
