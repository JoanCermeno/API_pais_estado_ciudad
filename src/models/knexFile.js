require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEV_HOST,
      port: process.env.DB_DEV_PORT,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASS,
      database: process.env.DB_DEV_NAME,
      timezone: '+00:00',
    },
  }
}

