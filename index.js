 function setTimeoutPromisidied(duration) {
    return new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
 };

 function callBack() {
    console.log("5sec passed");
 }

 setTimeoutPromisidied(5000).then(callBack);