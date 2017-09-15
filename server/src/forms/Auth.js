const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async login (req, res) {
    try {
      const {email, password} = req.body

      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({ error: 'The login credentials were incorrect' })
      }

      const isValidPassword = await user.comparePassword(password)
      if (!isValidPassword)
        return res.status(403).send({ error: 'Username or password you provided is incorrect'})

      res.status(200).send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    }
    catch (err) {
      res.status(500).send(
        { error: err }
      )
    }
  },
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    }
    catch (err) {
      res.status(400).send(
        {error:'Email account is already in use'}
      )
    }
  }
}
