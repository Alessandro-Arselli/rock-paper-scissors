let playerSelectionDiv = document.querySelector('#playerChoice');
let playerSelectionImg = document.querySelector('#playerChoiceImg');
let computerSelectionImg = document.querySelector('#computerChoiceImg')
let computerSelectionDiv =document.querySelector('#computerChoice');
let winMessageDiv = document.querySelector('#winMessage');
let playerScoreDiv = document.querySelector('#playerScore');
let computerScoreDiv = document.querySelector('#computerScore');
let playerScore =0;
let computerScore =0;
 
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
    const buttonTxt = button.className;
    console.log(buttonTxt)
    

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
    //playerSelectionDiv.innerText = "Your choice: " + playerSelection; 

    
    //computerSelectionDiv.innerText = "Computer's choice: " + computerSelection;
    

    if(lowerPlayerSelection =="rock" && computerSelection == "Rock")
    {  
        winMessageDiv.innerText = "It's a tie!";
        playerSelectionImg.src = "rock.png"
        computerSelectionImg.src = "rock.png";
    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "Paper"){

        playerSelectionImg.src = "rock.png";
        computerSelectionImg.src = "paper.png";
        winMessageDiv.innerText = "You lose!";
        computerScore +=1;      
        computerScoreDiv.innerText= "Computer: " + computerScore;

    
    }
    else if(lowerPlayerSelection =="rock" && computerSelection == "Scissors"){

        playerSelectionImg.src = "rock.png"
        computerSelectionImg.src = "scissors.png";
        winMessageDiv.innerText = "You win!";
        playerScore +=1
        playerScoreDiv.innerText = "Player: " + playerScore;
    
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Rock"){
        
        playerSelectionImg.src = "paper.png"
        computerSelectionImg.src = "rock.png";
        winMessageDiv.innerText = "You win!";
        playerScore +=1
        playerScoreDiv.innerText = "Player: " + playerScore;
       
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Paper"){
        playerSelectionImg.src = "paper.png"
        
        computerSelectionImg.src = "paper.png";
        winMessageDiv.innerText = "It's a tie!";
      
    }
    else if(lowerPlayerSelection =="paper" && computerSelection =="Scissors"){

        playerSelectionImg.src = "paper.png"
        computerSelectionImg.src = "scissors.png";

        winMessageDiv.innerText = "You lose!";
        computerScore +=1;
        computerScoreDiv.innerText= "Computer: " + computerScore;

      
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Rock"){

        playerSelectionImg.src = "scissors.png"
        computerSelectionImg.src = "rock.png";
        winMessageDiv.innerText = "You lose!";
        computerScore +=1;
        computerScoreDiv.innerText= "Computer: " + computerScore;

    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Paper"){

        playerSelectionImg.src = "scissors.png"
        computerSelectionImg.src = "paper.png";
        winMessageDiv.innerText = "You win!";
        playerScore +=1
        playerScoreDiv.innerText = "Player: " + playerScore;
     
    }
    else if(lowerPlayerSelection =="scissors" && computerSelection =="Scissors"){

        playerSelectionImg.src = "scissors.png"
        computerSelectionImg.src = "scissors.png";

        winMessageDiv.innerText = "It's a tie!";
      
    }
   
    

}


//write a function that plays a round of rock paper scissors
//game();

