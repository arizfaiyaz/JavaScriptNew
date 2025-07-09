function callback() {
    console.log("hi");
    
};

setTimeout(function(){
    console.log("hello hello");
    setTimeout(function(){
        console.log("hello i am ariz");
        setTimeout(function () {
            console.log("hello i am Eshal");
        }, 5000);
    }, 3000);
}, 1000);


// callback is bad
// we can use promises to avoid callback hell
