const EventEmitter = require('events');

const reactor = new EventEmitter();

const startEventHandler = () => console.log('Starting application...');
const stopEventHandler = () => console.log('Stopping application...');

reactor.on('start', startEventHandler);
reactor.on('stop', stopEventHandler);

// Simulate events after certain delays
setTimeout(() => { reactor.emit('start') }, 2000);
setTimeout(() => { reactor.emit('stop') }, 4000);



