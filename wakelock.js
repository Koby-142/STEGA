function printStatus(status) {
    document.getElementById("status").innerHTML = status;
  }
  
  let wakeLockObj = null;
  
  function toggle() {
    if ("keepAwake" in screen) {
      screen.keepAwake = !screen.keepAwake;
      printStatus(screen.keepAwake ? 'acquired' : 'not acquired');
    } else if ("wakeLock" in navigator) {
      if (wakeLockObj) {
        wakeLockObj.release();
        wakeLockObj = null;
        printStatus('released');
      } else {
        printStatus('acquiring...');
        navigator.wakeLock.request('screen')
          .then((wakeLock) => {
            wakeLockObj = wakeLock;
            
            wakeLockObj.addEventListener('release', () => {
              printStatus('released externally');
              wakeLockObj = null;
            })
            
            printStatus('acquired');
          })
          .catch((err) => {
            console.error(err);
            printStatus('failed to acquire: ' + err.message);
          })
      }
    }
  }
  
  if ("keepAwake" in screen) {
    document.getElementById("api").innerHTML = 'screen.keepAwake';
    printStatus('not acquired');
  } else if ("wakeLock" in navigator) {
    document.getElementById("api").innerHTML = 'navigator.wakeLock';
    printStatus('not acquired');
  }