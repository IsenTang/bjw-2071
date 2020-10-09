let obj = {};

Object.defineProperty(obj, 'a', {
    configurable: true,
    get: function() {
      
        return 'get'
    },
    set: function(newVal) {
      console.log('set newVal is:', newVal)
    }
})

obj.a = 'hello' // => set newVal is:hello
console.log(obj.a) // => 0