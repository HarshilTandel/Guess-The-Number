let sNum = (Math.trunc(Math.random()*20)+1);
document.querySelector('.guess-input').value = '?'; 
let score=20;
let highScore = 0;
document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
document.querySelector('.check').addEventListener('click',function (){
       const guess=document.querySelector('.user-input').value;
       if(!guess){
            document.querySelector('.text .t1').innerText = "No number Entered";
            
       }
       else if(guess==sNum){
            document.querySelector('.text .t1').innerText = "Correct Number";
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
            document.querySelector('.guess-input').value = sNum; 
       if(score>highScore){
          highScore=score;
          document.querySelector('.text .t3').innerText = 'HighScore🎯:' + highScore;
       }
       }
       else if(guess>sNum){
            if(score>1){
                  document.querySelector('.text .t1').innerText="Its too High...";
                  score--;
                  document.querySelector('.text .t2').innerText=score;
                  document.querySelector('body').style.backgroundColor = 'red';
                  document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
            }else{
                  document.querySelector('.text .t1').innerText="You Lost The Game";
                  document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
            }
       } else if(guess<sNum){
            if(score>1){
            document.querySelector('.text .t1').innerText="Its too Low...";
            score--;
            document.querySelector('.text .t2').innerText=score;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
            }else{
                  document.querySelector('.text .t1').innerText="You Lost The Game";
                  document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;
            }
       }
       else if(guess!=sNum){
            document.querySelector('.text .t1').innerText = "Wrong Number";s
            document.querySelector('.text .t2').innerText=score;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;

       }
})
document.querySelector('.button').addEventListener('click',function(){
      score=20;
      sNum = (Math.trunc(Math.random()*20)+1);
      document.querySelector('.guess-input').value = '?'; 
      document.querySelector('.text .t1').innerText = "Start Guessing....😳😳";
      document.querySelector('.user-input').value='';
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('.text .t2').innerText = 'Score🚩: ' + score;


})
