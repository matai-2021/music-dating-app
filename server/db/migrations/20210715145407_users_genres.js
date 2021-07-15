exports.up = function (knex) {
  return knex.schema.createTable('users_genres', (table) => {
    table.increments('id').primary()
    table.integer('genre_id').references('genres.id')
    table.integer('user_id').references('users.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_genres')
}
