const btn = document.getElementById('btn');
const label = document.getElementById('label');

const min=1;
const max=5;
let randomNumber;

btn.addEventListener('click', () => {
 randomNumber = Math.floor(Math.random() * max) + min;
 label.textContent = `Random number: ${randomNumber}`;
});