const express = require("express");
const User = require("../Models/UserModel");
const router = express.Router();
const { signup } = require("../Controllers/AuthController");

router.post("/signup", signup);

router.post("/api/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Research
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error); // Log l'erreur pour débogage
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
