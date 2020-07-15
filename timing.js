function start(){
  var timeLeft = 10;
  var elem = document.getElementById('time_div');
  
  var timerId = setInterval(countdown, 1000);
  function doSomething(){

  console.log("Time Complete");
  document.getElementById("timeUp").style.display="block";
  document.getElementById("end").style.display="block";
  document.getElementById('gamemusic').pause();
  document.getElementById('speedup').pause(); 
  document.getElementById('endgame').play();
  window.navigator.vibrate(600);
 
  }

  function warning(){
    document.getElementById('gamemusic').pause(); 
    document.getElementById('speedup').play(); 
    document.getElementById("time_div").style.fontSize = "70px";
  }

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
      document.getElementById('countdownScript').src="j";
    } else {
      elem.innerHTML = timeLeft + ' Seconds';
      timeLeft--;
    }
    if (timeLeft < 15) {
      warning();
    }
  }
}
