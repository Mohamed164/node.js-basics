// command lines arguments are accessed through process.argv[]
// real args start at 2
// process.argv[0]: the exe of Node
// process.argv[1]: the js file being executed

// example
process.argv.forEach(function (value, index, args){
  console.log(index+ ': '+value);
})
