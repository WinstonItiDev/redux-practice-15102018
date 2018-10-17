
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cats', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cats')
};
