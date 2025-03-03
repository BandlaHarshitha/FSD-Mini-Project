// server/middleware/role.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const checkRole = (roles) => {
    return (req, res, next) => {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ msg: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, config.jwtSecret);
            req.user = decoded.user;

            // Check if user's role is in the allowed roles
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ msg: 'Forbidden: You do not have access to this resource' });
            }

            next(); // Proceed to the next middleware or route
        } catch (err) {
            console.error(err.message);
            res.status(401).json({ msg: 'Token is not valid' });
        }
    };
};

module.exports = checkRole;
