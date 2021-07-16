exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_swipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_swipe').insert([
        {
          id: 1,
          sender_id: 1,
          receiver_id: 2,
          is_match: true,
          created_at: new Date(Date.now())
        },
        {
          id: 2,
          sender_id: 2,
          receiver_id: 1,
          is_match: true,
          created_at: new Date(Date.now())
        },
        {
          id: 3,
          sender_id: 1,
          receiver_id: 3,
          is_match: true,
          created_at: new Date(Date.now())
        },
        {
          id: 4,
          sender_id: 1,
          receiver_id: 4,
          is_match: false,
          created_at: new Date(Date.now())
        },
        {
          id: 5,
          sender_id: 4,
          receiver_id: 1,
          is_match: true,
          created_at: new Date(Date.now())
        },
        {
          id: 6,
          sender_id: 4,
          receiver_id: 3,
          is_match: true,
          created_at: new Date(Date.now())
        },
        {
          id: 7,
          sender_id: 3,
          receiver_id: 4,
          is_match: true,
          created_at: new Date(Date.now())
        }

      ])
    })
}
