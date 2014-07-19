var countClicks = 0; // Counts the number of times the function buttonClick() runs.
var tempBestScore = 0; // Best score in current session.
if (!localStorage.getItem('bestscore')) {
var bestScore = 1000; // If there is no best score, set its value to 1000
}
else if (localStorage.getItem('bestscore')) {
	var bestScore = localStorage.getItem('bestscore'); //if there is already a score saved, get it's value
}

var numberComputer = Math.floor(Math.random() * 100 + 1);

document.getElementById("bestscorevalue");
document.getElementById("input");
document.getElementById("message");
document.getElementById("message2");

if (!localStorage.getItem('bestscore')) { // Check if user has a best score or not.
	bestscorevalue.textContent = "You don't have a Best Score yet.";
}
else {
	bestscorevalue.textContent = "Your Best Score is " + localStorage.getItem('bestscore');
}

function buttonClick() { // Click to guess button function
	numberUser = document.getElementById("guess").value;

		if (isNaN(numberUser) || numberUser == "" || numberUser > 100 || numberUser < 0) { // Filter for invalid input
			message.textContent = "Please enter a valid number.";
		}
		else {
			countClicks++; // Counter for tracking the number of tries/clicks
			switch(true) {
				case(numberUser == numberComputer && countClicks == 1): // Right guess in first try
				input.innerHTML = "<button onclick='window.location.reload()'>Start New Game</button>";
				message.textContent = "You guessed right after First try.";
				message2.innerHTML = "<h3>Here is your Internet Cookie:</h3><br><img src='images/cookie.png' alt='Internet Cookie'/>";
				break;
				case(numberUser == numberComputer && countClicks > 1): // Right guess in more than one try
				input.innerHTML = "<button onclick='window.location.reload()'>Start New Game</button>";
				message.textContent = "You guessed right after " + countClicks + " tries.";
				message2.textContent = "";
				break;
				case(numberUser < numberComputer): // Guessing lower
				message.textContent = "You are guessing too low.";
				message2.textContent = "You have made " + countClicks + " incorrect guesses.";
				break;
				case(numberUser > numberComputer): // Guessing higher
				message.textContent = "You are guessing too high.";
				message2.textContent = "You have made " + countClicks + " incorrect guesses.";
				break;
				default:
				message.textContent = "Oops! there seems to be some error.";
			}
		}

if ( numberUser == numberComputer) {  // Adding temporary best score if the guess is right
	tempBestScore = countClicks;
}

if (bestScore >= tempBestScore && numberUser == numberComputer) { // If the temporary best score is lower in current session, make it the best score
	bestScore = tempBestScore;
	localStorage.setItem('bestscore', bestScore);  // Save the best score in local storage
}
}