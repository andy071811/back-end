const express = require('express');
const WorkExperience = require('../models/WorkExperienceModel');

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const workExperience = await WorkExperience.find();
            res.status(200).json({
                status: 'success',
                data: workExperience
            });
        } catch(err) {
            res.status(500).json({
                status: 'failed',
                message: err
            })
        }
    });

module.exports = router;