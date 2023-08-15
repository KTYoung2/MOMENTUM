const gameForm = document.querySelector(".game-form");
const gameInput = document.querySelector(".game-form input");
const machineNumber = document.querySelector(".machine-num");
const userNumber = document.querySelector(".user-num");
const userGuess = document.querySelector("#user-guess");
const greeting = document.querySelector("#greeting");




function onGame(e) {
    e.preventDefault();
    const userNum = userNumber.value;
    const machineNum = Math.ceil(Math.random() * (parseInt(userNum) + parseInt(1)));
    userGuess.innerText = `You chose : ${userNum}, the machine chose : ${machineNum}`;  
    if(userNum === machineNum ) {
        greeting.innerText = "YOU WON :)";
    } else {
        greeting.innerText = "lost :( ";
    }
};




gameForm.addEventListener("submit", onGame);
