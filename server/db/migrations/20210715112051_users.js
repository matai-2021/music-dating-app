exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('fullname')
    table.string('username')
    table.binary('hash')
    table.string('description')
    table.string('gender_id').references('genders.id')
    table.timestamp('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
