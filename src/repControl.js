function repControl(qGmpl){
  console.log(qGmpl);

  var check = false;
  var input;

  //suivant gameplay
  switch (qGmpl){
    // QRU & QRM -si un check ok
    case 'qru':
    case 'qrm':
      var input = document.getElementsByTagName('input');
      console.log(input);
      for(var i=0; i<input.length; i++){
        console.log(input[i].checked);
        if(input[i].checked){
          check = true;
        }
      }
      console.log(check);
      break;

    //CURSEUR
    case 'curseur' :
      //- pas de check car default rep possible
      //break;

    //ORD_LST
    case 'ord_lst' :
      //- pas de check car default rep possible
      check = true;
      break;


    //TXT_TR
    case 'txt_tr':
      console.log(check);
      var select = document.getElementsByTagName('select');
      for(var i=0; i<select.length; i++){
        console.log(select[i].selectedIndex);
        if(select[i].selectedIndex != -1){
          check = true;
        }else{
          check = false;
          break;
        }
      }
      console.log(check);
      break;
  }//end switch

  /*if(!check){
    alert("vous devez donner une réponse..");
    return false;
  }else{
    return true;
  }*/
  return check;
}

export {repControl};
