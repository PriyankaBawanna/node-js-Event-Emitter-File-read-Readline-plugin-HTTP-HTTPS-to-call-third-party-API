var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
rl.on("pause", () => {
  console.log("Paused Event is invoked");
});

/*rl.on("resume", () => {
  console.log("Resume Event is invoked.");
});*/
rl.on("SIGINT", () => {
  rl.question("Exit (y or n)? ", (input) => {
    if (input.match(/^y(es)?$/i)) {
      rl.pause();
    }
  });
});

rl.question("your good name ?", (goodname) => {
  console.log("welcome " + goodname);
  rl.question("your city is ", (city) => {
    console.log("city : " + city);
    rl.question("your  favourite color  ", (color) => {
      console.log("favourite color  : " + color);

      rl.setPrompt(`what is your age`);
      rl.prompt();
      rl.on("line", (age) => {
        console.log(`your ${age} years old `);

        rl.close();
      });
    });
  });
});
