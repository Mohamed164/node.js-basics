// objects that represent a value that is yet to be known when the promise is created
// supported by Node 0.11.13 and later

// NOTE: when a promise is created it has a value of *pending* or *unfulfilled*
//       when the promise is created it moves to *fulfilled*
//       if the asynchronous code fails, it moves to the rejected state

// creating a promise
var promise = new Promise(function (resolve, reject) {
  var success = false;
  if (success)
    resolve('promise fulfilled')
  else
    reject(new Error('rejected'))
});

// recieving the result of a Promise
promise.then(function (result) {
  console.log(result);
})

// NOTE: promises can be chained
//       a promise can resturn a promise!

//to handle rejection use *catch()*
promise.catch(function (result) {
  console.log(result);
}).then(function () {
  console.log('done!');
})
