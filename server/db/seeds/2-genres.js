exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        { id: 1, name: 'Pop' },
        { id: 2, name: 'Country' },
        { id: 3, name: 'Electronic' },
        { id: 5, name: 'Dance' },
        { id: 6, name: 'Rock' },
        { id: 7, name: 'Hip hop' },
        { id: 8, name: 'Ambient' },
        { id: 9, name: 'Blues' },
        { id: 10, name: 'Classical' }
      ])
    })
}
