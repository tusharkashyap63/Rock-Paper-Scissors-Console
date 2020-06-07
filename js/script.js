function computerPlay() {                              		//function to decide what computer plays
	let res = '';
	let rand = (Math.floor(Math.random()*3)+1);		   		//generates a random number between 1,2 or 3
	if(rand == 1){
		res = "Rock";
	}
	else if(rand == 2){
		res = "Paper";								   		//assigns a name to each number
	}
	else{
		res = "Scissors";
	}
	return res;
}

function playRound(playerSelection, computerSelection){		//function to play one round, takes in computer and player selection and return result
	let result = '';
	let playerChoice = playerSelection.toUpperCase();		//Coverts the player choice to Uppercase to compare it with uppercase letters making
	if(playerChoice == "ROCK"){								//what player enters case insensitive.	
		if(computerSelection == "Rock"){
			result = "Draw";
		}
		else if(computerSelection == "Paper"){
			result = "You lose! Rock loses to paper";
		}
		else{
			result = "You win! Rock beats Scissors";
		}
	}

	else if(playerChoice == "PAPER"){
		if(computerSelection == "Rock"){
			result = "You win! Paper beats Rock";
		}
		else if(computerSelection == "Paper"){
			result = "Draw";
		}
		else{
			result = "You lose! Paper loses to Scissors";
		}
	}

	else if(playerChoice == "SCISSORS"){					
		if(computerSelection == "Rock"){
			result = "You lose! Scissors loses to Rock";
		}
		else if(computerSelection == "Paper"){
			result = "You win! Scissors beat Paper";
		}
		else{
			result = "Draw";
		}
	}
	return result;											//Returns the result of 1 round.
}

function game() {											//function to play a set number of rounds
	let rounds = prompt("Number of Rounds?");
	let score = 0;											//Counters for keeping player and
	let compScore = 0;										//computer score.
	let msg = '';
	for(let i=1; i<=rounds; i++){
		let playerSelection = prompt("Select from Rock, Paper and Scissors");
		let computerSelection=computerPlay();
		let resultOneRound = playRound(playerSelection, computerSelection);    //Sends both the player and computer selection and
		if(resultOneRound.substring(4,7) == "win"){							   //stores the result message returned in resultOneRound.
			console.log(resultOneRound);
			score++;
		}
		else if(resultOneRound.substring(4,8) == "lose"){					   //Makes a substring of resultOneRound message.
			console.log(resultOneRound);
			compScore++;
		}
		else{
			console.log(resultOneRound);
		}
	}
	if(score>compScore){
		msg = "You Win! The score is: " + score + " to " + compScore;
		console.log(msg);
	}
	else if(score<compScore){
		msg = "You lose! The score is: " + score + " to " + compScore;
		console.log(msg);
	}
	else{
		msg = "Draw! The score is: " + score + " to " + compScore;
		console.log(msg);
	}
}

game();