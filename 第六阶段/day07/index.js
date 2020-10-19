const obj = {
    a:1,
    b:2,
    c:3
}

let {a,...rest} = obj;

console.log(rest);