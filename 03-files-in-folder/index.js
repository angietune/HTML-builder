const path = require("path");
const fs = require("fs");
fs.readdir(
  "03-files-in-folder/secret-folder",
  { withFileTypes: true },
  function (err, files) {
    try {
      filesList(files);
    } catch (err) {
      console.log(err);
    }
  }
);

function filesList(files) {
  files.map(async (file) => {
    if (file.isFile()) {
      let fileName = file.name;
      let fileExt = path.extname(file.name);
      const fileStats = fs.stat(
        `./secret-folder/${fileName}`,
        function (err, stats) {
          return stats;
        }
      );
      console.log(fileName + " - " + fileExt + " - " + fileStats);
    }
  });
}
