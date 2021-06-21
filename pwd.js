function pwd() {
  process.stdout.write(process.cwd()); // this is like console.log

  //   if (cmd === "pwd") {

  //   }
  //   process.stdout.write("You typed:" + cmd);
  process.stdout.write("\nprompt >");
}
module.exports = pwd;
