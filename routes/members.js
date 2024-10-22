const express = require('express');
const { 
    addMember, 
    getMembers, 
    getMemberById, 
    updateMember, 
    deleteMember 
} = require('../controllers/memberController');

const router = express.Router();

router.post('/', addMember); // Menambahkan anggota
router.get('/', getMembers); // Mendapatkan daftar anggota
router.get('/:id', getMemberById); // Mendapatkan anggota berdasarkan ID
router.put('/:id', updateMember);
router.delete('/:id', deleteMember); // Menghapus anggota berdasarkan ID

module.exports = router;
