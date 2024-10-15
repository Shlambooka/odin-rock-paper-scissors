
//------------------//
// SCORES
//------------------//

const humanScore = 0;
console.log("Computer score = " + humanScore);

const computerScore = 0;
console.log("Your score = " + humanScore);



//------------------//
// COMPUTER CHOICE
//------------------//

function getComputerChoice(text) {        
   
    // Create a random number between 0 and 1, multiply by 100 to get a whole number between 0 and 100
    let compChoice = Math.floor(Math.random() * 100);
    //console.log(compChoice);

    // Assign random number to string
    if (compChoice < 33) {               // Rock < 33
        let compChoice = "Rock";
        console.log("Computer chose rock.");             
        return(compChoice);  
    } else if (compChoice < 66) {        // Paper < 66
        let compChoice = "Paper";
        console.log("Computer chose paper.");   
        return(compChoice);
    } else {                    // Scissors
        let compChoice = "Scissors"
        console.log("Computer chose scissors.");   
        return(compChoice);
        
    }                          
}
getComputerChoice();


//------------------//
// HUMAN CHOICE
//------------------//

function getHumanChoice() {

    // Prompt box
    let textInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play

    // Make text input all lowercase letters and hold in "userChoice"
    let userChoice = textInput.toLowerCase();

    // Return treated "userChoice" string
    if (userChoice === "rock") {                // If Rock

        let userChoice = "rock";
        console.log("You chose rock.");
        return("rock");

    } else if (userChoice === "paper") {        // If Else Paper

        let userChoice = "paper";
        console.log("You chose paper.");
        return("paper");

    } else if (userChoice === "scissors") {     // If Else Scissors
        let userChoice = "scissors";
        console.log("You chose scissors.");
        return("scissors");
    
    } else {                                    // Incorrect text input -> Prompt user to play again
        alert("Try again.")
        return(getHumanChoice());
    }



}

getHumanChoice();
