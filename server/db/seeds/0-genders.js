exports.seed = function (knex) {
  return knex('genders').del()
    .then(function () {
      return knex('genders').insert([
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Non Binary/Other' }
      ])
    })
}
