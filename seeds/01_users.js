exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'vale', email: 'vale@gmail.com', password: '$2a$10$QEgBW3cwXGIH896oyoi3.e68K3lC6WBAf/0uE2su0VqQZNhoeC0mC', role:'admin' },
        { name: 'anne', email: 'anne@gmail.com', password: '$2a$10$8SS1zAL9N29ub9NxptvenOk.otmQMgnuQpiwu7N6o0wFg/tnCMvM2', role:'user' },
        { name: 'zubieta', email: 'zubieta@gmail.com', password: '$2a$10$MqeV.dYbdVHxAHICHh7NwOxLscjDdQ7YmbVWmoRRPFpUj2ByOjaDS', role:'user' },
      ]);
    });
};