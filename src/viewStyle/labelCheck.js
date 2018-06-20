function labelCheck(divRep, qType){
  var inputClic = divRep.getElementsByTagName('input');

  //get default css style elmnt
  var label = divRep.getElementsByTagName('label')[0];
  var checkmark = label.getElementsByClassName("checkmark")[0];
  var lbBgColor = label.style.backgroundColor;
  var lbBorder = label.style.border;
  var chkmBgColor = checkmark.style.backgroundColor;
  var chkmBorder = checkmark.style.border;

  for(var i=0; i<inputClic.length; i++){

    inputClic[i].addEventListener("click", function(ev){
      label = ev.target.parentNode;
      checkmark = label.getElementsByClassName("checkmark")[0];

      //Si QRU -> on toogle
      if(qType === "qru"){
        var labels = divRep.getElementsByTagName('label');
        var checkmarks = divRep.getElementsByClassName('checkmark');

        //Init default style
        for(var x=0; x<labels.length; x++){
          labels[x].style.backgroundColor = lbBgColor;
          labels[x].style.border = lbBorder;
          checkmarks[x].style.backgroundColor = chkmBgColor;
          checkmarks[x].style.border = chkmBorder;
        }
        //add bg select
        label.style.backgroundColor = "var(--primary-color)";
        //label.style.border =
        checkmark.style.backgroundColor = "var(--main-ft-color)";
        checkmark.style.borderColor = "var(--main-ft-color)";
      }

      //Si QRM -> on rm active color au click
      if(qType === "qrm"){
        if(label.style.backgroundColor == "var(--primary-color)"){
          label.style.backgroundColor = lbBgColor;
          checkmark.style.backgroundColor = chkmBgColor;
          checkmark.style.border = chkmBorder;
        }else{
          //add bg select
          label.style.backgroundColor = "var(--primary-color)";
          checkmark.style.backgroundColor = "var(--main-ft-color)";
          checkmark.style.borderColor = "var(--main-ft-color)";
        }
      }
    });
  }
}

export {labelCheck};
