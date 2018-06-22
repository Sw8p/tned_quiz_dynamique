function progressBar(progBox, step){
  var progBar = progBox.getElementsByTagName('progress')[0];
  var progCount = progBox.getElementsByClassName('progress_count')[0];
  progBar.innerHTML = progBar.innerHTML.replace(progBar.value, step);
  //add value count
  progCount.innerHTML = progCount.innerHTML.replace(progBar.value, step);
  //en %
  //progCount.innerHTML = Math.floor((step/max)*100)+" %";
  progBar.value = step;
}

//init PROGESSBAR
function progressBarInit(progBox, max){
  var progBar = progBox.getElementsByTagName('progress')[0];
  progBar.max = max;
  progBar.value = 1;
  progBar.innerHTML = "1 / "+max;
  var progCount = progBox.getElementsByClassName('progress_count')[0];
  progCount.innerHTML = "1 / "+max;
}

export {progressBar};
export {progressBarInit};
