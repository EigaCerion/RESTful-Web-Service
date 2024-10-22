const connectDB = require("../config/db");

// Menambahkan anggota baru
exports.addMember = async (req, res) => {
    const { name, email, address, phone } = req.body;
    try {
        const connection = await connectDB();
        await connection.execute(
            "INSERT INTO members (name, email, address, phone) VALUES (?, ?, ?, ?)",
            [name, email, address, phone]
        );
        res.status(201).json({ message: "Member added successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to add member" });
    }
};

// Mendapatkan daftar anggota
exports.getMembers = async (req, res) => {
    try {
        const connection = await connectDB();
        const [rows] = await connection.execute("SELECT * FROM members");
        if (rows.length < 1) {
            return res.status(200).json({ message: "No Member Avaliable" });
        }
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve members" });
    }
};

// Mendapatkan detail anggota berdasarkan ID
exports.getMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connectDB();
        const [rows] = await connection.execute("SELECT * FROM members WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Member not found" });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve member" });
    }
};

//Mengupdate data anggota berdasarkan ID
exports.updateMember = async (req, res) => {
    const { id } = req.params;
    const { name, email, address, phone } = req.body;

    try {
        const connection = await connectDB();
        const [result] = await connection.execute(
            "UPDATE members SET name = ?, email = ?, address = ?, phone = ? WHERE id = ?",
            [name, email, address, phone, id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.status(200).json({ message: "Member updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to update member" });
    }
};

// Menghapus anggota berdasarkan ID
exports.deleteMember = async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await connectDB();
        await connection.execute("DELETE FROM members WHERE id = ?", [id]);
        res.status(200).json({ message: "Member deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete member" });
    }
};
