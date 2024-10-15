
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
// START GAME
//------------------//

function play() {
    getHumanChoice();
    getComputerChoice();
}



//------------------
// GET HUMAN CHOICE
//-----------------.

function getHumanChoice() {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play
    let humanChoice = promptInput.toLowerCase(); 
    return humanChoice; // Stores human text input - should be all lowercase
}

let humanChoice = getHumanChoice();
console.log("getHumanChoice() returns: " + humanChoice);

//------------------//
// GET COMPUTER CHOICE - COMPLETE
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

let computerChoice = getComputerChoice();
console.log("getComputerChoice() returns: " + computerChoice);


//------------------//
// HUMAN & COMPUTER COMPARE
//------------------//


function getWinner() {

    if (play() === "rock") {                // If Rock
        return "rock";

    } else if (play() === "paper") {        // If Else Paper
        return "paper" ;

    } else if (play() === "scissors") {     // If Else Scissors
        return "scissors" ;
    
    } else {                                    // Incorrect text input -> Prompt user to play again

//***********************FIX ME************** I only prompt three times
    console.log("getWinner ran and will now play");    
    return play();    
                    
    }
}







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


