import {dragDropOrdLst} from '../../viewStyle/dragDropOrdLst';

function repOrdLst(q, divRep){
  var dragTxt = [];
  var ordListe = document.createElement('ol');
  for (var x in q.reponses){
    var itemListe = document.createElement('li');
    var divDrop = document.createElement('div');
    divDrop.className = "droparea";
    //SPAN DRAGGABLE
    var spanDrag = document.createElement('span');
    spanDrag.className = "draggable_span dropzone";
    spanDrag.id = "drag"+x;
    spanDrag.setAttribute("draggable", true);
    //Add Nodes
    var spanTxt = q.reponses[x].label;
    spanTxt = spanTxt.substr(0,1).toUpperCase() + spanTxt.substr(1, spanTxt.length);
    spanDrag.innerHTML = spanTxt;
    dragTxt.push(spanTxt);
    divDrop.appendChild(spanDrag);
    itemListe.appendChild(divDrop);
    ordListe.appendChild(itemListe);
  }
  divRep.appendChild(ordListe);
  //add annim style dragDrop
  dragDropOrdLst(divRep.getElementsByClassName('draggable_span'), q.gamplay, divRep, dragTxt);
}

export {repOrdLst};
