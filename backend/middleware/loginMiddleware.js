const User = require('../models/loginModel');

const loginMiddleware = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const user = await User.findOne(normalizedEmail);

        if (!user) {
            console.log(`[LOGIN] User not found: ${normalizedEmail}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            console.log(`[LOGIN] Wrong password for: ${normalizedEmail}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateToken();

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                fullname: user.fullname
            }
        });

    } catch (err) {
        console.error('[SERVER ERROR] Login middleware crash:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = loginMiddleware;