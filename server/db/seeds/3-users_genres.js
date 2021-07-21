exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_genres').insert([
        {
          id: 1,
          user_id: 2,
          genre_id: 5
        },
        {
          id: 2,
          user_id: 2,
          genre_id: 8
        }, {
          id: 3,
          user_id: 1,
          genre_id: 3
        }, {
          id: 4,
          user_id: 1,
          genre_id: 7
        }, {
          id: 5,
          user_id: 3,
          genre_id: 9
        }, {
          id: 6,
          user_id: 4,
          genre_id: 6
        },
        {
          id: 7,
          user_id: 4,
          genre_id: 7
        },
        {
          id: 8,
          user_id: 4,
          genre_id: 3
        },
        {
          id: 18,
          user_id: 6,
          genre_id: 11
        },
        {
          id: 19,
          user_id: 6,
          genre_id: 12
        },
        {
          id: 20,
          user_id: 7,
          genre_id: 3
        },
        {
          id: 21,
          user_id: 7,
          genre_id: 5
        },
        {
          id: 22,
          user_id: 8,
          genre_id: 14
        },
        {
          id: 23,
          user_id: 8,
          genre_id: 15
        }, {
          id: 24,
          user_id: 7,
          genre_id: 13
        }, {
          id: 25,
          user_id: 8,
          genre_id: 5
        }, {
          id: 26,
          user_id: 9,
          genre_id: 1
        },
        {
          id: 27,
          user_id: 9,
          genre_id: 2
        },
        {
          id: 28,
          user_id: 9,
          genre_id: 7
        },
        {
          id: 29,
          user_id: 9,
          genre_id: 6
        },
        {
          id: 31,
          user_id: 10,
          genre_id: 7
        },
        {
          id: 32,
          user_id: 10,
          genre_id: 16
        },
        {
          id: 33,
          user_id: 11,
          genre_id: 7
        },
        {
          id: 35,
          user_id: 12,
          genre_id: 7
        },
        {
          id: 36,
          user_id: 12,
          genre_id: 8
        },
        {
          id: 37,
          user_id: 13,
          genre_id: 11
        },
        {
          id: 38,
          user_id: 12,
          genre_id: 16
        },
        {
          id: 39,
          user_id: 12,
          genre_id: 1
        },
        {
          id: 40,
          user_id: 12,
          genre_id: 14
        },
        {
          id: 41,
          user_id: 14,
          genre_id: 8
        },
        {
          id: 42,
          user_id: 14,
          genre_id: 5
        },
        {
          id: 43,
          user_id: 14,
          genre_id: 1
        },
        {
          id: 44,
          user_id: 15,
          genre_id: 14
        },
        {
          id: 45,
          user_id: 15,
          genre_id: 15
        },
        {
          id: 46,
          user_id: 16,
          genre_id: 1
        },
        {
          id: 47,
          user_id: 16,
          genre_id: 11
        },
        {
          id: 48,
          user_id: 17,
          genre_id: 9
        },
        {
          id: 49,
          user_id: 17,
          genre_id: 12
        },
        {
          id: 50,
          user_id: 17,
          genre_id: 4
        },
        {
          id: 51,
          user_id: 18,
          genre_id: 6
        },
        {
          id: 52,
          user_id: 18,
          genre_id: 16
        },
        {
          id: 53,
          user_id: 18,
          genre_id: 3
        },
        {
          id: 54,
          user_id: 18,
          genre_id: 7
        },
        {
          id: 55,
          user_id: 19,
          genre_id: 3
        },
        {
          id: 56,
          user_id: 19,
          genre_id: 4
        },
        {
          id: 57,
          user_id: 19,
          genre_id: 5
        },
        {
          id: 58,
          user_id: 20,
          genre_id: 9
        },
        {
          id: 59,
          user_id: 20,
          genre_id: 16
        },
        {
          id: 60,
          user_id: 20,
          genre_id: 2
        },
        {
          id: 61,
          user_id: 21,
          genre_id: 1
        },
        {
          id: 62,
          user_id: 22,
          genre_id: 5
        },
        {
          id: 63,
          user_id: 22,
          genre_id: 13
        },
        {
          id: 64,
          user_id: 23,
          genre_id: 1
        },
        {
          id: 65,
          user_id: 23,
          genre_id: 6
        },
        {
          id: 66,
          user_id: 24,
          genre_id: 1
        },
        {
          id: 67,
          user_id: 24,
          genre_id: 11
        },
        {
          id: 68,
          user_id: 24,
          genre_id: 9
        },
        {
          id: 69,
          user_id: 25,
          genre_id: 6
        },
        {
          id: 70,
          user_id: 25,
          genre_id: 2
        },
        {
          id: 71,
          user_id: 25,
          genre_id: 16
        },
        {
          id: 72,
          user_id: 25,
          genre_id: 9
        },
        {
          id: 73,
          user_id: 26,
          genre_id: 14
        },
        {
          id: 73,
          user_id: 26,
          genre_id: 3
        },
        {
          id: 74,
          user_id: 26,
          genre_id: 11
        },
        {
          id: 75,
          user_id: 27,
          genre_id: 5
        },
        {
          id: 76,
          user_id: 27,
          genre_id: 13
        },
        {
          id: 77,
          user_id: 27,
          genre_id: 15
        },
        {
          id: 78,
          user_id: 28,
          genre_id: 7
        },
        {
          id: 79,
          user_id: 28,
          genre_id: 3
        },
        {
          id: 80,
          user_id: 28,
          genre_id: 11
        },
        {
          id: 81,
          user_id: 28,
          genre_id: 16
        },
        {
          id: 82,
          user_id: 29,
          genre_id: 1
        },
        {
          id: 83,
          user_id: 29,
          genre_id: 8
        },
        {
          id: 84,
          user_id: 29,
          genre_id: 6
        },
        {
          id: 85,
          user_id: 30,
          genre_id: 3
        },
        {
          id: 86,
          user_id: 30,
          genre_id: 12
        },
        {
          id: 87,
          user_id: 30,
          genre_id: 15
        },
        {
          id: 88,
          user_id: 30,
          genre_id: 5
        },
        {
          id: 89,
          user_id: 31,
          genre_id: 7
        },
        {
          id: 90,
          user_id: 31,
          genre_id: 13
        },
        {
          id: 91,
          user_id: 31,
          genre_id: 16
        },
        {
          id: 92,
          user_id: 31,
          genre_id: 4
        },
        {
          id: 93,
          user_id: 32,
          genre_id: 15
        },
        {
          id: 94,
          user_id: 32,
          genre_id: 8
        },
        {
          id: 95,
          user_id: 32,
          genre_id: 11
        },
        {
          id: 96,
          user_id: 32,
          genre_id: 2
        },
        {
          id: 97,
          user_id: 33,
          genre_id: 1
        },
        {
          id: 98,
          user_id: 33,
          genre_id: 9
        },
        {
          id: 99,
          user_id: 33,
          genre_id: 7
        },
        {
          id: 100,
          user_id: 34,
          genre_id: 7
        },
        {
          id: 101,
          user_id: 34,
          genre_id: 10
        },
        {
          id: 102,
          user_id: 34,
          genre_id: 12
        },
        {
          id: 103,
          user_id: 35,
          genre_id: 14
        },
        {
          id: 104,
          user_id: 35,
          genre_id: 1
        },
        {
          id: 105,
          user_id: 35,
          genre_id: 9
        },
        {
          id: 106,
          user_id: 35,
          genre_id: 13
        }
      ])
    })
}
