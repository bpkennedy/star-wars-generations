import { User } from './dao/user-dao'
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import { key } from './config'

export default {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword)
  },
  generateToken(user) {
    let scopes
    if (user.admin) {
      scopes = 'admin'
    }
    return jwt.sign({
        userId: user.id,
        username: user.username,
        scope: scopes
      }, key, { algorithm: 'HS256', expiresIn: '7d' })
  },
  async verifyToken(decodedToken) {
    const rows = await User.query().where('id', decodedToken.userId)
    if (rows[0] && rows[0].username === decodedToken.username) {
      return { isValid: true }
    }
    return { isValid: false }
  } 
}
