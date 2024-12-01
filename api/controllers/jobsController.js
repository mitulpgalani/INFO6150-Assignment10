const Job = require('../models/jobs');

const createJob = async (req, res) => {
    const { companyName, jobTitle, description, salary } = req.body;
    try {
        const job = new Job({
            companyName,
            jobTitle,
            description,
            salary
        });
        await job.save();
        res.status(201).json({ message: 'Job created successfully', job });
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error: error.message });
    }
};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find({}, 'companyName jobTitle description salary');
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving jobs', error: error.message });
    }
};

module.exports = { createJob, getAllJobs };