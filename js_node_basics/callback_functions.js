/* callback function:
        a function that is invoked at the completion of an asynchronus operation
        the results are passed as arguments
*/


// an example of a callback funtion
// also an example of reading a text file

var fs = require('fs');
var color = require('colors');

fs.readFile('README.txt', 'utf8', function(error, data){
  if(error){
      return console.error(error);
  }
  console.log('asynchronus\n'.green);
  console.log(data);
})


// some conventions of calling

/*
  1. callback functions when arguments, are passed as the last one
  2. errors are passed as the first argument
  3. you can appedn **Sync** to functions for synchronus equivalents
*/

// example of a synchronus file reading

try {
  var data = fs.readFileSync('README.txt', 'utf8');
  console.log('synchronus\n'.green);
  console.log(data);
} catch (e) {
  console.error(e);
}


// ***************** ERROR HANDLING ******************

// NOTE: when asynchronus calls are made, the execution of the program continues and the application's call stack changes
// NOTE: try...catch is incapable of catching asynchronusly thrown errors
// try..catch isn't used that much. MOstly w/ JSON.parse()
// callbacks are preferred for error handling

// **************** Callback Hell ********************
// happens when many callback funtions are nested w/in each other
