import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routers/api';
import { config } from './configs/app';

const port: number = config.port;

const app: express.Application = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));