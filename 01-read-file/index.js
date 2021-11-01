const path = require("path");
const fs = require("fs");

let textPath = "./01-read-file/text.txt";
path.dirname(textPath);
let stream = new fs.ReadStream(textPath);

stream.on("readable", () => {
  let data = stream.read();
  if (data !== null) {
    console.log(data.toString());
  }
});
