let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const game = ["rock", "paper", "scissors"]
    let result;
    let random = Math.floor(Math.random() * 3 + 1)
    if (random == 1) {
        result = game[0]
    }
    else if (random == 2) {
        result = game[1]
    }
    else {
        result = game[2]
    }

    return result

}

function getHumanChoice() {
    let input = prompt("Enter Your Choice : Rock , Paper , Scissors")
    return input.toLowerCase().trim()
}

function playRound(humanChoice, computerChoice) {
   
    if(humanChoice == computerChoice){
        console.log("It's A draw")
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
      else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
      else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
      else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
       else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
       else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
    else{
        console.log("You Choosed Something Wrong")
    }
    

} 

playRound(getHumanChoice(),getComputerChoice())
