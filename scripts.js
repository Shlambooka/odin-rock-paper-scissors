/*
My program
Step 1:
    - get the human choice as a text string
        - I do this by:
            prompting a text input
    - then I change the prompt to lower case
        - I do this by:
            using the .toLowerCase() method inside the function
    - once the text is lowercase, I can check to see if the text is the correct input
    



*/
//------------------//
// SCORES
//------------------//


// Collect and store the two scores in variables
const humanScore = 0;
//console.log("Computer score = " + humanScore);

const computerScore = 0;
//console.log("Your score = " + humanScore);

console.log("--------------------");


//------------------//
// START GAME
//------------------//

checkInput();

//------------------
// GET HUMAN CHOICE
//------------------




//RUN ORDER: 1
// Checks text input to make sure it is rock, paper or scissors.
// Calls the getHumanChoice() within it.
function checkInput(text) {     
    let input = getHumanChoice(); // FUNCTION CALL
    console.log("checkInput returns: " + input);
    if ((input === "rock") 
        || (input === "scissors")
        || (input === "paper") ) {
        console.log("rock, paper, or scissors chosen");
      } else {
        console.log("run checkInput again");
        checkInput()
      }
}

    //RUN ORDER: 2
    function getHumanChoice(choice) {   // Receive user input
        let promptInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play
        let humanChoice = promptInput.toLowerCase(); 
        console.log("getHumanChoice() returns: " + humanChoice);
        return humanChoice;
    }





//------------------//
// GET COMPUTER CHOICE - COMPLETE
//------------------//

function getComputerChoice(randomNumToString) {        

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

console.log("getComputerChoice() returns: " + getComputerChoice());

//------------------//
// HUMAN & COMPUTER COMPARE
//------------------//










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

