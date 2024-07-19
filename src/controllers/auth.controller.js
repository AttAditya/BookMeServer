const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    let user = req.body;

    if (!user.name) {
        res.status(400);
        res.json({ message: 'Name is required' });
        return;
    }

    if (!user.email) {
        res.status(400);
        res.json({ message: 'Email is required' });
        return;
    }

    if (!user.password) {
        res.status(400);
        res.json({ message: 'Password is required' });
        return;
    }

    let existingUser = await userModel.findOne({ email: user.email });
    if (existingUser) {
        res.status(400);
        res.json({ message: 'User already exists' });
        return;
    }

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    try {
        user = await userModel.create(user);
        res.status(201);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
        return;
    }

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    user = user.toObject();
    delete user.password;

    res.json({
        user: user,
        token: token
    });
}

async function login(req, res) {
    let { email, password } = req.body;

    if (!email) {
        res.status(400);
        res.json({ message: 'Email is required' });
        return;
    }

    if (!password) {
        res.status(400);
        res.json({ message: 'Password is required' });
        return;
    }

    let user = await userModel.findOne({ email: email });

    if (!user) {
        res.status(401);
        res.json({ message: 'Invalid email or password' });
        return;
    }

    let validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        res.status(401);
        res.json({ message: 'Invalid email or password' });
        return;
    }

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    user = user.toObject();
    delete user.password;

    res.json({
        user: user,
        token: token
    });
}

module.exports = {
    register,
    login
};