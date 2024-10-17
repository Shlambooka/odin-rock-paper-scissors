
//------------------//
// SCORES
//------------------//

// Collect and store the two scores in variables
let humanScore = 0
let computerScore = 0



//------------------//
// START GAME
//------------------//
playGame()


//------------------//
// PLAY GAME
//------------------//


/*
The playGame() function adds one point to the total score

    playGame() function takes:
            - "human"
            - "computer"
            - "tie"
        from the following function:
            -playRound()
        and places the string in the variable:
            -outcome
        then compares using an if statement to place score in one of the following the variables:
            - computerScore 
            - humanScore 
        then returns:
            - the total score


*/

function playGame() {

    let outcome = playRound()

    if (outcome === "human") {
        console.log("playGame() === human")  
        ++humanScore

        if (humanScore == 2) {
            return console.log("YOU WON THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
    
        } else if (computerScore == 2) {
            return console.log("YOU LOST THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
            
        } else {

        console.log("----------------")
        console.log("User: " + humanScore + " - Computer: " + computerScore)
        console.log("----------------")

        return playGame()
        
        }

    } else if (outcome === "computer") {
            console.log("playGame() === computer")
        ++computerScore
        
        if (humanScore == 2) {
            return console.log("YOU WON THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
    
        } else if (computerScore == 2) {
            return console.log("YOU LOST THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
            
        } else {

        console.log("----------------")
        console.log("User: " + humanScore + " - Computer: " + computerScore)
        console.log("----------------")

        return playGame()
        
        }  

    } else if (outcome === "tie") {
        console.log("playGame() === tie")
        
        console.log("----------------")
        console.log("User: " + humanScore + " - Computer: " + computerScore)
        console.log("----------------")
        
        return playGame()   

        }
    }
    
    

    

    




// Need SOMETHING to put into humanScore and computerScore



//------------------//
// PLAY ROUND
//------------------//

/*
The playRound() function determines who won the round and returns a string

    playRound() function takes:
            - "rock"
            - "paper"
            - "scissors" 
        from the following two functions:
            - getHumanChoice() 
            - getComputerChoice()
        and places the string in the variables (respectively):
            - humanChoice
            - computerChoice
        then compares the two variables to determine whether the point goes to:
            - human
            - none
            - computer
        then returns the string:
            - "human"
            - "computer"
            - "tie"
*/

function playRound(humanSelection, computerSelection) {

    const humanChoice = getHumanChoice()      // CALL getHumanChoice function and store result in humanSelection
    const computerChoice = getComputerChoice() // CALL getComputerChoice function and store result in computerSelection

    if (   (humanChoice === "rock" && computerChoice === "scissors")    // IF winning condition, then display winner text and add point
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")    ) {

        //console.log("playRound(): You beat " + computerChoice + " with " + humanChoice + "!!!")
        console.log("playRound(): YOU WON!")
        return "human"

    } else if (humanChoice === computerChoice) { 
        //console.log("playRound(): You both chose " + computerChoice + "!!!")
        console.log("playRound(): YOU TIED!")
        return "tie"
                
    } else {
        //console.log("playRound(): Computer beat " + humanChoice + " with " + computerChoice + "!!!")
        console.log("playRound(): LOST!")
        return "computer"
    }    
}




//------------------
// GET HUMAN CHOICE
//------------------


//getHumanChoice function returns either "rock", "paper", or "scissors"

function getHumanChoice(choice) {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice")    // Prompt user to play
    
    // if (promptInput === null) {
    // alert("Don't give up! Just keep trying!")
    // getHumanChoice()
    // } else {
    
    let humanChoice = promptInput.toLowerCase()    // Transforms text to lower case

    if ((humanChoice === "rock")            // IF rock, paper OR scissors, return the text input
    || (humanChoice === "scissors")
    || (humanChoice === "paper") ) {

    // console.log("getHumanChoice returns: " + humanChoice) 
    return humanChoice

    } else {                                // ELSE call the function again to prompt input
    console.log("Input Failed: Run getHumanChoice again")
    getHumanChoice()
    }
}
//} <----- this is for the cancel button


//------------------//
// GET COMPUTER CHOICE - COMPLETE
//------------------//

//getComputerChoice function returns either "rock", "paper", or "scissors"

function getComputerChoice() {        

    // Create a random number between 0 and 1, multiply by 100 to get a whole number between 0 and 100
    let x = Math.floor(Math.random() * 100)
    //console.log(compChoice)

    // Assign random number to string
    if (x < 33) {               // Rock < 33
        let x = "rock" 
        // console.log("getComputerChoice() returns: rock")          
        return("rock")  
    } else if (x < 66) {        // Paper < 66
        let x = "paper"
        // console.log("getComputerChoice() returns: paper")
        return("paper")
    } else {                    // Else Scissors
        let x = "scissors" 
        // console.log("getComputerChoice() returns: scissors")
        return("scissors")
    }                
}


//------------------//
// HUMAN & COMPUTER COMPARE
//------------------//









