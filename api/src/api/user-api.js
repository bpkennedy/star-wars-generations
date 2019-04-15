import { User } from '../dao/user-dao'
import Helper from '../authHelper'

export async function userCreateHandler(request, h) {
  try {
    const newUser = await User.query().insert({
      username: request.payload.email,
      display_name: request.payload.displayName,
      password: Helper.hashPassword(request.payload.password),
      admin: request.payload.admin,
    });
    const token = Helper.generateToken(newUser);
    return h.response({token}).code(201)
  } catch(error) {
    if (error.routine === '_bt_check_unique') {
      return h.response({
        code: error.constraint === 'users_username_unique' ? 1 : 2,
        error: error.constraint === 'users_username_unique' ? 'Email is taken' : 'Display Name is taken'
      }).code(400)
    }
    return h.response({error}).code(400)
  }
}

export async function userLoginHandler(request, h) {
  try {
    const rows = await User.query().where('username', request.payload.email)
    if (!rows[0]) {
      return h.response({error: 'The credentials you provided are incorrect'}).code(400)
    }
    if(!Helper.comparePassword(rows[0].password, request.payload.password)) {
      return h.response({error: 'The credentials you provided are incorrect'}).code(400)
    }
    const token = Helper.generateToken(rows[0]);
    return h.response({token}).code(200)
  } catch(error) {
    return h.response({error}).code(400)
  }
}
