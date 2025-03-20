const signs = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const computerScoreTable = document.getElementById("playerScore");
const playerScoreTable = document.getElementById("computerScore");
const playerButtons = document.querySelectorAll(".rpsButton");
const computerButtons = document.querySelectorAll(".computerButton");

function gamestart(button) {

const choosedSign = String(button.id);
const computerChoice =  String(getRandomSign());
let result;
console.log("choosedSign = " + choosedSign);
if (choosedSign == computerChoice){
    result = "draw";
} else

if ( choosedSign == "rock" && computerChoice == "paper"){
    result = "loose";
} else if

    ( choosedSign == "rock" && computerChoice == "scissors"){
    result = "win";
} else if

   ( choosedSign == "scissors" && computerChoice == "paper"){
    result = "win";
} else if

    ( choosedSign == "scissors" && computerChoice == "rock"){
    result = "loose";
} else if

    ( choosedSign == "paper" && computerChoice == "rock"){
    result = "win";
} else

if ( choosedSign == "paper" && computerChoice == "scissors"){
    result = "loose";
};


console.log("choosedSign = " + choosedSign);
console.log("computerChoice = " + computerChoice);
console.log(result);

if ( result == "win") {
 playerScore++;
 };

if ( result == "loose") {
 computerScore++;
 };

computerScoreTable.innerText = computerScore;
playerScoreTable.innerText = playerScore;


playerButtons.forEach(button => {

    button.style.background = "none";


    });
    button.style.background = "red";

computerButtons.forEach(button => {

    button.style.background = "none";
    console.log("net");

    });
switch (computerChoice){
case "rock":
document.getElementById("computerRock").style.background = "red";
console.log("da");
break;

case "paper":
document.getElementById("computerPaper").style.background = "red";
console.log("da");
break;

case "scissors":
document.getElementById("computerScissors").style.background = "red";
console.log("da");
break;

    }
}




function getRandomSign() {
  const randomIndex = Math.floor(Math.random() * signs.length);
  return signs[randomIndex];
}