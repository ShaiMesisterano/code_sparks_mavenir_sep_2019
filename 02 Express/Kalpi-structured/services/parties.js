"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __importDefault(require("uuid"));
var parties_1 = require("../../Kalpi/data/parties");
var getIndexById_1 = require("../utils/getIndexById");
exports.createParty = function (request, response) {
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
};
exports.readParty = function (request, response) { return response.json(parties_1.parties); };
exports.updateParty = function (request, response) {
    var partyId = request.query.id;
    var partyIndex = getIndexById_1.getIndexById(parties_1.parties, partyId);
    parties_1.parties[partyIndex].name = request.body.name;
    response.json({
        message: "Party was updated"
    });
};
exports.deleteParty = function (request, response) {
    var partyId = request.query.id;
    var partyIndex = getIndexById_1.getIndexById(parties_1.parties, partyId);
    parties_1.parties.splice(partyIndex, 1);
    response.json({
        message: "Party was deleted"
    });
};
