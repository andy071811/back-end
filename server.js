const dotenv = require('dotenv');
const mongoose = require('mongoose');
const http = require('http');
const https = require('https');
const fs = require('fs');


dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = 3000;

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

// CONNECTING TO THE MONGO DB:
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const clusterUrl = process.env.CLUSTER_URL
DB = `mongodb+srv://${dbUser}:${dbPass}@${clusterUrl}/responsive-cv?retryWrites=true&w=majority`

mongoose.connect(DB).then(() => {
  console.log("Connected to the database");
});

const server = app.listen(PORT, () => {
    console.log(`Server now listening on port: ${PORT}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });

