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
        console.log('hello,I am '+ this.name  );
    }
}

let person2 = {

    name:'lily'
}



// person.sayName.call(person2)


let person3 = {
    name: 'tom'
}

function fakeSayName(v){

    console.log(this.name + v);
}

global.name = 'global'

fakeSayName.call(person3,1)

fakeSayName.call(null,1)

fakeSayName.apply(person3,[1]);

fakeSayName.bind(person3)(1)

function test(v){
    console.log(person3.name + v);
}


