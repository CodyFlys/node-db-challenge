
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {completed: 1, project_id: 1, description: 'Make a robot thingy', notes: 'Do not kill self'},
        {completed: 1, project_id: 2, description: 'Make a can', notes: 'Do not drop'},
        {completed: 0, project_id: 3, description: 'Make a flower', notes: 'Do not destroy'}
      ]);
    });
};
