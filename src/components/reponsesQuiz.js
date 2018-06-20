import {repQr} from './repGameplay/repQr';
import {repCurseur} from './repGameplay/repCurseur';
import {repOrdLst} from './repGameplay/repOrdLst';
import {repTxtTr} from './repGameplay/repTxtTr';


function reponsesQuiz(q, urlImg, key){
  var qName = q.gameplay+q.id;

  var divRep = document.createElement('div');
  divRep.className = "reponses";
  //style class GAMEPLAY reponse
  divRep.className += " "+q.gameplay+"_rep";

  var inpuType;

  //suivant gameplay
  switch (q.gameplay){
    // QRU QRM
    case 'qru':
    case 'qrm':
      inpuType = (q.gameplay == 'qrm') ? "checkbox" : "radio";
      repQr(q, qName, urlImg, inpuType, key, divRep);
      break;
    //CURSEUR
    case 'curseur' :
      inpuType = 'range';
      repCurseur(q, qName, inpuType, divRep);
      break;
    //ORD_LST
    case 'ord_lst' :
      repOrdLst(q, divRep);
      break;

    //TXT_TR
    case 'txt_tr':
      repTxtTr(q, qName, inpuType, divRep);
    break;
  }//end switch

  return divRep;
}

export {reponsesQuiz};
