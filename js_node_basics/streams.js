// a mechanism for passing between two points
// allow an application to process data piece by piece

// **************** Readable Strems ***************
// emit -->  1.data 2.close 3.end 4.error
// chunk: a piece of data that is passed. Data is passed w/ type Buffer.

// ** fs.createReadStream() ** is better for memory and garbge collection

// example
const fs = require('fs');
var stream = fs.createReadStream('./README.txt');

stream.on('data', function (data) {
  var chunk = data.toString();
  process.stdout.write(chunk);
})

stream.on('end', function () {
  const data = "data written through a writtable stream\n".toString();
  process.stdout.write(data);
  console.log('stream has ended');


// **************** Writtable Streams ***************

/*
      const data = "data written through a writtable stream\n".toString();
      process.stdout.write(data);
*/

/* NOTE Back pressure:  means that the writtable streams signals to the source to stop sending
                        data because of overload
                        --> it's the return value of *write()*. false means can't write
*/


// example
var readStream = fs.createReadStream('./README.txt');
var writeStream = fs.createWriteStream('./NEW_README.txt');
readStream.pipe(writeStream);
// NOTE: *pipe()* used to connect the output of one stream to the input of the other


// **************** Standard Streams *******************

// apps are connected to 3 streams: 1.stdin 2. stdout 3. stderr

// using stdin (pauses by default when the app runs)

// if stdin recieves data
process.stdin.once('data', function (data) {
  process.stdout.write('Hello '+data.toString());

  // pause stdin(paused by default)
  process.stdin.pause();
})

process.stdout.write('what is your name? ');

// calls onde on stdin
process.stdin.resume();


})
