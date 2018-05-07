//DOM elements
var DstartButton = document.getElementById("start-button");
var DplaceHolder = document.getElementById("placeholder");
var DguessedSofar = document.getElementById("guessed_sofar");
var DguessesLeft = document.getElementById("guesses_left");
var Dwins = document.getElementById("correct_wins");
var Dlosses = document.getElementById("wrong_losses");

//Variables

var words = ["nirvana", "metallica", "pearl Jam", "black sabbath", "primus", "garbage", "foo fighters"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRuns = false;
var pickedWord ='';
var pickedWordPlaceholder = [];
var guessedLetterArray = [];
var wrongLetterArray = [];


//game function

//reset all game info
function newGame() {

    gameRuns = true;
    guessesLeft = 10;
    guessedLetterArray = [];
    wrongLetterArray = [];
    pickedWordPlaceholder = [];

    //pick a new word
    pickedWord = words[Math.floor(Math.random() * words.length)];

    //create place holders out of new word
    for (var i =  0; i < pickedWord.length; i++){

            if (pickedWord[i] === ' ') {

                    pickedWordPlaceholder.push(' ');
                } else {

                    pickedWordPlaceholder.push('_');
                    }
            }

//write it all to the DOM

DguessesLeft.textContent = guessesLeft;
DplaceHolder.textContent = pickedWordPlaceholder.join('');
DguessedSofar.textContent = wrongLetterArray;

}


//letters guessed function



//check for incorrect letter


//check losses


//check wins


//event listener for button
DstartButton.addEventListener("click", newGame);

//add onkeyup event to trigger letterguess