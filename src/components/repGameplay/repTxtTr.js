/*import {repDragDrop} from './repDragDrop';*/

function repTxtTr(q, qName, inpuType, divRep){
  //si type Drag & drop
  if(q.type && q.type ==="d&d"){
    inpuType = "text";
    /*repDragDrop(q, qName, inpuType, divRep);*/
  }else{
    //sinon SELECT
    for(var x in q.reponses){
      var select = document.createElement('select');
      var qRepX = q.reponses[x];

      //SELECT
      select.id = qName+"_rep"+x;
      select.name = qName+"_rep"+x;
      for (var y in qRepX.options){
        //OPTIONS
        var option = document.createElement('option');
        option.text = qRepX.options[y];
        option.value = y;
        select.add(option);
      }
      select.selectedIndex = -1;//default select empty
      select.setAttribute("required", true);

      //DIVCUSTOM
      var divCustom = document.createElement('div');
      divCustom.className = "custom_select";
      divCustom.appendChild(select);

      //LABEL
      var label = document.createElement('label');
      //label.htmlFor = select.id;
      //si label array (input au milieu)
      if(Array.isArray(qRepX.label)){
        label.innerHTML = qRepX.label[0];
        label.appendChild(divCustom);
        label.insertAdjacentText("beforeend", qRepX.label[1]);
      }else{
        label.innerHTML = qRepX.label;
        label.appendChild(divCustom);
      }
      //DIVREP ADD NODES
      divRep.appendChild(label);
    }
  }//end toogle d&d select
}

export {repTxtTr};
