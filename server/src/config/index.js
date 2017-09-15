module.exports = {
  db: {
    database: 'tracker',
    user: 'craftsmon',
    password: 'craftsmon',
    options: {
      host: 'localhost',
      dialect: 'postgres'
    }
  },
  authentication: {
    jwtSecret: 'secret'
  }
}
