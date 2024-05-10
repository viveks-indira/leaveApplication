// lib/auth.js

import jwt from 'jsonwebtoken';

// Function to generate JWT token
export const generateToken = (user) => {
    return jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        'your-secret-key', // Replace with your actual secret key
        { expiresIn: '1m' } // Token expiration time
    );
};

// Function to verify JWT token
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
        return decoded;
    } catch (error) {
        return null; // Token verification failed
    }
};
