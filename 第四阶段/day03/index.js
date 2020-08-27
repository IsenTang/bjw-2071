// let person = {
//     name:'isen',
//     sayName: function(name){
//         console.log('hello,I am '+ name );
//     }
// }

// person.sayName(person.name)

// var person = {
//     name:'isen',
//     age:28,
//     sayName: function(self){
//         console.log('hello,I am '+ self.name + ' I am ' + self.age + ' old' );
//     }
// }

// person.sayName(person)

var person = {
    name:'isen',
    sayName: function(){
        console.log('hello,I am '+ this.name );
    }
}

let person2 = {

    name:'lily'
}

let person3 = {
    name: 'tom'
}

person.sayName.call(person2);

function fakeSayName(){

    console.log(this.name);
}


// global.name = 'global';
// fakeSayName()
fakeSayName.call(person3);