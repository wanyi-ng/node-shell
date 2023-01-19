const fs = require('fs');

module.exports = function () {
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
