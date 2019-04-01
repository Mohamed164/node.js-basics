/* Node and Javscript are single-threaded
  The Javascript engine maintains several queues of unhandeled tasks
  Each execution of the event loop known as a cycle causes one or more tasks to be dequeued and executed
  Each cycle is made of *ticks*
*/


// example on single-threadedness

console.log('one event loop cycle');

setTimeout(function(){
  // this is stacked up the queue to run in another cycle
  console.log('different cycle');
}, 100);

console.log('same cycle');
