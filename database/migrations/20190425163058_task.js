
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', tbl => {
      tbl.increment('id');
      tbl.string('taskName', 128).notNullable();
      tbl.text('description');
      tbl.boolean('completed');
      tbl.integer('completedBy');
      tbl.date('completedOn');
      tbl.integer('groupID').references('id').inTable('groups').onDelete("CASCADE").notNullable();
      tbl.string('comments');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('task');
};
