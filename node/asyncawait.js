// const fs = require("fs").promises;

// const readwritefile = async () => {
//   try {
//     const data = await fs.readFile("newfile.txt", "utf8");
//     console.log("file contents:", data);

//     await fs.writeFile("out.txt", data);
//     console.log("file written successfully");
//   } catch (err) {
//     console.error("error:", err);
//   }
// };

// readwritefile();


// TASK 

// Build a program that reads a file, checks if it exists, and appends content to the file if it does. If the file doesn't exist, create a new file with a default message.

const fs=require('fs');

const excist =fs.existsSync('new5.txt');
if(excist){
    fs.appendFileSync('new5.txt','dudeeee')
}else{
    fs.writeFileSync('avi.txt','avinashgovind')
}