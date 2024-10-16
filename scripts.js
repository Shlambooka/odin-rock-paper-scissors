//------------------//
// SCORES
//------------------//

// Collect and store the two scores in variables
const humanScore = 0;
console.log("Computer score = " + "PLACEHOLDER");
const computerScore = 0;
console.log("Your score = " + "PLACEHOLDER");

console.log("--------------------");


//------------------//
// START GAME
//------------------//

getHumanChoice()




//------------------
// GET HUMAN CHOICE
//------------------


function getHumanChoice(choice) {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play
    let humanChoice = promptInput.toLowerCase(); 

    if ((humanChoice === "rock") 
    || (humanChoice === "scissors")
    || (humanChoice === "paper") ) {

    console.log("getHumanChoice returns: " + humanChoice);
    return humanChoice;

    } else {
    console.log("Input Failed: Run getHumanChoice again");
    getHumanChoice()
    }
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










//OLD CODE

/*
//RUN ORDER: 1
// Checks text input to make sure it is rock, paper or scissors.
// Calls the getHumanChoice() within it.
function checkInput(text) {     
    let input = getHumanChoice(); // FUNCTION CALL getHumanChoice()
    console.log("checkInput returns: " + input);
 
    if ((input === "rock") 
        || (input === "scissors")
        || (input === "paper") ) {
        console.log("User chose: " + input);
        return input;
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


*/
