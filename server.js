const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = process.env.PORT;

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

  // CONNECTING TO THE MONGO DB:
DB = process.env.DB_CONNECT_STRING.replace('<password>', process.env.MONGO_INITDB_ROOT_PASSWORD);

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

