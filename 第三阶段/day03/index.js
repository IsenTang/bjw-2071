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

// console.log(path.join(__dirname,'../day02/compiled.js'));
// fs.readFile(path.join(__dirname,'./1.txt'),function (error,data){

//     if(error){ console.log('error ====>',error)}

//     else{
//         console.log(data.toString());
//     }
// })

// console.log(1123);
// console.log('end');

// 写2文件，文件1.txt ， 2.txt
// 读出这里面的内容，并把他们连接起来，然后写入3.txt



fs.writeFile(path.join(__dirname,'./2.txt'),'123',function(error){

    if(error){ console.log(error);}
    else{

        fs.readFile(path.join(__dirname,'./2.txt'),(error,content)=>{

            if(error){ console.log(error);}
            else{
                console.log(content.toString());
            }
        });
    }
});
