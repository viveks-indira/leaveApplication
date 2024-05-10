// middleware/authentication.js

import jwt from 'jsonwebtoken';

// Middleware function to authenticate user
export const authenticateUser = (req, res, next) => {
    // Get token from request header
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    // If no token provided, send 401 Unauthorized response
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, 'your-secret-key');

        // Attach user information to request object
        req.user = decoded;

        // Move to next middleware
        next();
    } catch (error) {
        // Token is invalid, send 403 Forbidden response
        return res.status(403).json({ message: 'Invalid token' });
    }
};

// Middleware function to authorize user based on roles
export const authorizeRole = (roles) => {
    return (req, res, next) => {
        // Check if user's role is allowed to access the route
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};
