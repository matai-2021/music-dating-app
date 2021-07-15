exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'ahmad',
          usersecret: 'eda123',
          fullname: 'ahmad anwar',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          username: 'westley',
          usersecret: 'eda123',
          fullname: 'Westely',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          username: 'dylan',
          usersecret: 'eda123',
          fullname: 'Dylan Dylan',
          gender_id: 1,
          created_at: new Date(Date.now())
        }
      ])
    })
}
