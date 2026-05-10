//register user to db by using email and password and fullname
const bcrypt = require('bcrypt');
const connection = require('../config/db');
//create model that insert data and encrypted password
const registerModel = async (req, res) => {
    const { email, password, fullname } = req.body;
    if (!email || !password || !fullname) {
        return res.status(400).json({ message: 'Email, fullname, and password are required' });
    }

    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : email;

    try {
        //check if email already exists
        const [rows] = await connection.promise().query('SELECT * FROM users WHERE LOWER(TRIM(email)) = ?', [normalizedEmail]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        //hash password
        const hash = await bcrypt.hash(password, 10);
        //insert data to db
        await connection.promise().query('INSERT INTO users (email, password, fullname) VALUES (?, ?, ?)', [normalizedEmail, hash, fullname]);
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
module.exports = registerModel;


