function imgCheck(imgClic, qType){

  //get default css border
  var imgBorder = imgClic[0].style.border;
  var imgBgColor = imgClic[0].style.backgroundColor;

  //init borderColor &bgColor
  for(var x=0; x<imgClic.length; x++){
    imgClic[x].style.border = imgBorder;
    imgClic[x].style.backgroundColor = imgBgColor;
  }

  //Toogle border suivant gameplay qru / qrm
  for(var i=0; i<imgClic.length; i++){
    imgClic[i].addEventListener("click", function(ev){

      //Si QRU -> on toogle borders & bg
      if(qType === "qru"){
        for(var x=0; x<imgClic.length; x++){
          imgClic[x].style.border = imgBorder;
          imgClic[x].style.backgroundColor = imgBgColor;
        }
        //add border & bg select
        ev.target.style.border = ".1rem solid var(--primary-color)";
        ev.target.style.backgroundColor = ".1rem solid var(--primary-color)";
      }

      //Si QRM -> on retire border au click
      if(qType === "qrm"){
        if(ev.target.style.backgroundColor === "var(--primary-color)"){
          ev.target.style.border = imgBorder;
          ev.target.style.backgroundColor = imgBgColor;
        }else{
          //add select
          ev.target.style.border = ".1rem solid var(--primary-color)";
          ev.target.style.backgroundColor = "var(--primary-color)";
        }
      }
    });
  }
}

export {imgCheck};
