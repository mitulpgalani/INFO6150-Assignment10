const companyController = require('../controllers/companyController');
const { upload } = require('../services/userService');

const express = require('express');
const router = express.Router();

router.post('/createCompany', upload.single('image'), companyController.createCompany);
router.get('/getAllCompanies', companyController.getAllCompanies);

module.exports = router;