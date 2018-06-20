function labelCheckTypeC(divRep, qType, key){

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
      var label = ev.target.parentNode;
      var checkmark = label.getElementsByClassName("checkmark")[0];

      //Si QRU -> on toogle
      if(qType === "qru"){
        var labels
        var checkmarks

        //si typeCode...
        if(key !== null){
          var repKey = divRep.parentNode.getElementsByClassName('reponses')[key];
          labels = repKey.getElementsByTagName('label');
          checkmarks = repKey.getElementsByClassName('checkmark');
        }else{
          labels = divRep.getElementsByTagName('label');
          checkmarks = divRep.getElementsByClassName('checkmark');
        }

        //Init default style
        for(var x=0; x<labels.length; x++){
          labels[x].style.backgroundColor = lbBgColor;
          checkmarks[x].style.backgroundColor = chkmBgColor;
          checkmarks[x].style.border = chkmBorder;
        }
        //add bg select
        label.style.backgroundColor = "var(--primary-color)";
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

export {labelCheckTypeC};
