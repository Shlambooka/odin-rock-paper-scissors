
//------------------//
// SCORES
//------------------//

// Collect and store the two scores in variables
const humanScore = 0;
console.log("Computer score = " + humanScore);
const computerScore = 0;
console.log("Your score = " + computerScore);

console.log("--------------------");


//------------------//
// START GAME
//------------------//

playRound()
//getHumanChoice()
//getComputerChoice()


//------------------//
// PLAY ROUND
//------------------//


function playRound(humanChoice, computerChoice) {
    let x = humanScore; 
    let y = computerScore;

    if (   (humanChoice === "rock" && computerChoice === "scissors")    // IF winning condition, then display winner text and add point
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")    ) {

        console.log("Round 1: WIN! User: " + ++x + ", Computer: " + y + ", You beat " + computerChoice + " with " + humanChoice + "!!!");
        return ++x;

    } else if (humanChoice === computerChoice && humanChoice !== undefined) {  //I had to add in undefined because the if statement was running when the arguments were still undefined
        
        return console.log("Round 1: TIE! Computer chose " + computerChoice + " and you chose " + humanChoice + "!!!");
        
    } else if (humanChoice === undefined && computerChoice === undefined) {     // See above, It seems to want to return something...
        
        return console.log("LET'S PLAY!");
        
    } else {
        
        return console.log("Round 1: LOSE! User: " + x + ", Computer: " + ++y + ", Computer beat " + humanChoice + " with " + computerChoice + "!!!");
    }    
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



//------------------
// GET HUMAN CHOICE
//------------------


function getHumanChoice(choice) {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice");    // Prompt user to play
    let humanChoice = promptInput.toLowerCase();    // Transforms text to lower case

    if ((humanChoice === "rock")            // IF rock, paper OR scissors, return the text input
    || (humanChoice === "scissors")
    || (humanChoice === "paper") ) {

    // console.log("getHumanChoice returns: " + humanChoice); 
    return humanChoice;

    } else {                                // ELSE call the function again to prompt input
    console.log("Input Failed: Run getHumanChoice again");
    getHumanChoice()
    }
}


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
        // console.log("getComputerChoice() returns: rock");           
        return("rock");  
    } else if (x < 66) {        // Paper < 66
        let x = "paper"; 
        // console.log("getComputerChoice() returns: paper");  
        return("paper");
    } else {                    // Else Scissors
        let x = "scissors"; 
        // console.log("getComputerChoice() returns: scissors"); 
        return("scissors");
    }                
}


//------------------//
// HUMAN & COMPUTER COMPARE
//------------------//









