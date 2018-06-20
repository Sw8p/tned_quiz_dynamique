/***************** fct° TIMER ******************/
//init chrono
var m = 0;
var s = 0;

function startTimer(chrono){

  var timer = setInterval(function(){ myChrono() }, 1000);

  function myChrono(){
    s++;
    if(s>59){
      m++;
      s=0;
    }
    //add style
    if(m > 8){
      chrono.style.color = "red";
    }
    var mm = checkTime(m);
    var ss = checkTime(s);
    chrono.innerHTML =  mm + " : " + ss;

    // arret du timer
    if(m===10 && s===0){
      clearInterval(timer);
      console.log('Temps écoulé..');
    }
  }

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

export {startTimer};
export {timer};
