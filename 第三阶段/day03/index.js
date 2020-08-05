const path = require('path');

// let address = '/foo/bar/baz/asdf/banyuan.html'
// console.log(path.basename(address));

// console.log(path.dirname('/foo/bar/baz/asdf/banyuan.html'));

// console.log(path.extname('/foo/bar/baz/asdf/banyuan.html'));

// console.log(path.format({
//     dir: '/home/user/dir',
//     base: 'file.txt'
// }));

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'banyuan','..'));

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));

