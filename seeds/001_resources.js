exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Test Name 1", description: 'Test Description 1'},
        {name: "Test Name 2", description: 'Test Description 2'},
        {name: "Test Name 3", description: 'Test Description 3'},
        {name: "Test Name 4", description: 'Test Description 4'}
      ]);
    });
};