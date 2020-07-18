

function startCountDown(){
  var timeLeft =3
  var elem = document.getElementById('countdown_div');
  
  var timerId = setInterval(countdown, 1000);
  function gameComplete(){
  console.log("CountDown Complete");
  document.getElementById('gamemusic').play();
  start();
  document.getElementById('cntd').style.display = "none";
  window.navigator.vibrate(600);

  }

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      gameComplete();
      var gameStatus = 0; 
      var globalGameStatus = 0;

      window.addEventListener('deviceorientation', function(event) {
    
        if (event.gamma < 50  && event.gamma > -30){
          gameStatus = gameStatus + 1;
         
        }
    
        var metaGame = 30;
    
        if (gameStatus > metaGame){
          plusSlides(1, 0);status();up();window.navigator.vibrate(75);
       
        }
       
        function status(){
          gameStatus += 1;
          console.log("Game Status:" + gameStatus);
          gameStatus = 0;
          globalGameStatus += 1;
        }


    
        if (globalGameStatus > 8){
          console.log("Time Complete");
          document.getElementById("timeUp").style.display="block";
          document.getElementById("end").style.display="block";
          document.getElementById('gamemusic').pause();
          document.getElementById('speedup').pause(); 
          document.getElementById('endgame').play(); 
  
          metaGame = 10000000;
          gameStatus = 0;
          globalGameStatus = 0
          document.getElementById('m8').style.display="none";
          document.getElementById('m7').style.display="none";
          document.getElementById('m6').style.display="none";
          document.getElementById('m5').style.display="none";
          document.getElementById('m4').style.display="none";
          document.getElementById('m3').style.display="none";
          document.getElementById('m2').style.display="none";
          document.getElementById('m1').style.display="none";
          document.getElementById('countdownScript').remove();
          document.getElementById('time').remove() ;
           
          
        }
     
    
        document.getElementById("gyro").innerHTML = event.gamma;
    
      //  if (event.beta < -50){
         
    //      plusSlides(1, 0);window.navigator.vibrate(50);down();document.getElementById//('I1').style.color = 'red';
       // }
        
        });

    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
    window.removeEventListener('deviceorientation', deviceOrientation);
  }
}
