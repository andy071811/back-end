const express = require('express');
const Qualification = require('../Models/QualificationModel');

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const qualification = await Qualification.find();
            res.status(200).json({
                status: 'success',
                data: qualification
            });
        } catch(err) {
            res.status(500).json({
                status: 'failed',
                message: err
            })
        }
    });

module.exports = router;