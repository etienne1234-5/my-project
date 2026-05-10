const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../config/db');

class User {
    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        // Ensure password is a string (fixes Buffer issues)
        this.password = data.password ? data.password.toString() : null;
        this.fullname = data.fullname;
    }

    async comparePassword(candidatePassword) {
        if (!this.password) {
            console.error('[DB DEBUG] No password found in user object');
            return false;
        }
        
        // Log to terminal to verify what we are comparing
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        console.log(`[AUTH DEBUG] Password Match Result: ${isMatch}`);
        return isMatch;
    }

    generateToken() {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is missing in .env file');
        }
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    static async findOne(email) {
        try {
            // Using promise-based query
            const [rows] = await connection.query(
                'SELECT * FROM users WHERE LOWER(TRIM(email)) = ? LIMIT 1', 
                [email.toLowerCase().trim()]
            );

            if (rows.length > 0) {
                return new User(rows[0]);
            }
            return null;
        } catch (err) {
            console.error('[DB ERROR] findOne failed:', err);
            throw err;
        }
    }
}

module.exports = User;