const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const app = express();
const jwtVerifier = require('express-jwt');

const user = { email: 'demo@gmail.com', password: 1234 };
const secret = 'secret';

function createToken(){
    let expirationDate =  Math.floor(Date.now() / 1000) + 30; //30 seconds from now
    const token = jwt.sign({ userID: user.email, exp: expirationDate }, secret);
    return token;
}

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    if (req.body.email == user.email && req.body.password == user.password) {
        res.send(createToken())
    }else{
        res.sendStatus(400);
    }
});

app.get('/home', jwtVerifier({secret: secret}), (req, res) => {
    res.send('Congratulations, you made it to home');
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(500).send(err.message);
    }
    next();
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));