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

for (let i=0; i<1000; i++) {
    console.log(i)
}
