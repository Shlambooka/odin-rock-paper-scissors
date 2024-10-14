


// Create a function named getComputerChoice
function getComputerChoice(text) {        
   
    // Create a random number between 0 and 1, multiply by 100 to get a whole number between 0 and 100
    let x = Math.floor(Math.random() * 100);
    console.log(x);

    // Assign random number to string
    if (x < 33) {               // Rock < 33
        let x = "Rock";
        //alert(x);             
        return(x);  
    } else if (x < 66) {        // Paper < 66
        let x = "Paper";
        //alert(x);
        return(x);
    } else {                    // Scissors
        let x = "Scissors"
        //alert(x);
        return(x);
        
    }                          
}
// getComputerChoice();


// Create a new function called getHumanChoice


