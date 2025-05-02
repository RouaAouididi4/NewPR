const User = require("../Models/User.js");
const catchAsync = require("./../Utils/catchAsync.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// User Signup (Registration)
exports.signup = catchAsync(async (req, res, next) => {
  const { FullName, email, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  // Create a new user without validating the required fields
  const user = await User.create({
    FullName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User created ✅",
    _id: user.id,
    FullName: user.FullName,
    email: user.email,
    phone: user.phone,
  });
});

// User Login (Authentication)
exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "YosraRoua", { expiresIn: "1h" });
  res.status(201).json({
    message: "Login successful",
    _id: user.id,
    FullName: user.FullName,
    email: user.email,
    phone: user.phone,
    token,
  });
});

// Get Current User
exports.getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    FullName: user.FullName,
    email: user.email,
    phone: user.phone,
  });
});
