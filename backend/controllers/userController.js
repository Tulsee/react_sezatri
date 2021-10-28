const User = require('../models/User');
const sendToken = require('../utils/jwtToken');

//  register a user => /api/v1/register
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 200, res);
};
