
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', tbl => {
      tbl.increment();
      tbl.string('taskName', 128).notNullable()
      tbl.text('description');
      tbl.boolean('complete');
      tbl.string('comments');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('task');
};
