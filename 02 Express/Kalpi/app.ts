import express from 'express';
import uuid from 'uuid';
import bodyParser from 'body-parser';
import { parties } from './data/parties';
// const express = require('express');
// const greeter = require('./modules/greeter');

const port = 5000;

const app: express.Application = express();

const getIndexById: any = (arr: Array<{id: string}>, id: string) => arr.findIndex( (item: { id: string }) => item.id === id );

app.use(bodyParser.json());

app.get('/api/parties', (request: express.Request, response: express.Response): express.Response => response.json(parties));

app.post('/api/parties', (request: express.Request, response: express.Response): void => {
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
});

app.put('/api/parties', (request: express.Request, response: express.Response): void => {
    const partyId: string = request.query.id;

    const partyIndex: number = getIndexById(parties, partyId);
    parties[partyIndex].name = request.body.name;

    response.json({
        message: "Party was updated"
    })
});

app.delete('/api/parties', (request: express.Request, response: express.Response): void => {
    const partyId: string = request.query.id;
    const partyIndex: number = getIndexById(parties, partyId);

    parties.splice(partyIndex, 1);

    response.json({
        message: "Party was deleted"
    })
});

app.listen(5000, () => console.log("Server is running"));