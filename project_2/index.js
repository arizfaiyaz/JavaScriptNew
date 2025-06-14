const checkbox = document.getElementById("checkbox");
const subResult = document.getElementById("subResult");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn"); 
const RupeeBtn = document.getElementById("RupeeBtn");
const paymentResult = document.getElementById("paymentResult");
const submit =  document.getElementById("submit");

submit.onclick = function() {
    if(checkbox.checked){
        subResult.textContent = "you have subscribed";
    } else {
        subResult.textContent = "you have not subscried";
    }
    if(visaBtn.checked){
        paymentResult.textContent = "you have selected visa";
    } else if(masterCardBtn.checked){
        paymentResult.textContent = "you have selected master card";
    } else if(RupeeBtn.checked){
        paymentResult.textContent = "you have selected Rupee";
    } else {
        paymentResult.textContent = "please select a payment method";
    }
}

