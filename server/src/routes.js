const Auth = require('./forms/Auth')

module.exports = (app) => {
  app.post('/register', Auth.register)
}
