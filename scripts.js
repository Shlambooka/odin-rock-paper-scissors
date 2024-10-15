
//------------------//
// SCORES
//------------------//

// Collect and store the two scores in variables
const humanScore = 0;
console.log("Computer score = " + humanScore);

const computerScore = 0;
console.log("Your score = " + humanScore);

console.log("--------------------");


//------------------//
// PROMPT TO PLAY
//------------------//


function promptToPlay() {
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play
    return promptInput; // Stores human text input
}

let textInput = promptToPlay(); //Stores human text input into variable "textInput"
console.log("promptToPlay() returns: " + textInput);


//------------------//
// GAME PLAY
//------------------//

getHumanChoice();
getComputerChoice();



//------------------//
// PROBLEM SOLVING
//------------------//


// PROBLEM 1: How do I best call the prompt box for human choice?
// If I have it in the function, it always prompts
// If I have it out of the function, I need a way to deliver the human choice
// to the getHumanChoice() function.
// How do function returns work with strings?


// whoWon();

// function whoWon() {
//     // print who won

//     //let human = getHumanChoice();
//     //let computer = getComputerChoice

//     if (getHumanChoice() === "rock" && getComputerChoice() === "scissors") {
//         //|| getHumanChoice() === "paper" && getComputerChoice() === "rock"
//         //|| getHumanChoice() === "scissors" && getComputerChoice() === "paper") {
//         console.log("You won this round!");
//         return("win");
//     } else {
//         console.log("You lost this round!");
//         return("lose");
//     }
// }
// Create function whoWon()
    // If computer won, add 1 point to computer score
    // If player won, add one point to player score

// Display them to the console



//------------------//
// HUMAN CHOICE - IN PROGRESS
//------------------//

function getHumanChoice() {

    // Make text input all lowercase letters and hold in "userChoice"
    let y = textInput.toLowerCase();

    // Return treated "userChoice" string
    if (y === "rock") {                // If Rock
        return "rock";

    } else if (y === "paper") {        // If Else Paper
        return "paper" ;

    } else if (y === "scissors") {     // If Else Scissors
        return "scissors" ;
    
    } else {                                    // Incorrect text input -> Prompt user to play again

//***********************FIX ME************** I only prompt one time
        alert("Try again.")
        return promptToPlay();                    
    }
}

let humanChoice = getHumanChoice();
console.log("getHumanChoice() returns: " + humanChoice);




//------------------//
// COMPUTER CHOICE - COMPLETE
//------------------//

function getComputerChoice() {        

    // Create a random number between 0 and 1, multiply by 100 to get a whole number between 0 and 100
    let x = Math.floor(Math.random() * 100);
    //console.log(compChoice);

    // Assign random number to string
    if (x < 33) {               // Rock < 33
        let x = "rock";            
        return("rock");  
    } else if (x < 66) {        // Paper < 66
        let x = "paper";   
        return("paper");
    } else {                    // Scissors
        let x = "scissors"  
        return("scissors");
    }                 
}

let compChoice = getComputerChoice();
console.log("getComputerChoice() returns: " + compChoice);



