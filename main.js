(function(){
    const inputElm = document.querySelector('#input');
    const formElm = document.querySelector('form');
    const winScoreElm = document.querySelector('.winScore');
    const p1BtnElm = document.querySelector('.p1Btn');
    const p1ScoreElm = document.querySelector('.p1Score');
    const p2BtnElm = document.querySelector('.p2Btn');
    const p2ScoreElm = document.querySelector('.p2Score');
    const resetElm = document.querySelector('.reset');
    
    let winScore =20;
    let p1Score = 0;
    let p2Score = 0;
    let turn = 'player1';
    winScoreElm.textContent =winScore;
    p1ScoreElm.textContent = p1Score;
    p2ScoreElm.textContent = p2Score;
    
    
    function generateRanNum(max){
     return Math.floor(Math.random() *max +1 )
    }
    formElm.addEventListener('submit', e =>{
        e.preventDefault();
        const inputVal = +inputElm.value;
        // validation
        if(inputVal === ''|| inputVal < 1){
            if(!document.querySelector('.invalid-input')){
                formElm.insertAdjacentHTML('beforebegin',
                '<p class="invalid-input">please input valid number</p>')
    
            }
        }else{
            if(document.querySelector('.invalid-input')){
                document.querySelector('.invalid-input').remove();
            }
            winScore = +inputElm.value;
            winScoreElm.textContent = winScore;
            inputElm.value = '';
            initialPlayState();
    
        }
    
    
    });
    
    p1BtnElm.addEventListener('click', e => {
        if(turn === 'player1'){
            p1Score = generateRanNum(winScore);
            p1ScoreElm.textContent = p1Score;
         turn = 'player2';
         p1BtnElm.setAttribute('disabled','disabled');
         p2BtnElm.removeAttribute('disabled');
         checkWinner();
         
    
        }
    })
    function checkWinner(){
        const isP1winner = winScore === p1Score;
        const isP2winner = winScore === p2Score;
        console.log(isP1winner, isP2winner)
        if(isP1winner || isP2winner){
            p1BtnElm.setAttribute('disabled','disabled');
            p2BtnElm.setAttribute('disabled','disabled');
         }
         displayWinner(isP1winner,isP2winner)
    }
    function displayWinner(p1WinState,p2WinState){
     if(p1WinState){
      formElm.insertAdjacentHTML('beforebegin','<p class="winnerMsg">player1 is winner</p>')
     }else if(p2WinState){
        formElm.insertAdjacentHTML('beforebegin','<p class="winnerMsg">player2 is winner</p>')
     }
    }
    
    p2BtnElm.addEventListener('click', e => {
        if(turn === 'player2'){
            p2Score = generateRanNum(winScore);
            p2ScoreElm.textContent = p2Score;
            turn = 'player1';
            p2BtnElm.setAttribute('disabled','disabled');
            p1BtnElm.removeAttribute('disabled');
            
        }
    })
    resetElm.addEventListener('click', e => {
         winScore =20;
         initialPlayState();
    
    })
    function initialPlayState() {
        p1Score = 0;
         p2Score = 0;
         turn = 'player1';
         winScoreElm.textContent =winScore;
         p1ScoreElm.textContent = p1Score;
         p2ScoreElm.textContent = p2Score;
         p1BtnElm.removeAttribute('disabled');
         p2BtnElm.removeAttribute('disabled');
         if(document.querySelector('.winnerMsg')){
            document.querySelector('.winnerMsg').remove();
         }
    }
})()

