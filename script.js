const userChoice = document.querySelector(".user-chose");
const compChoice = document.querySelector(".comp-chose");
const rock = document.querySelector(".button1");
const paper = document.querySelector(".button2");
const scissor = document.querySelector(".button3");
const finalResult = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const resetButton = document.querySelector(".reset");

function removeActive(){
    rock.classList.remove('active');
    paper.classList.remove('active');
    scissor.classList.remove('active');
}

function init(){
    userChoice.innerText = "";
    compChoice.innerText = "";
    removeActive();
    finalResult.innerText = "Select Your Choice";
    userScore.innerText = "";
    compScore.innerText = "";
    resetButton.style.display = "none";
}

init();
