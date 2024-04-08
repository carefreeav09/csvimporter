import express, {Express, Router} from 'express';
import dotenv from 'dotenv';

import dbConfig from './db';
import csvRouter from './csv/csv.router';

dotenv.config();

const app: Express = express();

const port = 3000;

app.use('/csv', csvRouter);

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  dbConfig
    .authenticate()
    .then(() => {
      dbConfig.sync();
      console.log('DB instantiated');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

startServer();
