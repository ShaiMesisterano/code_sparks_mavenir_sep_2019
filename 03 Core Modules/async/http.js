const http = require('http');

const app = http.createServer( (request, response) => {
    response.end("Hello There");
});

setTimeout(() => {
    for (let i=1; i<=1000000; i++) {
        console.log(i);
    }
});

app.listen(5000, () => console.log("Server is running"));