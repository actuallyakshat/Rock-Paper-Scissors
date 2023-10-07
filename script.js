const userChoice = document.querySelector("[.user-chose]");
const compChoice = document.querySelector("[.comp-chose]");
const rock = document.querySelector("[.button1]");
const paper = document.querySelector("[.button1]");
const scissor = document.querySelector("[.button1]");
const finalResult = document.querySelector("[.result]");
const userScore = document.querySelector("[.user-score]");
const compScore = document.querySelector("[.comp-score]");
const resetButton = document.querySelector("[.reset]");

function remove(){
    button1.classList.remove("active");
    button2.classList.remove("active");
    button3.classList.remove("active");
}

function init(){
    userChoice.innerText = "";
    compChoice.innerText = "";
    remove();
}

init();