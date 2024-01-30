const jwt = require('jsonwebtoken');
const secretKey = require('../config/server-confing');

class authController {
  async verify(req, res, next) {
    const tokenBerear = req.headers['authorization'];
    const token = tokenBerear.split(' ')[1];
    if (token) {
        const decode = await jwt.verify(token, secretKey);
        console.log('decode', decode);
        if (decode.user_email) {
            next();
        }
    }
  }
}

const AuthController = new authController();
module.exports = AuthController;
