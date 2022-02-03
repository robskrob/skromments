export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'development_skromments',
      user: 'robskrob',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
