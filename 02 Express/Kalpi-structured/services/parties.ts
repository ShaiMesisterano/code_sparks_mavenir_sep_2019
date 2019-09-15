import express from 'express';
import uuid from 'uuid';
import {parties} from "../../Kalpi/data/parties";
import { getIndexById } from '../utils/getIndexById';

export const createParty = (request: express.Request, response: express.Response): void => {
    const newPartId: string = uuid();
    let newPartyName: string | null = null;
    try {
        if (request && request.body && request.body.name){
            newPartyName = request.body.name;
        }
    }
    catch(ex) {
        console.error(ex);
    }

    if (newPartyName) {
        parties.push({
            id: newPartId,
            name: newPartyName
        });
        response.json({
            message: "New party was added"
        })
    }
    else {
        response.json({
            message: "Please provide party name"
        })
    }
};

export const readParty = (request: express.Request, response: express.Response): express.Response => response.json(parties);

export const updateParty = (request: express.Request, response: express.Response): void => {
    const partyId: string = request.query.id;

    const partyIndex: number = getIndexById(parties, partyId);
    parties[partyIndex].name = request.body.name;

    response.json({
        message: "Party was updated"
    })
};

export const deleteParty = (request: express.Request, response: express.Response): void => {
    const partyId: string = request.query.id;
    const partyIndex: number = getIndexById(parties, partyId);

    parties.splice(partyIndex, 1);

    response.json({
        message: "Party was deleted"
    })
};