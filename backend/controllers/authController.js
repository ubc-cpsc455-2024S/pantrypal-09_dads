const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// User Login Controller
// Note: Followed Express Auth Tutorial https://www.youtube.com/@NetNinja
// ============================================================================
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a jwt
    const token = createToken(user._id);

    res.status(200).json({ email, token, name: user.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User Signup Controller
// Note: Followed Express Auth Tutorial https://www.youtube.com/@NetNinja
// ============================================================================
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    
    // Create a jwt
    const token = createToken(user._id);

    res.status(200).json({ email, token, name: user.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
