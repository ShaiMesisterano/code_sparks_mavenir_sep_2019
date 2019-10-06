const app = require('express')();

let list = [];

app.use((req, res, next) => {
	list.push( () => req.headers );

	req.user = {
	    id: 1,
	    username: 'John Leak'
	};

	next();
    });

app.get('/', (req, res) => res.send(`Hello ${req.user.username}`))

app.listen(8000, () => console.log('listening on port 8000'));