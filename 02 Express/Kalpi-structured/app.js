"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_1 = require("./configs/app");
var log_1 = require("./services/log");
var port = app_1.config.port;
var app = express_1.default();
// Custom Middleware
app.use('*', log_1.log);
app.get('/', function (request, response) {
    response.end();
});
// app.use(bodyParser.json());
// app.use('/api', apiRouter);
app.listen(port, function () { return console.log("Server is running on port " + port); });
