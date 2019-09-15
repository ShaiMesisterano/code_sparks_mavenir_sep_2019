import express from 'express';
import { createParty, readParty, updateParty, deleteParty } from "../services/parties";

const partiesRouter: express.Router = express.Router();

partiesRouter.post('/', createParty);
partiesRouter.get('/', readParty);
partiesRouter.put('/', updateParty);
partiesRouter.delete('/', deleteParty);

export default partiesRouter;