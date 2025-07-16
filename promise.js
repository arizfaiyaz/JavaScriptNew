// promise is a js object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is created using the Promise constructor, which takes a function (executor) that has
// two parameters: resolve and reject. The resolve function is called when the asynchronous operation is successful, and the reject function is called when it fails.

function main(){

}

setTimeout(main, 3000);
setTimeoutPromisidied(3000).then(main)


// function setTimeoutPromisidied(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback() {
//     console.log("3 seconds passed");
    
// }
// setTimeoutPromisidied(3000).then(callback);

// how to create your own promise

function random() {

}

let p = new Promise(random);
console.log(p);

// A promise can be resolved or rejected using the resolve and reject functions.
function resolvePromise() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            const success = true; // Change to false to simulate failure
            if (success) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected!");
            }
        }, 1000);
    });
}