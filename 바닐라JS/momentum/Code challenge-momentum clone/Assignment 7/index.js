const numberForm = document.querySelector("#numberForm")
const generateNumber = document.querySelector("#generatenumber input")
const guessNumber = document.querySelector("#guessnumber input")
const msgChosenNumbers = document.querySelector("#chosennumbers")
const msgResult = document.querySelector("#result")

function limitNumberRange(){
    const numberRange = generateNumber.value;
    guessNumber.max = numberRange;
}
    
function submitNumber(event){
    const numberRange = generateNumber.value;
    const chosenByMachine = parseInt(generateRandNumber(numberRange));
    const chosenByPlayer = parseInt(guessNumber.value);
    event.preventDefault();
    msgChosenNumbers.innerText 
    = `You chose: ${chosenByPlayer}, the machine chose: ${chosenByMachine}.`;
    if(chosenByPlayer === chosenByMachine){
        msgResult.innerText = "You won!"
    } else {
        msgResult.innerText = "You lost!"
    }
}

function generateRandNumber(maxValue){
    return Math.ceil(Math.random()*maxValue);
}

generateNumber.addEventListener("input", limitNumberRange);
numberForm.addEventListener("submit", submitNumber);