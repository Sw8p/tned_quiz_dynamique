import {imgCheck} from '../../viewStyle/imgCheck';
import {labelCheck} from '../../viewStyle/labelCheck';
import {labelCheckTypeC} from '../../viewStyle/labelCheckTypeC';

function repQr(q, qName, urlImg, inpuType, key, divRep){
  //si TypeCode modif qName pour id input htmlFor
  qName = (key!==null) ? qName+"."+key : qName;
  //si Q multiple...Type code
  for (var x in ((key !== null) ? q.reponses[key] : q.reponses)){

    //INPUT setAttribute
    var input = document.createElement('input');
    input.setAttribute("type", inpuType);
    input.name = (q.gameplay == 'qrm') ? (qName+'[]') : (qName);
    input.value = qName+'_rep'+x;
    input.id = qName+'_rep'+x;

    //LABEL setAttribute
    var label = document.createElement('label');
    label.htmlFor = input.id;

    //si type IMG_BTN
    if(q.type && q.type==="img_btn"){
      label.className = "labelImgBox";

      var imgX = q.reponses[x];
      var imgSrc = urlImg+q.assets.src;

      //INPUT setAttribute
      input.className = "rad_img";
      input.value = imgX.img;

      //IMG setAttribute
      var img = document.createElement('img');
      img.className = "img_btn";
      img.src = imgSrc+imgX.src;
      img.alt = imgX.img;
      img.height = "114";
      img.width = "114";

      //label NODES ImgBtn
      label.appendChild(img);

    }else{
      label.className = "labelBox";

      //span attr ->rm input default style
      var span = document.createElement('span');
      span.className = "checkmark";

      //label NODES QR
      var labelTxt = ((key !== null) ? q.reponses[key] : q.reponses)[x].label;
      labelTxt = labelTxt.substr(0,1).toUpperCase() + labelTxt.substr(1, labelTxt.length);
      label.innerHTML = labelTxt;
      
      label.insertBefore(span, label.firstChild);
    }

    //label NODES
    label.insertBefore(input, label.firstChild);
    //div reponse Nodes
    divRep.appendChild(label);
  }

  var tagCheck;
  if(q.type === "img_btn"){
    //style GRID divRep si q gameplay= imageClick -> type dossier
    divRep.className += " clickImg_rep";

    //def anim imgCheck
    imgCheck(divRep.getElementsByTagName('img'), q.gameplay);
  }else{
    if(key===null){
      //def anim labelChecked
      labelCheck(divRep, q.gameplay);
    }else{
      labelCheckTypeC(divRep, q.gameplay, key);
    }
  }

}

export {repQr};
