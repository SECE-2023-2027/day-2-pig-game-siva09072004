const rollBtn = document.getElementById("rolldice");
const newGameBtn = document.getElementById("newgame");

const score1El = document.getElementById("numbers");
const score2El = document.getElementById("numbers2");
const current1El = document.getElementById("current");
const current2El = document.getElementById("current2");

let activePlayer = 1;
let currentScore = 0;
let scores = [0, 0];
let gamePlaying = true;


const diceContainer = document.createElement("div");
diceContainer.classList.add("dice-container");

const diceImage = document.createElement("img");
diceImage.style.width = "100px";
diceImage.style.height = "100px";
diceImage.style.objectFit = "contain";

diceContainer.appendChild(diceImage);
document.querySelector(".container").appendChild(diceContainer);


rollBtn.addEventListener("click", () => {
    if (!gamePlaying) return;

    const dice = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${dice}.jpg`;

    if (dice !== 1) {
        currentScore += dice;
        if (activePlayer === 1) {
            current1El.textContent = currentScore;
        } else {
            current2El.textContent = currentScore;
        }
    } else {
        switchPlayer();
    }
});


function switchPlayer() {

    scores[activePlayer - 1] += currentScore;

 
    if (activePlayer === 1) {
        score1El.textContent = scores[0];
        current1El.textContent = 0;
    } else {
        score2El.textContent = scores[1];
        current2El.textContent = 0;
    }

 
    if (scores[activePlayer - 1] >= 20) {
        alert(` Player ${activePlayer} Wins!`);
        gamePlaying = false;
        return;
    }

  
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
}


newGameBtn.addEventListener("click", () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 1;
    gamePlaying = true;

    score1El.textContent = 0;
    score2El.textContent = 0;
    current1El.textContent = 0;
    current2El.textContent = 0;

    diceImage.src = "";
});
