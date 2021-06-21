const pwdFunc = require("./pwd");
const lsFunc = require("./ls");
const catFunc = require("./cat");
const curlFunc = require("./curl");

process.stdout.write("prompt >");

process.stdin.on("data", function (data) {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    // process.stdout.write(pwdFunc()); // this is like console.log
    pwdFunc();
  }

  if (cmd === "ls") {
    lsFunc();
  }

  if (cmd.slice(0, 4) === "cat ") {
    const file = cmd.split(" ")[1];
    catFunc(file);
  }

  if (cmd.slice(0, 5) === "curl ") {
    const curl = cmd.split(" ")[1];
    curlFunc(curl);
  }
});

//   //   process.stdout.write("You typed:" + cmd);
//   process.stdout.write("\nprompt >");
// });
