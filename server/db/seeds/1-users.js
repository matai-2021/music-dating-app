exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'ahmadanwar',
          usersecret: 'eda123',
          fullname: 'Ahmad Anwar',
          description: 'I am ranked as the first DJ on the first settlement on planet Mars.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          username: 'westharrison',
          usersecret: 'eda123',
          fullname: 'Westely Harrison',
          description: 'Love listening to lofi hip-hop radio streams on YouTube.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          username: 'dylantoomey',
          usersecret: 'eda123',
          fullname: 'Dylan Toomey',
          description: 'Always vibing out to Cardi B, Megan Thee Stallion, and Nicki Minaj. I like it like that.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 4,
          username: 'cartermunro',
          usersecret: 'eda123',
          fullname: 'Carter Bardell-Munro',
          description: 'Rock, hip-hop, and house is in my steady rotation.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 5,
          username: 'rodrigonovaes',
          usersecret: 'eda123',
          fullname: 'Rodrigo Novaes',
          description: 'Metal head to the bone. Black Sabbath all day!',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 6,
          username: 'kokoono',
          usersecret: 'eda123',
          fullname: 'Koko Ono',
          description: 'Frequent visitor to any and all opera events. Susan Boyle was a standout.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 7,
          username: 'sujicho',
          usersecret: 'eda123',
          fullname: 'The Suj',
          description: 'K-pop is life.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 8,
          username: 'eleanorwoodhouse',
          usersecret: 'eda123',
          fullname: 'Eleanor Woodhouse',
          description: 'You\'ll find me at Charlie\'s bar signing karaoke and sipping on tequila. Carly Simon will always have a special place in my heart.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 9,
          username: 'joshlake',
          usersecret: 'eda123',
          fullname: 'Josh Lake',
          description: 'People keep dreaming of me playing the guitar, so I\'v decided to fulfil their dreams. Watch this space, new album dropping soon.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 10,
          username: 'ryanbosh',
          usersecret: 'eda123',
          fullname: 'Ryan Bosh',
          description: 'I\'m new here. ',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 11,
          username: 'jamespearce',
          usersecret: 'eda123',
          fullname: 'Schwimmy',
          description: 'Amateur DJ in the making. Love spinning some phat house bangers and even phatter yarns.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 12,
          username: 'kriswood',
          usersecret: 'eda123',
          fullname: 'Kris Wood',
          description: 'My beautiful kids got me into listening to metal and I don`t regret it. My partner says otherwise though...',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 13,
          username: 'kritikaanita',
          usersecret: 'eda123',
          fullname: 'Kritika Anita',
          description: 'I view music and dancing as a mean of expressing my self. Lil Nas X brings out the best of both in me.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 14,
          username: 'keisuketanaka',
          usersecret: 'eda123',
          fullname: 'Keisuke Tanaka',
          description: 'Cool. Ambient music would have to be a favourite. I also love to dance so anything that gets me moving.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 15,
          username: 'meliwaigant',
          usersecret: 'eda123',
          fullname: 'Meli Waigant',
          description: 'You\'ll find me drinking my mate and listening to cumbia.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 16,
          username: 'petervdvoorn',
          usersecret: 'eda123',
          fullname: 'Peter van der Voorn',
          description: 'The only music I have time for these days is Baby Shark.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 17,
          username: 'camferguson',
          usersecret: 'eda123',
          fullname: 'Cameron Ferguson',
          description: 'I love movie soundtracks. I can\'t overstate that enough. Movie soundtracks are just so good. John Williams? Wow.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 18,
          username: 'zacchoi',
          usersecret: 'eda123',
          fullname: 'Zac Choi',
          description: 'I\'m a punk rocker at heart. Love yelling out my inner angst.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 19,
          username: 'donsmith',
          usersecret: 'eda123',
          fullname: 'Don Smith',
          description: 'Love playing around with my gadgets at home making electronic music.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 20,
          username: 'pruesingh',
          usersecret: 'eda123',
          fullname: 'Prue Singh',
          description: 'Love spinning up my record player and putting on some Bob Marley, PJ Harvey, and Cocteau Twins.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 21,
          username: 'lachemelvin',
          usersecret: 'eda123',
          fullname: 'Laché Melvin',
          description: 'Just out here trying to expand my musical horizons. Give me all your recommendations.',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 22,
          username: 'karelfourie',
          usersecret: 'eda123',
          fullname: 'Karel Fourie',
          description: 'Synth-wave and India sitar music are my bread and butter.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 23,
          username: 'carolynstott',
          usersecret: 'eda123',
          fullname: 'Carolyn Stott',
          description: 'I\'ve been listening to a lot of Six60 lately. So talented!',
          gender_id: 2,
          created_at: new Date(Date.now())
        },
        {
          id: 24,
          username: 'phoenixzerin',
          usersecret: 'eda123',
          fullname: 'Phoenix Zerin',
          description: 'You\'ll find me in the Top 50. I love anything that\'s catchy.',
          gender_id: 1,
          created_at: new Date(Date.now())
        },
        {
          id: 25,
          username: 'jaredpinfold',
          usersecret: 'eda123',
          fullname: 'Jared Pinfold',
          description: 'The music I like must contain the three H\'s. Hard, heavy, and ',
          gender_id: 2,
          created_at: new Date(Date.now())
        }
      ])
    })
}
