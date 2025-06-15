function happybirthday(name) {
    console.log(
    `Happy Birthday, ${name}!`);
}

happybirthday("John");

function add(a,b){
    return a + b;
}
console.log(add(5, 10));


// Variable scope

// 1. Global scope - accessible everywhere
// {2. Local scope - accessible only within a function}
// 3. Block scope - accessible only within a block (e.g., if statement, loop)

function greet(){
    let name = "Alice"; // Local scope
    console.log(`Hello, ${name}!`);
}

greet(); // this will work

function sayGoodbye(name) {
    console.log(`Goodbye, ${name}!`); // This will cause an error because 'name' is not defined in this scope
}

sayGoodbye("Bob"); // This will work because 'name' is passed as an argument

