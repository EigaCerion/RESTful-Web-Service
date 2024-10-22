const connectDB = require('../config/db'); // Sesuaikan path jika diperlukan
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const connection = await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connection.execute(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );
    res.status(201).json({ msg: "User registered" });
  } catch (err) {
    console.error(err); // Log kesalahan untuk debugging
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const connection = await connectDB();
        const [rows] = await connection.execute("SELECT * FROM users WHERE username = ?", [username]);
        if (rows.length === 0) return res.status(400).json({ error: "User not found" });

        const user = rows[0]; // Ambil pengguna pertama
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ token });
    } catch (err) {
        console.error(err); // Log kesalahan untuk debugging
        res.status(500).json({ error: "Login failed" });
    }
};