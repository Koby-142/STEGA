function startCountDown(){
    var timeLeft =10;
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
        
      window.addEventListener('deviceorientation', function(event) {

        if (event.gamma < 1 && event.gamma > 2){
        
          plusSlides(1, 0);window.navigator.vibrate(75);up();status();


        }
        var gameStatus = 0;
        function status(){
          gameStatus += 1
          console.log("Game Status:" + gameStatus);
        }

        if (gameStatus > 8){
          console.log('Time Complete Via User Input');
      document.getElementById('timeUp').style.display='block';
      document.getElementById('end').style.display='block';
      document.getElementById('gamemusic').pause()
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
  
