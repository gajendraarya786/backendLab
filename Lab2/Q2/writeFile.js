const fs = require("fs");

const writable = fs.createWriteStream("output.txt");
writable.write("Hello, Node.js!", (err) => {
  if (err) console.error("Error writing file:", err);
  else console.log("Data written successfully!");
});
writable.end();
