const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth"); // Auth routes
const bookRoutes = require('./routes/books'); // Tambahkan route untuk buku
const memberRoutes = require('./routes/members'); // Tambahkan route untuk anggota
const borrowRoutes = require('./routes/borrow'); // Tambahkan route untuk peminjaman
const { verifyToken } = require("./middlewares/authMiddleware"); // JWT authentication middleware
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json()); // To parse JSON bodies

// Route sederhana untuk root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Library Management API");
});

// Auth routes (Register and Login)
app.use("/api/auth", authRoutes);

// Protected Routes (require JWT authentication)
app.use("/api/books", verifyToken, bookRoutes);
app.use("/api/members", verifyToken, memberRoutes);
app.use("/api/borrow", verifyToken, borrowRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
