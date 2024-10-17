// Collect and store the two scores in variables
let humanScore = 0
let computerScore = 0



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
        
        There is more going on of course. This function also includes nested if statements


*/

function playGame() {

    let outcome = playRound()

    if (outcome === "human") {
        ++humanScore

        if (humanScore == 3) {
            return console.log("YOU WON THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
    
        } else if (computerScore == 3) {
            return console.log("YOU LOST THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
            
        } else {
            console.log("----------------")
            console.log("User: " + humanScore + " - Computer: " + computerScore)
            console.log("----------------")
            return playGame()
        }
    } else if (outcome === "computer") {
        ++computerScore
        
        if (humanScore == 3) {
            console.log("----------------")
            return console.log("YOU WON THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
    
        } else if (computerScore == 3) {
            console.log("----------------")
            return console.log("YOU LOST THE GAME!!! Score is User: " + humanScore + " - Computer: " + computerScore)
            
        } else {
            console.log("----------------")
            console.log("User: " + humanScore + " - Computer: " + computerScore)
            console.log("----------------")
            return playGame()
        }  

    } else if (outcome === "tie") {
        console.log("----------------")
        console.log("User: " + humanScore + " - Computer: " + computerScore)
        console.log("----------------")
        return playGame()   
    }
}
    
    

    
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

        console.log("You beat " + computerChoice + " with " + humanChoice + "!!!")
        console.log("You WON this round!")
        return "human"

    } else if (humanChoice === computerChoice) { 
        console.log("You both chose " + computerChoice + "!!!")
        console.log("You TIED this round!")
        return "tie"
                
    } else {
        console.log("Computer beat " + humanChoice + " with " + computerChoice + "!!!")
        console.log("You LOST this round!")
        return "computer"
    }    
}




//------------------
// GET HUMAN CHOICE
//------------------


//getHumanChoice function returns either "rock", "paper", or "scissors"

function getHumanChoice(choice) {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice")    // Prompt user to play
    
    // if (promptInput === null) {                  //CANCEL BUTTON
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









