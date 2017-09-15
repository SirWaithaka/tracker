const Auth = require('./forms/Auth')
const AuthPolicy = require('./policies/AuthPolicy')

module.exports = (app) => {
  app.post('/register', AuthPolicy.register, Auth.register)
  app.post('/login', Auth.login)
}
