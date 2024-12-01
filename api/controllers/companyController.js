
const Company = require('../models/companies');


const createCompany = async (req, res) => {
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

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find({}, 'name imagePath');
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

module.exports = {
    createCompany,
    getAllCompanies
};