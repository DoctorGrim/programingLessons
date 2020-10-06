let id = "somthing else"

//using bind(this)

const obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }.bind(this), 1000);
    }
  };


// what happens without bind

// const obj = {
//   id: 42,
//   counter: function counter() {
//     setTimeout(function() {
//       console.log(this.id);
//     }, 1000);
//   }
// };

// arrow function

// const obj = {
//     id: 42,
//     counter: function counter() {
//       setTimeout(() =>console.log(this.id), 1000);
//     }
//   };


  obj.counter()