/* Buttons variables */

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');





/* Buttons listeners */

rockBtn.addEventListener('click', meRock);
paperBtn.addEventListener('click', mePaper);
scissorsBtn.addEventListener('click', meScissors);

/* Other variables */

const compWeapons = ['rock', 'paper', 'scissors'];

let compResult;
let compPlayResult = document.querySelector('.compPlayResult');
let myResult;
let score = document.querySelector('.result');
let myScore = 0;
let compScore = 0;

/* Scoresheet variables */

let myScoreTable = document.querySelector('.my_points');
let compScoreTable = document.querySelector('.comp_points');

/* Reactions to player choice */
function meRock () {
    myResult = 'rock';
    compPlay();
}

function mePaper () {
    myResult = 'paper';
    compPlay();
}

function meScissors () {
    myResult = 'scissors';
    compPlay();
}

/* Computers random result */

function compPlay () {
    let random = Math.floor(Math.random() * compWeapons.length);
    compResult = compWeapons[random];
    compPlayResult.innerHTML = compResult;
    compareResult();
}

/* Result comparision */

function compareResult () {
    if (myResult === compResult) {
        score.innerHTML = `${myResult} equals ${compResult} so it's draw`;
    } 
    
    else if (myResult == 'scissors' && compResult == 'paper') {
        score.innerHTML = `${myResult} beats ${compResult}, you win!`;
        myScore ++ ;
        myScoreTable.innerHTML = myScore;
    } 
    
    else if (myResult == 'scissors' && compResult == 'rock') {
        score.innerHTML = `${compResult} beats ${myResult}, you loose!`;
        compScore ++;
        compScoreTable.innerHTML = compScore;
    }



    else if (myResult == 'rock' && compResult == 'scissors') {
        score.innerHTML = `${myResult} beats ${compResult}, you win!`;
        myScore ++;
        myScoreTable.innerHTML = myScore;
    } 
    
    else if (myResult == 'rock' && compResult == 'paper') {
        score.innerHTML = `${compResult} beats ${myResult}, you loose!`;
        compScore ++;
        compScoreTable.innerHTML = compScore;
    }



    else if (myResult == 'paper' && compResult == 'rock') {
        score.innerHTML = `${myResult} beats ${compResult}, you win!`;
        myScore ++;
        myScoreTable.innerHTML = myScore;
    } 
    
    else if (myResult == 'paper' && compResult == 'scissors') {
        score.innerHTML = `${compResult} beats ${myResult}, you loose!`;
        compScore ++;
        compScoreTable.innerHTML = compScore;
    }

/* Checking if someone win the game */

    if (myScore == 5) {
        myWin();
    };

    if (compScore == 5) {
        compWin();
    };
}

/* Winning the Game */

let victoryPage = document.querySelector('.victory');

function myWin () {
    victoryPage.classList.add('visible');
    document.querySelector('.victory').innerHTML = 'You win!';
    
}

function compWin () {
    victoryPage.classList.add('visible');
    document.querySelector('.victory').innerHTML = 'You loose!';
    
}