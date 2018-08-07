
exports.seed = function(knex, Promise) {
  return knex('coffee').del()
    .then(function () {
      return knex('coffee').insert([
        {name: 'Black and Tan', roaster: 'Ink', aroma: 3},
        {name: 'Holiday Roast', roaster: 'Starbucks', aroma: 9},
        {name: 'House Quake', roaster: 'Denver Coffee', aroma: 6}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE coffee_id_seq RESTART WITH 4;");
  });
};
