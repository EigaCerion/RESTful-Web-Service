const connectDB = require("../config/db");

// Mendapatkan daftar buku
exports.getBooks = async (req, res) => {
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute("SELECT * FROM books");
    if (rows.length < 1) {
        return res.status(200).json({ message: "No Books Avaliable" });
    }
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve books" });
  }
};

// Menambahkan buku baru
exports.addBook = async (req, res) => {
  const { title, author, publisher, year, stock } = req.body;
  try {
    const connection = await connectDB();
    await connection.execute(
      "INSERT INTO books (title, author, publisher, year, stock) VALUES (?, ?, ?, ?, ?)",
      [title, author, publisher, year, stock]
    );
    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
};

// Mendapatkan detail buku berdasarkan ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB();
    const [rows] = await connection.execute(
      "SELECT * FROM books WHERE id = ?",
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve book" });
  }
};

// Memperbarui buku berdasarkan ID
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, publisher, year, stock } = req.body;
  try {
    const connection = await connectDB();
    const [result] = await connection.execute(
      "UPDATE books SET title = ?, author = ?, publisher = ?, year = ?, stock = ? WHERE id = ?",
      [title, author, publisher, year, stock, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Menghapus buku berdasarkan ID
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB();
    await connection.execute("DELETE FROM books WHERE id = ?", [id]);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
