//DOM elements
var $newGameButton = document.getElementById("start-button");
var $placeholder = document.getElementById("placeholder");
var $guessedLetters = document.getElementById("guessed_sofar");
var $guessesLeft = document.getElementById("guesses_left");
var $wins = document.getElementById("correct_wins");
var $losses = document.getElementById("wrong_losses");

//Variables

var wordBank = ["nirvana", "metallica", "pearl Jam", "black sabbath", "primus", "garbage", "foo fighters", "guns n roses"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedWord ='';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


//game function

//reset all game info
function newGame() {
	
	gameRunning = true;
	guessesLeft = 10;
	guessedLetterBank = [];
	incorrectLetterBank = [];
	pickedWordPlaceholderArr = [];
    
	
	//pick a new wird from wordBank
	pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	//create placeholders out of new word 
	
	for (var i=0; i < pickedWord.length; i++){
		
		if(pickedWord[i]== " "){
			
			pickedWordPlaceholderArr.push(" ");
		} else {
			pickedWordPlaceholderArr.push("_");
		}
	}
	
	//Write it all to the DOM
	$guessesLeft.textContent = guessesLeft;
	$placeholder.textContent = pickedWordPlaceholderArr.join("");
	$guessedLetters.textContent = incorrectLetterBank;
}


//letters guessed function
function leterGuess(letter) {
	
	
	
	if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
		//run Game logic
		guessedLetterBank.push(letter);
		
		//check if guessed letter is in picked wordBank
		
		for (var i = 0; i < pickedWord.length; i++) {
			//convert both values to lower case for comparison
			if (pickedWord[i].toLowerCase() === letter.toLowerCase()){
				//if a match, replace character in placeholder for the letter
				pickedWordPlaceholderArr[i] = pickedWord[i];
			}
		}
		
		$placeholder.textContent = pickedWordPlaceholderArr.join("");
		checkIncorrect(letter);
	}
	
	else {
		if (gameRunning === false) {
			alert ("The game is not running")
		} else {
			alert ("You already guessed this letter! Try again.");
		}
	}
	
}

//check for incorrect letter
	function checkIncorrect(letter){
		//Check to see if letter did not make it into the placeholder / incorrect guessed
		if
		(pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
			//Decrement guesses
			guessesLeft--;
			//Add incorrect letter to incorrectLetterBank
			incorrectLetterBank.push(letter);
			//Write new bank of incorrect letters guessed to DOM
			$guessedLetters.textContent = incorrectLetterBank.join(" ");
			//Write new amount of guesses left to DOM
			$guessesLeft.textContent = guessesLeft;			
		}
		checkLoss();
		
	}


//check losses function

function checkLoss(){
	
	if (guessesLeft === 0){
		losses++;
		gameRunning = false;
		$losses.textContent = losses;
		$placeholder.textContent = pickedWord;
		
	}
	checkWin();
	
}


//check wins function

function checkWin(){
	if (pickedWord.toLowerCase() === pickedWordPlaceholderArr.join("").toLowerCase())
	{
		wins++;
		gameRunning = false;
		$wins.textContent = wins;
	}
	
}


//event listener for button
$newGameButton.addEventListener("click", newGame);

//add onkeyup event to trigger letterguess

document.onkeyup = function(event){
	if (event.keyCode >= 65 && event.keyCode <= 90){
		
		leterGuess(event.key);
		
	}
}