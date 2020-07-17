
function disableOrientation(){
  window.removeEventListener('deviceorientation', deviceOrientation);  
}

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
    globalGameStatus = 0;
    window.navigator.vibrate(600);
    metaGame = 10000000000000000000000000000;
    globalGameStatus = 0;
    document.getElementById('m8').style.display="none";
    document.getElementById('m7').style.display="none";
    document.getElementById('m6').style.display="none";
    document.getElementById('m5').style.display="none";
    document.getElementById('m4').style.display="none";
    document.getElementById('m3').style.display="none";
    document.getElementById('m2').style.display="none";
    document.getElementById('m1').style.display="none";
    document.getElementById('countdownScript').src="null"  ;
  disableOrientation();
  }

  function warning(){
    document.getElementById('gamemusic').pause(); 
    document.getElementById('speedup').play(); 
   // document.getElementById("time_div").style.fontSize = "70px";
  }

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
  
    } else {
      elem.innerHTML = timeLeft + ' Seconds';
      timeLeft--;
    }
    if (timeLeft < 15) {
      warning();
    }
  }
}
