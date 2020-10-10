


// this.x = 'this'

// console.log(this === module.exports)
global.x = 'global'
module.exports.x = 'module';
let obj1 = {
    x: 22,
    say: function () { console.log(this.x) },
    say2: () => { console.log(this.x) },
    say3: function(){
        const func = () => {

            console.log(this.x)
        }
        func();
    }
}
// obj1.say(); 
// obj1.say2(); 
// obj1.say3();
const func1 = obj1.say3;
func1();

// module.exports = {

// }