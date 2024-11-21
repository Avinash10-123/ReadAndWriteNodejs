// 1.OS MODULE 

// const os = require('os')

// METHODS OF OS MODULE 

// console.log(os.type());

// console.log(os.cpus());

// console.log(os.arch());

// console.log(os.constants());

// console.log(os.platform());

// console.log(os.hostname());

// console.log(os.userInfo());



// 2. fs module 

// const { isUtf8 } = require('buffer');
const fs = require('fs');

// /Write file  synchronus

// fs.writeFileSync('newfile.txt','this is a file created by backend using fs')

// console.log('end')

// read file synchronus

// console.log(fs.readFileSync('newfile.txt','utf8'))
 
// write file asynch

// const content = 'hello dude';

// fs.writeFile('new1.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
    
//   }
// });

// Read file async

// fs.readFile('new1.txt','utf-8',(err,data)=>{

//     console.log(err)
//     console.log(data)
// }
// )


// const path = require('path');

// 1.join()

// const j=path.join('hai','hello')
// console.log(j)

// 2.Resolve()

// const r=path.resolve('new1.txt')
// console.log(r)

// 3.basename()

// const b= path.basename('index.js')
// console.log(b)

// 4.path.extname()

// const e=path.extname('sub.js')
// console.log(e)


// fs.writeFileSync('demo.txt','hai' )
// fs.appendFileSync('demo.txt','avinash')
// const b=fs.readFileSync('demo.txt','Utf8')
// console.log(b)