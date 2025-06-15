const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const submit = document.getElementById("convert");
const result = document.getElementById("result");
let temp;

function convert() {    
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = (temp * 9/5) +32;
        result.textContent = `Tempreture is ${temp.toFixed(1)}°F`;
    }else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent =`Tempretur is ${temp.toFixed(1)}°C`;
    }
    else{
        result.textContent ="Select a unit";
    }
}