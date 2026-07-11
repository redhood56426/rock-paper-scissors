function getComputerChoice(){
    const game = ["Rock" , "Paper", "Scissor"]
    let result;
    let random = Math.floor( Math.random() * 3 + 1 )
    if(random == 1 ){
        result = game[0]
    }
    else if(random == 2){
        result = game[1]
    }
    else{
        result = game[2]
    }

    return result

}

console.log(getComputerChoice())