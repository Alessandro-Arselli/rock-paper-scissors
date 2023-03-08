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

function gameRun(playerSelection,computerSelection){
    console.log("Player choice: " +playerSelection);
    console.log("Computer choice: "+computerSelection);
    if(playerSelection =="rock" && computerSelection == "rock")
    {   console.log("It's a tie!");

    }
    else if(playerSelection =="rock" && computerSelection == "paper"){
        console.log("You lose!")
    }
    else if(playerSelection =="rock" && computerSelection == "scissors"){
        console.log("You win!")
    }
    else if(playerSelection =="paper" && computerSelection =="rock"){
        console.log("You win!")
    }
    else if(playerSelection =="paper" && computerSelection =="paper"){
        console.log("It's a tie!")
    }
    else if(playerSelection =="paper" && computerSelection =="scissors"){
        console.log("You lose!")
    }
    else if(playerSelection =="scissors" && computerSelection =="rock"){
        console.log("You lose!")
    }
    else if(playerSelection =="scissors" && computerSelection =="paper"){
        console.log("You win!")
    }
    else if(playerSelection =="scissors" && computerSelection =="scissors"){
        console.log("It's a tie!")
    }
   
    

}

//write a function that plays a round of rock paper scissors
//alert("Hello");


gameRun("rock",getComputerChoice());