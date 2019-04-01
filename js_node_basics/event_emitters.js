// example

var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

emitter.emit('start');
emitter.emit('count', 2);

// ******** creating EventEmitter classes *********

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

// testing the Counter type

var counter = new Counter()
