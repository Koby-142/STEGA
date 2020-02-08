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
      } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
      }
    }
  }
  