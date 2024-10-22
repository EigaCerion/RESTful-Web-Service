const express = require('express');
const { 
    borrowBook, 
    returnBook 
} = require('../controllers/borrowController');

const router = express.Router();

router.post('/', borrowBook); // Meminjam buku
router.put('/return/:id', returnBook); // Mengembalikan buku berdasarkan ID peminjaman

module.exports = router;
