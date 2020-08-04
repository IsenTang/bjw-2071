function sayHello(obj){

    let { name = 'isen' } = obj;
    console.log('hello ' + name);
}


module.exports = {
    sayHello
}