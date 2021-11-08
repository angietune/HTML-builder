const path = require("path");
const fs = require("fs/promises");
try {
  fs.readdir("03-files-in-folder/secret-folder", {
    withFileTypes: true,
  }).then((data) => filesList(data));
} catch (err) {
  console.log(err);
}

function filesList(files) {
  files.map((file) => {
    if (file.isFile()) {
      let fileName = file.name.replace(/\.[^/.]+$/, "");
      let fileExt = path.extname(file.name).replace(/\./g, "");
      const fileStats = fs.stat(
        `03-files-in-folder/secret-folder/${file.name}`,
        function (err, stats) {
          return stats;
        }
      );
      fileStats.then((data) => {
        console.log(fileName + " - " + fileExt + " - " + data.size + "kb");
      });
    }
  });
}
