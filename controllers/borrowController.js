const connectDB = require("../config/db");

// Meminjam buku
exports.borrowBook = async (req, res) => {
    const { memberId, bookId, borrowDate, returnDate } = req.body;
    try {
        const connection = await connectDB();
        await connection.execute(
            "INSERT INTO borrowings (memberId, bookId, borrowDate, returnDate) VALUES (?, ?, ?, ?)",
            [memberId, bookId, borrowDate, returnDate]
        );
        res.status(201).json({ message: "Book borrowed successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to borrow book" });
    }
};

// Mengembalikan buku berdasarkan ID peminjaman
exports.returnBook = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connectDB();
        await connection.execute("UPDATE borrowings SET returnDate = NOW() WHERE id = ?", [id]);
        res.status(200).json({ message: "Book returned successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to return book" });
    }
};
