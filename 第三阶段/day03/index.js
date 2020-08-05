const path = require('path');
const fs = require('fs');

// // let address = '/foo/bar/baz/asdf/banyuan.html'
// // console.log(path.basename(address));

// // console.log(path.dirname('/foo/bar/baz/asdf/banyuan.html'));

// // console.log(path.extname('/foo/bar/baz/asdf/banyuan.html'));

// // console.log(path.format({
// //     dir: '/home/user/dir',
// //     base: 'file.txt'
// // }));

// // console.log(path.join('/foo', 'bar', 'baz/asdf', 'banyuan','..'));

// // console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

// // console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));


// function main(a,b,c){


// }

// console.log(process.cwd()); // current working directory

// fs.readFile('./第三阶段/day03/1.txt',function (error,data){

//     if(error){ console.log('error ====>',error)}

//     else{
//         console.log(data);
//     }
// })

console.log(path.join(__dirname,'../day02/compiled.js'));
fs.readFile(path.join(__dirname,'./1.txt'),function (error,data){

    if(error){ console.log('error ====>',error)}

    else{
        console.log(data);
    }
})


console.log(__dirname);


