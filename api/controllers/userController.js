const userServices = require('../services/userService');
const User = require('../models/user');
const bcrypt = require('bcrypt');



const createUser = async (req, res) => {
    const { fullName, email, password, userType } = req.body;
    const validationErrors = userServices.validateInput(email, fullName, password);
    if (Object.keys(validationErrors).length) {
        return res.status(400).json({ errors: validationErrors });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const user = new User({
            fullName,
            email,
            password,
            userType
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

const editUser = async (req, res) => {
    const { email, fullName, password } = req.body;
    const validationErrors = userServices.validateInput(email, fullName, password);
    if (Object.keys(validationErrors).length) {
        return res.status(400).json({ errors: validationErrors });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.fullName = fullName || user.fullName;
        if (password) user.password = password;
        await user.save();
        res.status(200).json({ message: 'User updated successfully', user: { id: user._id, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOneAndDelete({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'fullName email userType');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user: { type: user.userType, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

const imageUpload = async (req, res) => {
    const { name } = req.body;
    try {
        const existingCompany = await Company.findOne({ name });
        if (existingCompany) {
            return res.status(409).json({ message: 'Company already exists' });
        }
        const company = new Company({
            name,
            imagePath: `images/${req.file.filename}`,
        });
        await company.save();
        res.status(201).json({ message: 'Company Added' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

module.exports = {
    createUser,
    editUser,
    deleteUser,
    getAllUsers,
    userLogin,
    imageUpload
};