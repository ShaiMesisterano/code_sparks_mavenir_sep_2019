import express from 'express';
import uuid from 'uuid';
import bodyParser from 'body-parser';
import { parties } from './data/parties';
// const express = require('express');
// const greeter = require('./modules/greeter');

const port = 5000;

const app: express.Application = express();

app.use(bodyParser.json());

app.get('/api/parties', (request: express.Request, response: express.Response) => response.json(parties));

app.post('/api/parties', (request: express.Request, response: express.Response) => {
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

app.listen(5000, () => console.log("Server is running"));