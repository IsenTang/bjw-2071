const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

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

// callback hell
// fs.writeFile(path.join(__dirname,'./1.txt'),'333333333',(error)=>{

//     if(error) { console.log(error);}

//     else{

//         fs.writeFile(path.join(__dirname,'./2.txt'),' 22222222',(error)=>{

        
//             error ? console.log(error) : fs.readFile(path.join(__dirname,'./1.txt'),(error,content1)=>{

//                 error ? console.log(error) : fs.readFile(path.join(__dirname,'./2.txt'),(error,content2)=>{

//                     error ? console.log(error) : fs.writeFile(path.join(__dirname,'./3.txt'),`${content1.toString()}${content2.toString()}`,(error)=>{

//                         error ? console.log(error) : console.log(' All Success');
//                     });
//                 });
//             })

//         })
//     }
// });


// console.log("other");


// fs.writeFile(path.join(__dirname,'./1.txt'),'12322',function(error){

//     if(error){ console.log(error);}
//     else{

//         fs.writeFile(path.join(__dirname,'./2.txt'),' 22333',(error)=>{

//             if(error){ console.log(error);}
//             else{
                
//                 fs.readFile(path.join(__dirname,'./1.txt'),(error,content1)=>{

//                     error ? console.log(error) : 
//                     fs.readFile(path.join(__dirname,'./2.txt'),(e,content2)=>{

//                         if(error){ console.log(error);}
//                         else{

//                             fs.writeFile(path.join(__dirname,'./3.txt'),`${content1.toString()}${content2.toString()}`,(error)=>{

//                                 error ? console.log(error) : console.log(' All Success ');
//                             })
//                         }
//                     })
//                 });
//             }
//         });
//     }
// });


// function readFile(address){

//     return new Promise((resolve,reject)=>{

//         fs.readFile(address,(error,content)=>{

//             if(error){ reject(error);}
    
//             else{
    
//                 resolve(content.toString());
//             }
//         });
//     })
// }

// function writeFile(address,content){

//     return new Promise((resolve,reject)=>{

//         fs.writeFile(address,content,(error)=>{

//             if(error) { reject(error) }

//             else{
//                 resolve('Success');
//             }
//         })
//     })
// }


// let content = '';

// readFile(path.join(__dirname,'./1.txt'))
// .then((data)=>{

//     console.log('1.txt ===>',data);
//     content+=data;
//     return readFile(path.join(__dirname,'./2.txt'));
// })
// .then((data)=>{

//     console.log('2.txt ===>',data);
//     content+=data;

//     console.log(content);

//     return writeFile(path.join(__dirname,'./3.txt'),content);
// })
// .then((data)=>{

//     console.log('data ===>',data);
// })
// .catch((e)=>{

//     console.log(e);
// })

async function main(){

    try {
        // let data1 = await readFile(path.join(__dirname,'./1.txt'));

        // let data2 = await readFile(path.join(__dirname,'./2.txt'));

        let result = await Promise.all([readFile(path.join(__dirname,'./1.txt')),readFile(path.join(__dirname,'./2.txt'))]);

        // console.log(result);
        await writeFile(path.join(__dirname,'./3.txt'),result[0]+result[1]);
    } catch (error) {
        
        // console.log('error ===>',error);
        throw error;
    }

}

async function test(){

    try{
        await main();
    }catch(error){

        console.log('Error ====>',error);
    }
    
}

test();