exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Nico', email: 'nicolasabarra@hotmail.com', password: 'zyanyabb94', role:'admin' },
        { name: 'Anne', email: 'anne@hotmail.com', password: 'pandar0jo', role:'user' },
        { name: 'Zubieta', email: 'zubieta@hotmail.com', password: 'Zuperpr0gramador', role:'user' },
      ]);
    });
};