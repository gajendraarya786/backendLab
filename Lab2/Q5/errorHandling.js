const fs = require("fs");

const readable = fs.createReadStream("nofile.txt");

readable.on("error", (err) => {
  console.error("Stream error:", err.message);
});
