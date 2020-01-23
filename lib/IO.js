const fs = require("fs"),
  path = require("path");
const readline = require("readline");
const IO = {
  read: userInput => {
    return new Promise((resolve, reject) => {
      filePath = path.join(__dirname, userInput);

      fs.readFile(filePath, "utf8", function(err, data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  askQuestion: query => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise(resolve =>
      rl.question(query, ans => {
        rl.close();
        resolve(ans);
      })
    );
  },
  boundingBoxRender: boundingBox => {
    return `Low { x: ${boundingBox[0][0]}, y: ${boundingBox[0][1]}, z: ${boundingBox[0][2]} }, { x: ${boundingBox[1][0]}, y:${boundingBox[1][1]}, z: ${boundingBox[1][2]} }`;
  }
};

module.exports = IO;
