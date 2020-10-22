// function sleep(){

//     return new Promise((res,rej)=>{

//         setTimeout(()=>{

//             console.log('timeout done');
//             res();
//         },2000)
//     })
// }

// async function main(){

//     await sleep().then(()=>{

//         console.log(1);
//     });

//     // console.log(1);
// }
function innerTest(){
    // try {
        console.log(a);
    // } catch (error) {
    //     throw error;
    // }
    
};

function test(){

    try{
        innerTest();
    }catch(e){
        
        throw {test:1};
    }
}

function main(){
    try {
        test();
    } catch (error) {

        console.log(error);
        console.log(' in error ')
    }
    
}

main();