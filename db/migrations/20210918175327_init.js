exports.up = function (knex) {
  return knex.schema.createTable('comments', table => {
    table.increments()
    table.string('content')
    table.timestamps()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('comments')
}
