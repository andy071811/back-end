const dotenv = require('dotenv');


dotenv.config({ path: './config.env' });
const app = require('./app');
const PORT = process.env.PORT;

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
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

