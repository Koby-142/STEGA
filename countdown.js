function startCountDown(){
  var timeLeft =3;
  var elem = document.getElementById('countdown_div');
  
  var timerId = setInterval(countdown, 1000);
  function doSomething(){
  console.log("CountDown Complete");
  document.getElementById('gamemusic').play();
  start();
  document.getElementById('cntd').style.display = "none";
  window.navigator.vibrate(600);
  }
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
      var gameStatus = 0; 
      var globalGameStatus = 0;
    window.addEventListener('deviceorientation', function(event) {
     
    
     
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
        window.navigator.vibrate(600);
        globalGameStatus = 0;
      }else{
        if (event.gamma < 50  && event.gamma > -30){
          gameStatus = gameStatus + 1;
         
        }
        if (gameStatus > 20){
          plusSlides(1, 0);window.navigator.vibrate(75);status();up()
       
        }
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
  }
}
