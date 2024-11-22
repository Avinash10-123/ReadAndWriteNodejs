// STREAMS

// 1. ReadStream

const fs = require("fs");

const readstream = fs.createReadStream("newfile.txt", {
  encoding: "utf8",
  highWaterMark: 15,
});
readstream.on("data", (chunk) => {
  console.log(`recieved chunk:"${chunk}"`);
});

readstream.on("end", () => {
  console.log("no more data");
});


// 2.Write Stream 

const writestream = fs.createWriteStream('writefile.txt')

readstream.pipe(writestream)