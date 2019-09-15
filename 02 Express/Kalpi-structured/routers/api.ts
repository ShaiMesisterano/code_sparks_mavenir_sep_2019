import express from 'express';
import partiesController from '../controllers/parties';

const apiRouter: express.Router = express.Router();

apiRouter.use('/parties', partiesController);
// apiRouter.use('/prime-ministers', primeMinistersController);

export default apiRouter;