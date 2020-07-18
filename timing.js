


function start(){
  var timeLeft = 10;
  var elem = document.getElementById('time_div');
  
  var timerId = setInterval(countdown, 1000);

function disableOrientation(){
  window.removeEventListener('deviceorientation', deviceOrientation); 
        
}


  function warning(){
    document.getElementById('gamemusic').pause(); 
    document.getElementById('speedup').play(); 
   // document.getElementById("time_div").style.fontSize = "70px";
  }

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
  
    } else {
      elem.innerHTML = timeLeft + ' Seconds';
      timeLeft--;
    }
    if (timeLeft < 15) {
      warning();
    }
  }
}
