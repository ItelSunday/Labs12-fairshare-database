// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './labsTask.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    }
  }
};
