
//------------------//
// SCORES
//------------------//

// Collect and store the two scores in variables
let humanScore = 0;
console.log("Computer score = " + humanScore)
let computerScore = 0;
console.log("Your score = " + computerScore)

console.log("--------------------")


//------------------//
// START GAME
//------------------//

playGame()



//------------------//
// PLAY GAME
//------------------//


/*
The addPoint() function adds points to the winner

    addPoint(human, computer) function takes:
            - (x, y)
        from the following function:
            - playRound() 
        and places the number in the variables (respectively):
            - x
            - y
        then counts the number of points up until:
            - count === 5
        then returns:
            - call playRound() to play another round
            - or, ends the game with who won

*/

function playGame() {
    
    let [x, y] = playRound()
    console.log("This is x: " + x + " This is y: " + y)
    let humanScore = x + 1
    let computerScore = y + 1

    if (humanScore < 5) {
        console.log("-------playGame---------")
        console.log("playGame(): humanScore is: " + humanScore)
        
        return [x, y] = playRound()
    } else if (computerScore < 5) {
        console.log("-------playGame---------")
        console.log("playGame(): computerScore is: " + computerScore)
        return [x, y] = playRound()
    } else {
        return console.log("playGame(): END GAME")
    }
 
}



// Need SOMETHING to put into humanScore and computerScore



//------------------//
// PLAY ROUND
//------------------//

/*
The playRound() function determines whether the user won, tied or lost

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
            - user
            - none
            - computer
        then returns the values:
            - [humanPoint, computerPoint]  I'M USING AN ARRAY BECAUSE THAT'S WHAT MAKES SENSE
*/

function playRound(humanSelection, computerSelection) {

    const humanChoice = getHumanChoice()      // CALL getHumanChoice function and store result in humanSelection
    const computerChoice = getComputerChoice() // CALL getComputerChoice function and store result in computerSelection
    
    let x = humanScore
    let y = computerScore


    if (   (humanChoice === "rock" && computerChoice === "scissors")    // IF winning condition, then display winner text and add point
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")    ) {

        console.log("playRound(): You beat " + computerChoice + " with " + humanChoice + "!!!")
        console.log("playRound(): Round 1: YOU WON!")
        console.log("---")
        ++x
        console.log("USER: " + x + " COMP: " + y)
        return [x, y]

    } else if (humanChoice === computerChoice) { 
        console.log("playRound(): You both chose " + computerChoice + "!!!")
        console.log("playRound(): Round 1: YOU TIED!")
        console.log("--------------------")
        return playRound()
                
    } else {
        console.log("playRound(): Computer beat " + humanChoice + " with " + computerChoice + "!!!")
        console.log("playRound(): Round 1: LOST!")
        console.log("---")
        ++y
        console.log("USER: " + x + " COMP: " + y)
        return [x, y]
    }    
}




//------------------
// GET HUMAN CHOICE
//------------------


//getHumanChoice function returns either "rock", "paper", or "scissors"

function getHumanChoice(choice) {   // Receive user input
    let promptInput = prompt("Rock, paper or scissors?", "Enter your choice")    // Prompt user to play
    
    if (promptInput === null) {
    alert("Don't give up! Just keep trying!")
    getHumanChoice()
    } else {
    
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
}


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









