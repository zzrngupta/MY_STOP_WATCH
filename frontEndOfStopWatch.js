window.onload = function() {
    /* Variable declararation */
    var sec = 0;
    var mili = 0;
    var appendMili = document.getElementById("mili");
    var appendSec = document.getElementById("sec");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var Interval;

    /* Button Event Handlers */
    btnStart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
    
    btnStop.onclick = function() {
      clearInterval(Interval);
    };
    
    btnReset.onclick = function() {
      clearInterval(Interval);
      sec = 0;
      mili = 0;
      appendSec.innerHTML = "00";
      appendMili.innerHTML = "00";
    };
    /* Start Timer Function */
    function startTimer() {
      mili++;
      if (mili <= 9) {
        appendMili.innerHTML = "0" + mili;
      } else {
        appendMili.innerHTML = mili;
      }
    
      if (mili > 99) {
        sec++;
        appendSec.innerHTML = formatTime(sec);
        mili = 0;
        appendMili.innerHTML = "00";
      }
    }
    /* Format Time Function */
     function formatTime(time) {
      return time < 10 ? "0" + time : time;
    } 
  };
  