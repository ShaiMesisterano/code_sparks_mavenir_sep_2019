import express from 'express';
import path from 'path';
import fs from 'fs';

export const log = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const filename: string = path.join('log', 'output.csv');
    const now: string = new Date().toLocaleString();
    const { method, body, query }: express.Request = request;

    const row: string = `${now}, ${method}, ${JSON.stringify(body)}, ${JSON.stringify(query)} \n`;

    const callback = (err: any): any => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Row was added");
        }
    };

    fs.appendFile(filename, row, callback);

    // response.write("SOME DATA");
    // response.locals.someData = "SOME DATA";

    next();

    response.write("SOME DATA");
};