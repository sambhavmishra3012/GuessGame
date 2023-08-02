'use strict'
let score =20;
let highScore=0;
const secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.check').addEventListener('click',function (){
    const guess=Number (document.querySelector('.guess').value)
    console.log(guess)
    if(!guess){
        document.querySelector('.message').textContent="⛔ no number!"
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent="🎉🎊correct number";
        document.querySelector('body').style.backgroundColor='green'

        document.querySelector('.again').addEventListener('click',function (){
            document.querySelector('.score').textContent=20;
            score=20;
            document.querySelector('.message').textContent="Start guessing...";
            document.querySelector('body').style.backgroundColor='#e2121246'
            document.querySelector('check').value=' '

        })
        if(highScore<score){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

    }
    else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent="🚇↗ too high "
            score --;
            document.querySelector('.score').textContent=score;

           
        }
        else{
            document.querySelector('.message').textContent=" 😭📢 You lost the game";
            document.querySelector('.score').textContent=0;
        }
        
    }
    else{
        if(score>1){
            document.querySelector('.message').textContent="👇 low number "
            score --;
            document.querySelector('.score').textContent=score;
    
        }
        else{
            document.querySelector('.message').textContent=" 😭📢 You lost the game";
            document.querySelector('.score').textContent=0;

        }
    }
})