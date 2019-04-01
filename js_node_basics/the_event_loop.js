/*  The event loop allows JavaSript to appear multi-threaded when inidividual tasks run quickly

*/


// an example the breaks th eappearance of multi-threadedness

setInterval(function(){
  console.log('Task A');
}, 10);

setInterval(function(){
    while(true)
      console.log('Task B');

    // this enters in an infinite loop and A is never executed again because JS is single-threaded
    
}, 15);
