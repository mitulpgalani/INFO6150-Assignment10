const jobController = require('../controllers/jobsController');
const { upload } = require('../services/userService');

const express = require('express');
const router = express.Router();

router.post('/create/job', upload.none(), jobController.createJob);
router.get('/get/jobs', jobController.getAllJobs);

module.exports = router;