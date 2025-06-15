/*let username = "John Doe";
username.length; // 8
console.log(username.length); // 8
console.log(username.charAt(0)); // J
console.log(username.charAt(1)); // o   
console.log(username.charAt(2)); // h
console.log(username.charAt(3)); // n   
console.log(username.charAt(4)); // " " (space)
console.log(username.charAt(5)); // D

console.log(username.charAt(6)); // o
console.log(username.charAt(7)); // e
console.log(username.charAt(8)); // "" (empty string, since index 8 is out of bounds)
*/

/* string slicing

const fullName = "John Doe";

//let firstname = fullName.slice(0,4);

let lastname = fullName.slice(5,8);

console.log(lastname); // John
*/

// --Method chaining--
let username = Window.prompt("enter your username?");

username =  username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username); // John