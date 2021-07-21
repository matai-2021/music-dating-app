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
          image_url: 'https://avatars.githubusercontent.com/u/7552088?s=400&u=9f72eb888bd6ce0d18e8b4ebfcf52ea075e3d3ef&v=4',
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
          description: 'One good thing about music, when it hits you, you feel no pain',
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
          image_url: 'https://ca.slack-edge.com/T02SQPVAC-U01KHB6BVHU-f7d6ded39c48-512',
          created_at: new Date(Date.now())
        },
        {
          id: 26,
          username: 'nellanoyer',
          hash: hash,
          fullname: 'Nella Noyer',
          description: 'Just looking to form a indie-rock band. Let me know if you\'re interested.',
          gender_id: 3,
          image_url: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg',
          created_at: new Date(Date.now())
        },
        {
          id: 27,
          username: 'thedude',
          hash: hash,
          fullname: 'The Dude',
          description: 'I\'ve got two spare tickets to the Guns & Roses show next week. Anyone interested?',
          gender_id: 1,
          image_url: 'https://media.gq-magazine.co.uk/photos/5d13a04bb744d364a425653b/master/pass/The-Big-Lebowski-hp-GQ-25Feb16_rex_b.jpg',
          created_at: new Date(Date.now())
        },
        {
          id: 28,
          username: 'barackobama',
          hash: hash,
          fullname: 'Barack Obama',
          description: 'Can we agree that hip-hop is the best genre? Yes we can.',
          gender_id: 1,
          image_url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg',
          created_at: new Date(Date.now())
        },
        {
          id: 29,
          username: 'jacindaardern',
          hash: hash,
          fullname: 'Aunty Cindy',
          description: 'I\'m tired of listening to Clarke\'s djing. Please send me your recommendations.',
          gender_id: 2,
          image_url: 'https://www.beehive.govt.nz/sites/default/files/styles/portrait_image/public/2020-11/j-ardern.jpg?itok=3SoPJ2Dj',
          created_at: new Date(Date.now())
        },
        {
          id: 30,
          username: 'oprahwinfrey',
          hash: hash,
          fullname: 'Oprah Winfrey',
          description: 'You get my recommendations! You get my my recommendations! You all get my recommendations!',
          gender_id: 2,
          image_url: 'https://www.biography.com/.image/t_share/MTY2NTIzMDQzOTIzODk1NTM4/oprah-photo-by-vera-anderson_wireimage.jpg',
          created_at: new Date(Date.now())
        },
        {
          id: 31,
          username: 'jonsnow',
          hash: hash,
          fullname: 'Jon Snow',
          description: 'Looking for a bassist to join my band, The Brothers of the Night\'s Watch.',
          gender_id: 1,
          image_url: 'https://s1.r29static.com/bin/entry/e47/0,3,2000,1500/x/1801540/image.png',
          created_at: new Date(Date.now())
        },
        {
          id: 32,
          username: 'gandalf',
          hash: hash,
          fullname: 'Gandalf',
          description: 'If anyone wants to smoke some pipeweed and listen to classical Celtic folk music, I\'m your wizard.',
          gender_id: 1,
          image_url: 'https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fit/w_936%2Ch_733%2Cal_c/file.png',
          created_at: new Date(Date.now())
        },
        {
          id: 33,
          username: 'forrestgump',
          hash: hash,
          fullname: 'Forrest Gump',
          description: 'Life is like a playlist on shuffle. You never know what\'s going to play next.',
          gender_id: 1,
          image_url: 'https://www.indiewire.com/wp-content/uploads/2020/09/forrest-gump.png?w=655',
          created_at: new Date(Date.now())
        },
        {
          id: 34,
          username: 'billmurray',
          hash: hash,
          fullname: 'Bill Murray',
          description: 'I\'m making a career shift from acting to music. Need all the tips I can get.',
          gender_id: 1,
          image_url: 'https://junkee.com/wp-content/uploads/2015/10/murray1.jpg',
          created_at: new Date(Date.now())
        },
        {
          id: 35,
          username: 'beyonce',
          hash: hash,
          fullname: 'Beyoncé',
          description: 'Don\'t really know why I\'m here. I\'m already Queen B.',
          gender_id: 2,
          image_url: 'https://pyxis.nymag.com/v1/imgs/6c0/570/056961772f9239c7ad26e784b020e410ae-beyonce.rsquare.w1200.jpg',
          created_at: new Date(Date.now())
        }
      ])
    })
}
