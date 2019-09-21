import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './routers/api';
import { config } from './configs/app';
import { log } from './services/log';

const port: number = config.port;

const app: express.Application = express();

// Custom Middleware
// app.use('*', log);

// app.get('/', (request: express.Request, response: express.Response) => {
//     response.end(response.locals.someData);
// });

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));