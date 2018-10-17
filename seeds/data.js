
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {
          id: 1, 
          name: 'Oscar',
          address: '23 Chocolate Ave'
        },
        {
          id: 2, 
          name: 'Jenny',
          address: '29 Talavera Tce'
        },
        {
          id: 3, 
          name: 'Charlie',
          address: '200 Bobby Calwell Rd'
        }
      ]);
    });
};
