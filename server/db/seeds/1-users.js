const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => generateHash('eda123'))
    .then((hash) => {
      return knex('users').insert([
        {
          id: 1,
          username: 'ahmadanwar',
          hash: hash,
          fullname: 'ahmad anwar',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          username: 'westharrison',
          hash: hash,
          fullname: 'Westely',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          username: 'dylantoomey',
          hash: hash,
          fullname: 'Dylan Dylan',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 4,
          username: 'cartermunro',
          hash: hash,
          fullname: 'Carter',
          description: 'I was ranked the first DJ on the first settlement on planet Mars',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 5,
          username: 'rodrigonovaes',
          hash: hash,
          fullname: 'Rodrigo',
          description: 'Metal head to the bone',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 6,
          username: 'kokoono',
          hash: hash,
          fullname: 'Koko',
          description: 'Frequent visitor to any and all opera events.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 7,
          username: 'sujicho',
          hash: hash,
          fullname: 'The Suj',
          description: 'K-pop is life',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 8,
          username: 'eleanorwoodhouse',
          hash: hash,
          fullname: 'Eleanor',
          description: '10 years of playing the Piano and a big fan of Ketty Perry',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 9,
          username: 'joshlake',
          hash: hash,
          fullname: 'Josh',
          description: 'People keep dreaming of me playing the guitar, so I\'v decided to fulfil their dreams',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 10,
          username: 'rayan',
          hash: hash,
          fullname: 'Rayan',
          description: 'I\'m new here',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 11,
          username: 'jamespearce',
          hash: hash,
          fullname: 'Schwimmy',
          description: 'A philosopher and thinker who is trying to find answers to difficult questions',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 12,
          username: 'kriswood',
          hash: hash,
          fullname: 'Kris',
          description: 'My beautiful kids got me into listening into Metal genre and I don`t regret it :P',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 13,
          username: 'kritikaanita',
          hash: hash,
          fullname: 'Kritika',
          description: 'I view music and dancing as a mean of expressing my self',
          gender_id: 2,
          created_at: new Date(Date.now())
        }

      ])
    })
}
