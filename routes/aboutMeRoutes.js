const express = require('express');
const AboutMe = require('../models/AboutMeModel');

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const aboutMe = await AboutMe.find();
            res.status(200).json({
                status: 'success',
                data: aboutMe
            });
        } catch(err) {
            res.status(500).json({
                status: 'failed',
                message: err
            })
        }
    });

module.exports = router;