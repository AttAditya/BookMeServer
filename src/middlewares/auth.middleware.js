const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) {
        res.status(401);
        res.json({ message: 'Token is required' });
        return;
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            res.status(401);
            res.json({ message: 'Invalid token' });
            return;
        }

        req.user = user;
        next();
    });
}

module.exports = authMiddleware;