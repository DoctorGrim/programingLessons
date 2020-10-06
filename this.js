let id = "somthing else"



// const obj = {
//     id: 42,
//     counter: function counter() {
//       setTimeout(function() {
//         console.log(this.id);
//       }.bind(this), 1000);
//     }
//   };


  const obj = {
    id: 42,
    counter: function counter() {
      setTimeout(function() {
        console.log(this.id);
      }, 1000);
    }
  };

  obj.counter()