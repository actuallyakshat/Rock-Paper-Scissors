const userChoice = document.querySelector(".user-chose");
const compChoice = document.querySelector(".comp-chose");
const rock = document.querySelector(".button1");
const paper = document.querySelector(".button2");
const scissor = document.querySelector(".button3");
const finalResult = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const resetButton = document.querySelector(".reset");
let usercurrentScore = 0;
let compcurrentScore = 0;
init();

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
    usercurrentScore = 0;
    compcurrentScore = 0;
    userScore.innerText = `${usercurrentScore}`;
    compScore.innerText = `${compcurrentScore}`;
}

rock.addEventListener('click', ()=>{
    let choice = "rock";
    removeActive();
    rock.classList.add('active');
    whoWon(choice);
    resetButton.style.display = "block";
    console.log("Inside Rock")
    userChoice.innerText = "Rock";
});

paper.addEventListener('click', ()=>{
    let choice = "paper";
    removeActive();
    paper.classList.add('active');
    whoWon(choice);
    resetButton.style.display = "block";
    userChoice.innerText = "Paper";
});

scissor.addEventListener('click', ()=>{
    let choice = "scissor";
    removeActive();
    scissor.classList.add('active');
    whoWon(choice);
    resetButton.style.display = "block";
    userChoice.innerText = "Scissor";
});

resetButton.addEventListener('click', init);

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function whoWon(userSelection){
    let arr = ["rock", "paper", "scissor"];
    let compSelection = arr[getRndInteger(0, 3)];
    let result;
    compChoice.innerText = compSelection;
    if(userSelection == compSelection){
        result = "Match Tied";
    }
    else if(userSelection == "rock"){
        if(compSelection == "paper"){
            result = "Lose";
        }
        else{
            result = "Won"
        }
    }
    else if(userSelection == "paper"){
        if(compSelection == "scissor"){
            result = "Lose";
        }
        else{
            result = "Won"
        }
    }
    else{
        if(compSelection == "rock"){
            result = "Lose";
        }
        else{
            result = "Won"
        }
    }
    if(result == "Won"){
        usercurrentScore = usercurrentScore + 1;
    }
    else if(result == "Lose"){
        compcurrentScore = compcurrentScore + 1;
    }
    finalResult.innerText = `${result}`;
    userScore.innerText = `${usercurrentScore}`;
    compScore.innerText = `${compcurrentScore}`;

}

