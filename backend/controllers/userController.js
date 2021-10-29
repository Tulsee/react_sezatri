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

// login user => /api/v1/login

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password is enter by user or not
  if (!email || !password) {
    errors = 'Please enter email and password';
    return res.status(404).json(errors);
  }

  // finding user in database
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    errors = 'User not found';
    return res.status(404).json(errors);
  }
  // check if password is match or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    errors = 'Invalid Password';
    return res.status(404).json(errors);
  }
  sendToken(user, 200, res);
};
