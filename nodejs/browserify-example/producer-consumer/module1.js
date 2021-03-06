// module1.js
// module that has events

// create EventEmitter object
var EventEmitter = require('events').EventEmitter
var obj = new EventEmitter();

// export the EventEmitter object so others can use it
module.exports = obj;

// other code in the module that does something to trigger events
// this is just one example using a timer
setInterval(function() {
    obj.emit("someEvent", "test");
}, 1 * 1000);