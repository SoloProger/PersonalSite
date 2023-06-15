import 'dotenv/config';
import express from 'express';
import router from './routers/core.router';
import database from './core/config/database';
import cors from 'cors';

const app = express();
const port = 9000;

app.use(cors());

app.use('/', router);

async function bootstrap(): Promise<void> {
  try {
    await database.authenticate();
    await database.sync();
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();