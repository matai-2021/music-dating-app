exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_genres').insert([
        {
          id: 1,
          user_id: 2,
          genre_id: 5
        },
        {
          id: 2,
          user_id: 2,
          genre_id: 8
        }, {
          id: 3,
          user_id: 1,
          genre_id: 3
        }, {
          id: 4,
          user_id: 1,
          genre_id: 7
        }, {
          id: 5,
          user_id: 3,
          genre_id: 9
        }, {
          id: 6,
          user_id: 4,
          genre_id: 1
        },
        {
          id: 7,
          user_id: 4,
          genre_id: 7
        },
        {
          id: 8,
          user_id: 4,
          genre_id: 3
        }
      ])
    })
}
