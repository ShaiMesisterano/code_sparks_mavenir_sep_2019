const EventEmitter = require('events');

const event = require('./event-emitter');
// const event = new EventEmitter();

// subscribe
event.on('data', data => {
    console.log('new data', data);
});

// publish
event.emit('data', '123');