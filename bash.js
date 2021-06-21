const pwdFunc = require("./pwd");

console.log("PWD FUNC", pwdFunc);
process.stdout.write("prompt >");

process.stdin.on("data", function (data) {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    // process.stdout.write(pwdFunc()); // this is like console.log
    console.log(pwdFunc);
  }
});

//   //   process.stdout.write("You typed:" + cmd);
//   process.stdout.write("\nprompt >");
// });
