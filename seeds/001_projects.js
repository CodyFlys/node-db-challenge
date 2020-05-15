
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {completed: 1, name: 'Design IronMan', description: 'Make a robot thingy'},
        {completed: 0, name: 'Design a bucket', description: 'Make a round object'},
        {completed: 1, name: 'Design a car', description: 'Make a engine'}
      ]);
    });
};
