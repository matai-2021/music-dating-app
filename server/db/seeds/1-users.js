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
        },
        {
          id: 5,
          username: 'rodrigo',
          usersecret: 'eda123',
          fullname: 'Rodrigo',
          description: 'Metal head to the bone',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 6,
          username: 'koko',
          usersecret: 'eda123',
          fullname: 'Koko',
          description: 'Frequent visitor to any and all opera events.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 7,
          username: 'sujie',
          usersecret: 'eda123',
          fullname: 'The Suj',
          description: 'K-pop is life',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 8,
          username: 'eleanor',
          usersecret: 'eda123',
          fullname: 'Eleanor',
          description: '10 years of playing the Piano and a big fan of Ketty Perry',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 9,
          username: 'josh',
          usersecret: 'eda123',
          fullname: 'Josh',
          description: 'People keep dreaming of me playing the guitar, so I\'v decided to fulfil their dreams',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 10,
          username: 'rayan',
          usersecret: 'eda123',
          fullname: 'Rayan',
          description: 'I\'m new here',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 11,
          username: 'james',
          usersecret: 'eda123',
          fullname: 'Schwimmy',
          description: 'A philosopher and thinker who is trying to find answers to difficult questions',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 12,
          username: 'kris',
          usersecret: 'eda123',
          fullname: 'Kris',
          description: 'My beautiful kids got me into listening into Metal genre and I don`t regret it :P',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 13,
          username: 'kritika',
          usersecret: 'eda123',
          fullname: 'Kritika',
          description: 'I view music and dancing as a mean of expressing my self',
          gender_id: 2,
          created_at: new Date(Date.now())
        }

      ])
    })
}
