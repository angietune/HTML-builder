const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter some text: ",
});

rl.prompt();

rl.on("line", (line) => {
  writeLine(line);
  rl.prompt();
}).on("close", () => {
  console.log("Have a nice day!");
  process.exit(0);
});

function writeLine(line) {
  fs.writeFile("./02-write-file/text.txt", line, (err) => {
    if (err) throw err;
  });
}
