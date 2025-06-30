const fs = require('fs');

const a = fs.readFileSync("a.txt", "utf-8");
const b = fs.readFileSync("b.txt", "utf-8");

console.log(a);
console.log(b);

