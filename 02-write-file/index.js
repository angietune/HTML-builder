const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});

rl.prompt();

rl.on("line", (line) => {
  if (line === "exit") {
    console.log("Have a nice day!");
    process.exit(0);
  }
  writeLine(line);
  rl.prompt();
}).on("close", () => {
  console.log("Have a nice day!");
  process.exit(0);
});

function writeLine(line) {
  fs.appendFile("./02-write-file/text.txt", `\n${line}`, (err) => {
    if (err) throw err;
  });
}
