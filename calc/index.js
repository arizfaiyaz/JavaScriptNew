function sum(a, b){
    return a + b;
};
function sub(a, b){
    return a - b;
};

function mul(a, b){
    return a * b;
};

function div(a, b){
    return a / b;
};
// functional arguments
// This function takes two numbers and an operation function as arguments
// and returns the result of applying the operation to the numbers.
function doOp(a, b, op){
    let val = op(a, b);
    return val;
};

const ans = doOp(5, 5, sum);
console.log("The answer is: " + ans);