const express = require('express');
const ProjectLink = require('../Models/ProjectLinkModel');

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        try {
            const projectLink = await ProjectLink.find();
            res.status(200).json({
                status: 'success',
                data: projectLink
            });
        } catch(err) {
            res.status(500).json({
                status: 'failed',
                message: err
            })
        }
    });

module.exports = router;