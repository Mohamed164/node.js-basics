const fs = require('fs');

// __filename: the name of the current file
// __dirname: the name of the current directory

// example
console.log('__filename: '+ __filename);
console.log('__dirname: '+__dirname );

// access the current working directory using: *process.cwd()*
// example
console.log(process.cwd());

// change the current working directory using: *process.chdir()*
// example
console.log(process.chdir(process.cwd()));



// ***********************************************************************************

// to read a file: *readFile()* or *readFileSync()* from the fs module
// readFileSync() is Synchronus

// readFile() example
fs.readFile('./test.txt', {encoding: 'utf8'}, function (error, data) {
  if (!error)
    console.log(data);
})

// readFileSync() example
try {
  console.log('readFileSync data: ' + fs.readFileSync('./test.txt'))
} catch (e) {
  console.log(e.message);
}

// ***********************************************************************************


// to write a file: *writeFile()* and *writeFileSync()*

// writeFile() example
// passing the *wx* flag as a third argument throws an error in case the file already exists

data = "data written using the fs module of Node!, second time w/ wx flag";
fs.writeFile('./test_written.txt', data, {flag: 'wx'}, function(err){
  if(err)
    console.log(err.message);
})
