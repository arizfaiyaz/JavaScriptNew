const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");


function convertToFahrenheit() {
    const Celcius = parseFloat(textbox.value);
    if (isNaN(Celcius)) {
        alert("Please enter a valid number");
        return;
    }
    else {
        const Fahrenheit = (Celcius * 9/5) + 32;
        textbox.textContent = Fahrenheit.toFixed(2);
    }
}