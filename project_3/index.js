const min =1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1));

let attempt = 0;
let guess;
let running = true;
while (running){
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        alert("Please enter a valid number.");
        continue;
    }
    else if (guess < min || guess > max){
        alert(`Please enter a number between ${min} and ${max}.`);
        continue;
    }
    else{
        attempt++;
        if(guess < answer){
            alert("Too low! Try again.");
            continue;
        } 
        else if(guess> answer){
            alert("Too high! Try again.");
            continue;
        }
        else{
            alert(`the answer was ${answer}. it took you ${attempt} attempts to guess it right!`);
            running = false;
        }
        
    }
    
    running = false;
}

