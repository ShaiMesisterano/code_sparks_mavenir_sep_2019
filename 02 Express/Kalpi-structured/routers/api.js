"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var parties_1 = __importDefault(require("../controllers/parties"));
var apiRouter = express_1.default.Router();
apiRouter.use('/parties', parties_1.default);
exports.default = apiRouter;
