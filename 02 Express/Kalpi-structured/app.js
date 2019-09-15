"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var api_1 = __importDefault(require("./routers/api"));
var app_1 = require("./configs/app");
var port = app_1.config.port;
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use('/api', api_1.default);
app.listen(port, function () { return console.log("Server is running on port " + port); });
