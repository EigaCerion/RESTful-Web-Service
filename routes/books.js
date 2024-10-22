const express = require('express');
const { 
    addBook,         // Perbaiki di sini
    getBooks, 
    getBookById, 
    updateBook,      // Jika belum ada, kamu perlu menambahkan fungsi ini di controller
    deleteBook 
} = require('../controllers/bookController'); // Pastikan path ke controller benar

const router = express.Router();

// Route untuk menambahkan buku
router.post('/', addBook); // Ganti dengan addBook

// Route untuk mendapatkan daftar buku
router.get('/', getBooks);

// Route untuk mendapatkan buku berdasarkan ID
router.get('/:id', getBookById);

// Route untuk mengupdate buku (jika sudah ada implementasi di controller)
router.put('/:id', updateBook); // Pastikan updateBook didefinisikan di controller

// Route untuk menghapus buku berdasarkan ID
router.delete('/:id', deleteBook);

module.exports = router;
