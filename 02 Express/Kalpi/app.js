"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuid_1 = __importDefault(require("uuid"));
var body_parser_1 = __importDefault(require("body-parser"));
var parties_1 = require("./data/parties");
// const express = require('express');
// const greeter = require('./modules/greeter');
var port = 5000;
var app = express_1.default();
var getIndexById = function (arr, id) { return arr.findIndex(function (item) { return item.id === id; }); };
app.use(body_parser_1.default.json());
app.get('/api/parties', function (request, response) { return response.json(parties_1.parties); });
app.post('/api/parties', function (request, response) {
    var newPartId = uuid_1.default();
    var newPartyName = null;
    try {
        if (request && request.body && request.body.name) {
            newPartyName = request.body.name;
        }
    }
    catch (ex) {
        console.error(ex);
    }
    if (newPartyName) {
        parties_1.parties.push({
            id: newPartId,
            name: newPartyName
        });
        response.json({
            message: "New party was added"
        });
    }
    else {
        response.json({
            message: "Please provide party name"
        });
    }
});
app.put('/api/parties', function (request, response) {
    var partyId = request.query.id;
    var partyIndex = getIndexById(parties_1.parties, partyId);
    parties_1.parties[partyIndex].name = request.body.name;
    response.json({
        message: "Party was updated"
    });
});
app.delete('/api/parties', function (request, response) {
    var partyId = request.query.id;
    var partyIndex = getIndexById(parties_1.parties, partyId);
    parties_1.parties.splice(partyIndex, 1);
    response.json({
        message: "Party was deleted"
    });
});
app.listen(5000, function () { return console.log("Server is running"); });
