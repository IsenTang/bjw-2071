// let result = [1,2];

// console.log(result[0]);

// console.log(result[1]);

// let [a,b] = [1,2]

// console.log(a);

// console.log(b);

function createIncrement(i) {

    let value = 0;
    
    return function increment() {

      value += i;
      console.log(value);
      
      const message = `Current value is ${value}`;
      return function logValue() {
    
        console.log(value);
        console.log(message);
      };
    }
}
const inc = createIncrement(1);
inc();
const log = inc();             
inc();             
log();             