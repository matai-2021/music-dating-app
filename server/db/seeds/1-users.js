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
          fullname: 'Ahmad Anwar',
          description: 'I am ranked as the first DJ on the first settlement on planet Mars.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01TLETH2P3-191de1acb1aa-512',
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          username: 'westharrison',
          hash: hash,
          fullname: 'Westely Harrison',
          description: 'Love listening to lofi hip-hop radio streams on YouTube.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01RYLMBMEX-e6c121345baa-512',
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          username: 'dylantoomey',
          hash: hash,
          fullname: 'Dylan Toomey',
          description: 'Always vibing out to Cardi B, Megan Thee Stallion, and Nicki Minaj. I like it like that.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01TELWDVUN-506adbf85b8f-512',
          created_at: new Date(Date.now())
        },
        {
          id: 4,
          username: 'cartermunro',
          hash: hash,
          fullname: 'Carter Bardell-Munro',
          description: 'Rock, hip-hop, and house is in my steady rotation.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01T9CRRGCW-8d7034c1905b-512',
          created_at: new Date(Date.now())
        },
        {
          id: 5,
          username: 'rodrigonovaes',
          hash: hash,
          fullname: 'Rodrigo Novaes',
          description: 'Metal head to the bone. Black Sabbath all day!',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01TC395W9E-c5649d0d1414-512',
          created_at: new Date(Date.now())
        },
        {
          id: 6,
          username: 'kokoono',
          hash: hash,
          fullname: 'Koko Ono',
          description: 'Frequent visitor to any and all opera events. Susan Boyle was a standout.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01TXS15FQB-c98eb2280b71-512',
          created_at: new Date(Date.now())
        },
        {
          id: 7,
          username: 'sujicho',
          hash: hash,
          fullname: 'The Suj',
          description: 'K-pop is life.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01QJ0YCE5U-ec22b49e38ce-512',
          created_at: new Date(Date.now())
        },
        {
          id: 8,
          username: 'eleanorwoodhouse',
          hash: hash,
          fullname: 'Eleanor Woodhouse',
          description: 'You\'ll find me at Charlie\'s bar signing karaoke and sipping on tequila. Carly Simon will always have a special place in my heart.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01U4G23G4U-3fb5e43f2264-512',
          created_at: new Date(Date.now())
        },
        {
          id: 9,
          username: 'joshlake',
          hash: hash,
          fullname: 'Josh Lake',
          description: 'People keep dreaming of me playing the guitar, so I\'v decided to fulfil their dreams. Watch this space, new album dropping soon.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01T94SM01H-2f39cf9f8969-512',
          created_at: new Date(Date.now())
        },
        {
          id: 10,
          username: 'ryanbosh',
          hash: hash,
          fullname: 'Ryan Bosh',
          description: 'Life of Pablo is the best Kanye West album. No doubt.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01SKDW8SCD-b8c8d295a08a-512',
          created_at: new Date(Date.now())
        },
        {
          id: 11,
          username: 'jamespearce',
          hash: hash,
          fullname: 'Schwimmy',
          description: 'Amateur DJ in the making. Love spinning some phat house bangers and even phatter yarns.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01UANTJWU9-5e24e7dd66c6-512',
          created_at: new Date(Date.now())
        },
        {
          id: 12,
          username: 'kriswood',
          hash: hash,
          fullname: 'Kris Wood',
          description: 'My beautiful kids got me into listening to metal and I don`t regret it. My partner says otherwise though...',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01P6FGHLHX-f2bdba29a96e-512',
          created_at: new Date(Date.now())
        },
        {
          id: 13,
          username: 'kritikaanita',
          hash: hash,
          fullname: 'Kritika Anita',
          description: 'I view music and dancing as a mean of expressing my self. Lil Nas X brings out the best of both in me.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01UC76B679-6c9b42c0fb9a-512',
          created_at: new Date(Date.now())
        },
        {
          id: 14,
          username: 'keisuketanaka',
          hash: hash,
          fullname: 'Keisuke Tanaka',
          description: 'Cool. Ambient music would have to be a favourite. I also love to dance so anything that gets me moving.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01LGV76QKZ-c4a5b4552e31-512',
          created_at: new Date(Date.now())
        },
        {
          id: 15,
          username: 'meliwaigant',
          hash: hash,
          fullname: 'Meli Waigant',
          description: 'You\'ll find me drinking my mate and listening to cumbia.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01NG1AETEJ-464e8fcfaf2c-512',
          created_at: new Date(Date.now())
        },
        {
          id: 16,
          username: 'petervdvoorn',
          hash: hash,
          fullname: 'Peter van der Voorn',
          description: 'The only music I have time for these days is Baby Shark.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01RTN3UD6F-34ce8f38dce1-512',
          created_at: new Date(Date.now())
        },
        {
          id: 17,
          username: 'camferguson',
          hash: hash,
          fullname: 'Cameron Ferguson',
          description: 'I love movie soundtracks. I can\'t overstate that enough. Movie soundtracks are just so good. John Williams? Wow.',
          gender_id: 1,
          image_url: '',
          created_at: new Date(Date.now())
        },
        {
          id: 18,
          username: 'zacchoi',
          hash: hash,
          fullname: 'Zac Choi',
          description: 'I\'m a punk rocker at heart. Love yelling out my inner angst.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01U77V79DE-24a252d149f1-512',
          created_at: new Date(Date.now())
        },
        {
          id: 19,
          username: 'donsmith',
          hash: hash,
          fullname: 'Don Smith',
          description: 'Love playing around with my gadgets at home making electronic music.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U0A30NRSB-gc6de6ae33d7-512',
          created_at: new Date(Date.now())
        },
        {
          id: 20,
          username: 'pruesingh',
          hash: hash,
          fullname: 'Prue Singh',
          description: 'Love spinning up my record player and putting on some Bob Marley, PJ Harvey, and Cocteau Twins.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U016XGX1W1M-677cc16cd78e-512',
          created_at: new Date(Date.now())
        },
        {
          id: 21,
          username: 'lachemelvin',
          hash: hash,
          fullname: 'Laché Melvin',
          description: 'Just out here trying to expand my musical horizons. Give me all your recommendations.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-UR5LFEL1Y-961b906b2b24-512',
          created_at: new Date(Date.now())
        },
        {
          id: 22,
          username: 'karelfourie',
          hash: hash,
          fullname: 'Karel Fourie',
          description: 'Synth-wave and India sitar music are my bread and butter.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-UST9SM33L-087fdee54463-512',
          created_at: new Date(Date.now())
        },
        {
          id: 23,
          username: 'carolynstott',
          hash: hash,
          fullname: 'Carolyn Stott',
          description: 'I\'ve been listening to a lot of Six60 lately. So talented!',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-UK6AQL0V8-253f2bd82ff7-512',
          created_at: new Date(Date.now())
        },
        {
          id: 24,
          username: 'phoenixzerin',
          hash: hash,
          fullname: 'Phoenix Zerin',
          description: 'You\'ll find me in the Top 50. I love anything that\'s catchy.',
          gender_id: 1,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-UFDJFNALB-g553fda85952-512',
          created_at: new Date(Date.now())
        },
        {
          id: 25,
          username: 'jaredpinfold',
          hash: hash,
          fullname: 'Jared Pinfold',
          description: 'The music I like must contain the three H\'s. Hard, heavy, and headbandingly good.',
          gender_id: 2,
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01UC76B679-6c9b42c0fb9a-512',
          created_at: new Date(Date.now())
        }
      ])
    })
}
