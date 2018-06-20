import {cursorValue} from '../../viewStyle/cursorValue';

function repCurseur(q, qName, inpuType, divRep){
  var input = document.createElement('input');
  var br = document.createElement('br');
  var span =  document.createElement('span');
  span.className = "crs_count";
  //input Attr
  input.setAttribute("type", inpuType);
  input.id = qName;
  input.name = qName;
  input.defaultValue = q.reponses.min;
  input.min = q.reponses.min;
  input.max = q.reponses.max;
  input.step = q.reponses.step;
  //div reponse Nodes
  divRep.appendChild(input);
  divRep.appendChild(br);
  divRep.appendChild(span);
  //add anim cursorValue
  cursorValue(input, span);
}

export {repCurseur};
