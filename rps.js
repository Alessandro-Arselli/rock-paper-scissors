 //get the computers choice, randomly return rock paper or scisssors
 function getComputerChoice(){
    let choice;
    let rock = "rock";
    let paper ="paper";
    let scissors = "scissors";
    let rand = Math.random()*2;
    let roundedRand = Math.round(rand);
    

    if(roundedRand == 0){

        choice = rock;
    }
    else if(roundedRand == 1){
        choice = paper;
    }
    else if(roundedRand == 2){
        choice = scissors;
    }

    
    return choice;
}

function game(){
    for (let i = 0; i<5; i++){
       let playerChoice = prompt("rock, paper or scissors?");


        gameRun(playerChoice,getComputerChoice());

    }

}
function gameRun(playerSelection,computerSelection){
    
    lowerPlayerSelection = playerSelection.toLowerCase();
    console.log("Player choice: " +lowerPlayerSelection);
    console.log("Computer choice: "+computerSelection);
    if(lowerPlayerSelection =="rock" && computerSelection == "rock")
    {   console.log("It's a tie!");

    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "paper"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "scissors"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="rock"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="paper"){
        console.log("It's a tie!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="scissors"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="rock"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="paper"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="scissors"){
        console.log("It's a tie!")
    }
   
    

}


//write a function that plays a round of rock paper scissors
game();

