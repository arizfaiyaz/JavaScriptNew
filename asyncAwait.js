/*

async await is essentially syntactic sugar for promises
it uses promises under the hood
async functions always return a promise
await can only be used inside async functions
it pauses the execution of the function until the promise is resolved or rejected

 */

function setTimeoutPromisidied(duration) {
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

async function solve() {
    await setTimeoutPromisidied(1000);
    console.log("hi");
    await setTimeoutPromisidied(2000);
    console.log("hello hello");
    await setTimeoutPromisidied(3000);
    console.log("hello i am ariz");
}

solve();

console.log("hello i am Eshal");