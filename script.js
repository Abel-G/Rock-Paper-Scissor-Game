function computerPlay(){
   options = ["rock", "paper", "scissor"];
   let randNUm = Math.floor(Math.random()*3)
    let  compSelection = options[randNUm];
return compSelection;
}
function game(){
    let compWIn = 0;
    let playerWIn = 0;
    let counter = 0;
    function playRound(playerSelection, computerSelection){
        
        if(computerSelection==='paper'&&playerSelection==='rock'){
            let result =`You Lose! ${computerSelection} beets ${playerSelection}`
        compWIn++;
            return result;
        }
        else if(computerSelection==='paper'&&playerSelection==='rock'){
            let result =`You win! ${playerSelection} beats ${computerSelection}`
        playerWIn++;
            return result;
        }
        else if(computerSelection==='rock'&&playerSelection==='scissor'){
            let result =`You Lose! ${computerSelection} beats ${playerSelection}`
        compWIn++;
            return result;
        }
        else if(computerSelection==='scissor'&&playerSelection==='rock'){
            let result =`You win! ${playerSelection} beats ${computerSelection}`
            playerWIn++;
            return result;
        }
        else if(computerSelection==='scissor'&&playerSelection==='paper'){
            let result =`You Lose! ${computerSelection} beats ${playerSelection}`
        compWIn++;
            return result;
        }
        else if(computerSelection==='paper'&&playerSelection==='scissor'){
            let result =`You win! ${playerSelection} beats ${computerSelection}`
            playerWIn++;
            return result;
        }
        else if(computerSelection===playerSelection){
            let result = 'Draw try again please'
            return result;
        }
        else if(playerSelection===null){
            let result ='please enter either "rock" , "paper" or "scissor"'
            return result;
        }
        else{
            let result = 'invalid input try again please!';
            return result;
        }
    }
    
    while(counter < 5){
        const computerSelection = computerPlay();
        const playerSelection = prompt('Enter your choice').toLowerCase();
        console.log(playRound(playerSelection,computerSelection));
        counter++;
    }
    if(compWIn>playerWIn){
        console.log(`Sorry! Computer won ${compWIn} to ${playerWIn}`)
    }
    else if(playerWIn>compWIn){
        console.log(`Congratulation! You won ${playerWIn} to ${compWIn}`)
    }
    else{
        console.log(`Draw computer won ${compWIn} times and you won ${playerWIn} times. please play again. `)
    }
    
}
game();