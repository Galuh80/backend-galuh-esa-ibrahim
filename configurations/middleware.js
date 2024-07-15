const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const blacklist = new Set();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    if (blacklist.has(token)) return res.sendStatus(403);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const authorizeRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role_id)) {
            return res.status(403).json({ error: 'Unauthorized Access' });
        }
        next();
    };
};

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, role_id: user.role_id }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: '1h' }
    );
};

const addToBlacklist = (token) => {
    blacklist.add(token);
};

module.exports = { authenticateToken, authorizeRole, generateAccessToken, addToBlacklist };
