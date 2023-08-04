

var scores, roundScore, activePlayer, gamePlaying;

init();


    
document.querySelector('.btn--roll').addEventListener('click', function(){

    if(gamePlaying){
        

        // 1. Random Number
        var dice = Math.floor(Math.random() *  6) + 1;

        // 2. Display Result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled nunber is NOT one 
       
        if(dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;

        } else{
            // Next player

            nextPlayer();
        }

           
    }
    

});


document.querySelector('.btn--hold').addEventListener('click', function(){


    if(gamePlaying){
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update the User Interface
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        

        // Check if the player won the game
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying = false;
        }  else {
            //Next Player
            nextPlayer();
        }
    }
    

    
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    //document.querySelector('.player--0').classList.remove('player--active');
    //document.querySelector('.player--1').classList.add('player--active');

    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;

gamePlaying = true;

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

document.querySelector('.dice').style.display = 'none';
}
 
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice  + '</em>/';
// var x = document.querySelector('#score--0').textContent; 