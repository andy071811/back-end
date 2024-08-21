const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const app = express();
const aboutMeRouter = require('./routes/aboutMeRoutes');
const projectLinkRouter = require('./routes/projectLinkRoutes');
const qualificationRouter = require('./routes/qualificationRoutes');
const workExperienceRouter = require('./routes/workExperienceRoutes');

dotenv.config({ path: './config.env' });
app.use(cors());
app.use(bodyParser.json());

app.use('/api/homepage', aboutMeRouter);
app.use('/api/projectLinks', projectLinkRouter);
app.use('/api/qualifications', qualificationRouter);
app.use('/api/workExperience', workExperienceRouter);



 const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS
    }
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `'Responsive CV Enquiry' <${process.env.MY_EMAIL}>`,
        to: `${process.env.SEND_TO_EMAIL}`,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString())
        };
        res.status(200).send(`Email sent: ${info.response}`);
    });
});

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());


module.exports = app;