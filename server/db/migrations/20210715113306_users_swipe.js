exports.up = function (knex) {
  return knex.schema.createTable('users_swipe', (table) => {
    table.increments('id').primary()
    table.integer('sender_id').references('users.id')
    table.integer('receiver_id').references('users.id')
    table.boolean('is_match')
    table.timestamp('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_swipe')
}
