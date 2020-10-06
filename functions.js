// Function declaration

function fool(){
    console.log("fool")
  }
  
  // Named function expression
const foo = function(){
    "foobar"
  }

  //arrow function
const bob = () => "bob"
  
  // setting `bar` equal to the `foo` function itself
  let bar = bob;
  
  // setting `bar` equal to the RETURN VALUE
  // of the `foo` function
  let barbar = bob();

console.log(fool) // fool function definition
console.log(fool())// = undefind nothing is returned but console.log is called
console.log(foo())// = undefind nothing is returned
console.log(bob()) // = "bob"
console.log(bar)// = bob function definition
console.log(barbar)// = "bob"