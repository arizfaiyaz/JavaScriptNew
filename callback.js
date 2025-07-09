// Callback = a function that is passed as an argument to another function and is executed after the completion of that function.

// used to handle asynchronous operations, such as API calls, file reading, or event handling.

// Example of a callback function
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data); // Call the callback function with the fetched data
    }, 1000);
}
// Example of using the callback function
fetchData((data) => {
    console.log('Data fetched:', data);
});
// Example of a callback function with error handling
function fetchDataWithErrorHandling(callback) {
    setTimeout(() => {
        const error = null; // Simulate no error
        const data = { id: 1, name: 'John Doe' };
        if (error) {
            callback(error, null); // Call the callback with an error
        } else {
            callback(null, data); // Call the callback with the fetched data
        }
    }, 1000);
}