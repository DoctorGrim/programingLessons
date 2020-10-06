// process.stdin.once('data',
//     (chunk) => { console.log(chunk.toString()) }
// )

// without readline library

async function printLine() {
  console.log("What is your name? ");
  await new Promise(function (resolve, reject) { //there is no reject condition lets make one
    process.stdin.once("data", (data) => {
      let name = data.toString().trim();
      console.log("Hello " + name + "!");
      resolve();
    });
  });
}

printLine().then(
  () => {
    console.log("done");
    process.stdin.pause();
  },
  () => console.log("fail")
);

// with readline library

// const readline = require('readline');
// const readlineInterface = readline.createInterface(process.stdin, process.stdout);

// function ask(questionText) {
//   return new Promise((resolve, reject) => {
//     readlineInterface.question(questionText, resolve);
//   });
// }

// start();

// async function start() {
//     let name = await ask('What is your name? ');
//     console.log('Hello ' + name + '!');
//     process.exit();
//   }
