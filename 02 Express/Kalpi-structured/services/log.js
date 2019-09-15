"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
exports.log = function (request, response, next) {
    var filename = path_1.default.join('log', 'output.csv');
    var now = new Date().toLocaleString();
    var method = request.method, body = request.body, query = request.query;
    var row = now + ", " + method + ", " + JSON.stringify(body) + ", " + JSON.stringify(query) + " \n";
    var callback = function (err) {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Row was added");
        }
    };
    fs_1.default.appendFile(filename, row, callback);
    // response.write("SOME DATA");
    // response.locals.someData = "SOME DATA";
    next();
    response.write("SOME DATA");
};
