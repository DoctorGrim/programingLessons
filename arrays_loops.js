
array = [ 1, 2, 3, 4, 5, 6 ]; 

console.log("console.log"); 
console.log(array[0]); 
console.log(array[1]); 
console.log(array[2]); 
console.log(array[3]); 
console.log(array[4]); 
console.log(array[5]); 

console.log("for-loop"); 
for (let index = 0; index < array.length; index++) { 
    console.log(array[index]); 
} 

console.log("while-loop"); 
let index = 0;
while (index < array.length) { 
    console.log(array[index]); 
    index++;
}

// The forEach method calls the provided function once for every array element in the order. 
console.log("forEach"); 
array.forEach(myFunction); 
function myFunction(item) 
{ 
    console.log(item); 
}

// The every() method checks if all elements in an array pass a test (provided as a function).
console.log("every()")
const under_five = x => x < 5; 
  
// A map applies a function over every element and then returns the new array.

if (array.every(under_five)) { 
    console.log('All are less than 5'); 
} 
else { 
    console.log('At least one element is not less than 5'); 
} 

console.log("map")
square = x => Math.pow(x, 2); 
squares = array.map(square); 
console.log(array); 
console.log(squares)