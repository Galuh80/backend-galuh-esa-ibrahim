const bcrypt = require('bcryptjs');
const { generateAccessToken, addToBlacklist } = require('../configurations/middleware');
const User = require('../models/User');

const registerUser = async (req, res) => {
    const { username, password, role_id } = req.body;
    
    try {
        const existingUser = await User.findByUsername(username);
        
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }
  
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const userId = await User.create(username, hashedPassword, role_id);
  
        const newUser = await User.findByUsername(username);
  
        const accessToken = await generateAccessToken(newUser);
  
        res.status(200).json({ accessToken });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
  };

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
    
        const accessToken = generateAccessToken({ id: user.id, role_id: user.role_id });
        res.json({ accessToken });
        } catch (error) {
        res.status(500).json({ error: 'Failed to log in' });
    }
};

const logoutUser = (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    
    addToBlacklist(token);
    res.sendStatus(204); 
};

module.exports = { registerUser, loginUser, logoutUser };
