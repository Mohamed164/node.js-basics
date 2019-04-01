var colors = require('colors');
var m = require('mmm');

console.log(m.now);
console.log(m.add(1,1));
console.log('hi'.green);

setTimeout(function(){
  m = require('mmm');
  console.log('second require'+ m.now);
},5000)
