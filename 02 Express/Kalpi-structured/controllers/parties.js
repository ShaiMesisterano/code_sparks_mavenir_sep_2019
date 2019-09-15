"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parties_1 = require("../services/parties");
var partiesRouter = express_1.default.Router();
partiesRouter.post('/', parties_1.createParty);
partiesRouter.get('/', parties_1.readParty);
partiesRouter.put('/', parties_1.updateParty);
partiesRouter.delete('/', parties_1.deleteParty);
exports.default = partiesRouter;
