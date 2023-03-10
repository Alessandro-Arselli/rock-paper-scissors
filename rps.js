let playerSelectionDiv = document.querySelector('#playerChoice');
let computerSelectionDiv =document.querySelector('#computerChoice');
 
 
 //get the computers choice, randomly return rock paper or scisssors
 
 function getComputerChoice(){
    let choice;
    let rock = "Rock";
    let paper ="Paper";
    let scissors = "Scissors";
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

function buttonText(button){
    const buttonTxt = button.textContent;
    
    console.log(`The button text is: ${buttonTxt}`);
    return buttonTxt;
     
};
 


/*function game(){
    for (let i = 0; i<5; i++){
       let playerChoice = prompt("rock, paper or scissors?");


        gameRun(playerChoice,getComputerChoice());

    }

}*/
 
 
 

let buttons = document.querySelectorAll('#btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {

      playerChoice = buttonText(button);
      computerSelection = getComputerChoice();
      gameRun(playerChoice,computerSelection);
      

    });
  });


  // Add event listener to each button


function gameRun(playerSelection,computerSelection){
    
    lowerPlayerSelection = playerSelection.toLowerCase();
    playerSelectionDiv.innerText = "Your choice: " + playerSelection;
   


    console.log("Player choice: " +lowerPlayerSelection);
    computerSelectionDiv.innerText = "Computer's choice: " + computerSelection;

    console.log("Computer choice: "+computerSelection);
    if(lowerPlayerSelection =="rock" && computerSelection == "Rock")
    {   console.log("It's a tie!");

    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "Paper"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "Scissors"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Rock"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Paper"){
        console.log("It's a tie!")
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Scissors"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Rock"){
        console.log("You lose!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Paper"){
        console.log("You win!")
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Scissors"){
        console.log("It's a tie!")
    }
   
    

}


//write a function that plays a round of rock paper scissors
//game();

