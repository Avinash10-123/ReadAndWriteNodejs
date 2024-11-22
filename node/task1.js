// TASK 

// 1. Build a program that reads a file, checks if it exists, and appends content to the file if it does. If the file doesn't exist, create a new file with a default message.

// const fs=require('fs');

// fs.readFileSync('new1.txt','utf-8')

// const excist =fs.existsSync('new1.txt');
// if(excist){
//     fs.appendFileSync('new1.txt','dudeeee')
// }else{
//     fs.writeFileSync('avi.txt','avinashgovind')
// }


// TASK 2 (/homepage,/aboutpage,/contactpage) http


const http=require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    const rurl= url.parse(req.url,true).pathname;
    if(rurl=="/"){
    res.write('<h1>WELCOME TO THE HOME PAGE!</h1>')
    res.end();
}else if(rurl=="/about"){
    res.write('<h1>THIS IS ABOUT PAGE</h1>')
    res.end();
}else if(rurl=="/contact"){
    res.write('<h1>THIS IS CONTACT PAGE</h1>')
    res.end();
}else{
    res.write('<h1>404 PAGE NOT FOUND</h1>')
    res.end()
}
});

server.listen(4000)
