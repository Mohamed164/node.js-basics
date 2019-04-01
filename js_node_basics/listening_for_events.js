// to listen for an event you need a subscriber
/* methods used:
    1. on() --> creates a listener for a specific event
    2. addListener() --> same as on!
    3. once() --> like on(), but once it's invoked the listenr is removed
                  good for handling one-time events
*/

// exmaple
var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();
var util = require('util');

function Counter(){
  var self = this;

  EventEmitter.call(this);
  var count =0;
  this.start = function(){
    this.emit('start');

    setInterval(function(){
      self.emit('count', count);
      ++count;
    }, 1000);
  };
}

util.inherits(Counter, EventEmitter);

// listening

var counter = new Counter();
counter.on('start', function(){
  console.log('start event');
});

counter.on('count', function (count) {
  console.log('count= '+count);
});

counter.start();

// NOTE: you can emmit: 'error' for error-handling
// NOTE: when an error is not caught **uncaughtException* is emitted 
