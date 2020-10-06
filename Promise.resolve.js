// 

Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  console.log("not called")
});


var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});


console.log('original === cast ? ' + (original === cast));

for (let i=0; i<10; i++) {
    console.log(i)
}




// #### Errors #########


// var p1 = new Promise(function(resolve, reject) {
//   reject('Success');
// });

// p1.then(function(value) {
//   console.log(value); // "Success!"
//   throw new Error('oh, no!');
// }).catch(function(e) {
//   console.error(e.message); // "oh, no!"
// }).then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });

// The following behaves the same as above
// p1.then(function(value) {
//   console.log(value); // "Success!"
//   return Promise.reject('oh, no!');
// }).catch(function(e) {
//   console.error(e); // "oh, no!"
// }).then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });