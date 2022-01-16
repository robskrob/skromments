exports.up = function (knex: any) {
  return knex.schema.createTable('comments', (table: any) => {
    table.increments()
    table.string('content')
    table.timestamps(true, true)
  })
}

exports.down = function (knex: any) {
  return knex.schema.dropTable('comments')
}
