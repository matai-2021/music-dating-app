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
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          username: 'westley',
          usersecret: 'eda123',
          fullname: 'Westely',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          username: 'dylan',
          usersecret: 'eda123',
          fullname: 'Dylan Dylan',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 4,
          username: 'carter',
          usersecret: 'eda123',
          fullname: 'Carter',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        }
      ])
    })
}
