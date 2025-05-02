const User = require("../Models/User");
const catchAsync = require("../Utils/CatchAsync");

// Get all users
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ status: "success", data: users });
});

// Get a user by ID
exports.getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({ status: "success", data: user });
});

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      FullName: user.FullName,
      email: user.email,
      phone: user.phone,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};

// Update User Profile
exports.updateUser = async (req, res) => {
  const { FullName, phone } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { FullName, phone },
      { new: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        FullName: user.FullName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
};

// Change User Password
exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error changing password" });
  }
};

// Delete User Account
exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting account" });
  }
};
