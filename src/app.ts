import express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { MainRouter } from './routes';
import { loadErrorHandlers } from './utils/error-handling';
import { AppDataSource } from './entities';

const app: Application = express();

AppDataSource
    .initialize()
    .then(() => {
        console.log('Connected');
    })
    .catch((err) => {
        throw new Error(err);
    });

app.use(bodyParser.json());
app.use('/api', MainRouter);

loadErrorHandlers(app);


export default app;
