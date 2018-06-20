function dragDropOrdLst(dragSpan, gameplay, divRep, dragTxts){

  var i, dragged, dataDrop, dragZone;

  //start drag&drop
  for (i=0; i<dragSpan.length; i++){
    dragSpan[i].addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id);
    });
  }

  /* Drag & drop function */

  /* events fired on the DRAGGABLE target */
  //add an style event when drag start & stop.. dragenter / dragleave
  divRep.addEventListener("dragstart", function(event){
    // store a ref. on the dragged elem
    dragged = event.target.innerText;
    dragZone = event.target;
    console.log(dragZone);
    // empty droparea
    //event.target.innerText = "";
    event.target.style.opacity = .4;
    event.target.parentNode.style.background = "var(--secondary-db-color)";
  });

  divRep.addEventListener("dragend", function( event ) {
      // reset background
      event.target.parentNode.style.background = "var(--main-bg-color)";
      //si non drop
      /*if(event.target.innerText == ""){
        event.target.innerText = dragged;
      }*/
      event.target.style.opacity = 1;
  }, false);


  /* events fired on the DROP targets */
  /*dragover => every time (a lot..) whent elmnt drag over valid draggable_span dropzone*/
  divRep.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);

  /* dragenter => when elmnt drag over valid drop ONCE */
  divRep.addEventListener("dragenter", function( event ) {
    var dropTarget;
      // highlight potential drop target when the draggable element enters it
      if ((event.target.nodeType==1) && event.target.classList.contains("dropzone")){
        /*dataDrop = event.target.innerText;
        console.log("dataDrop : "+dataDrop);*/
        event.target.style.background = "var(--primary-op-color)";

        dropTarget = event.target;
      }else if ((event.target.nodeType==3) && event.target.parentNode.classList.contains("dropzone")) {
        //add same active style to draggable_span dropzone (parent)
        event.target.parentNode.parentNode.style.background = "var(--primary-op-color)";

        dropTarget = event.target.parentNode;
      }
      //Start move drag elmnt
      if(dropTarget){
        dataDrop = dropTarget.innerText;
        console.log("dataDrop : "+dataDrop);
      }
  }, false);

  divRep.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ((event.target.nodeType==1) && event.target.classList.contains("dropzone")){
          event.target.style.background = "";
      }else if ((event.target.nodeType==3) && event.target.parentNode.classList.contains("dropzone")) {
          event.target.parentNode.parentNode.style.background = "";
      }
  }, false);

  divRep.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    //get DropTarget
    var dropTarget;
    if ((event.target.nodeType==1) && event.target.classList.contains("dropzone")){
      dropTarget = event.target;
      event.target.style.background = "";
      event.target.parentNode.style.background = "";
    }else if ((event.target.nodeType==3) && event.target.parentNode.classList.contains("dropzone")) {
      dropTarget = event.target.parentNode;
      event.target.parentNode.parentNode.style.background = "";
    }

    // move dragged elmt to the selected drop target
    if(dropTarget){
      var data = event.dataTransfer.getData("text"); //id drag span
      var list_items = divRep.getElementsByClassName("draggable_span");
      var save_data = dropTarget.innerHTML;

      //recup position elmt drag & drop
      for(var i=0; i<list_items.length; i++){
        //select id elemt drop -> position puis switch items...
        if(list_items[i].getAttribute("id") == dropTarget.getAttribute("id")){
          console.log("drop : "+i);
          var dp = i;
        }
        if(list_items[i].getAttribute("id") == data){
          console.log(("drag : "+i));
          var dg = i;
        }
      }

      data = document.getElementById(data).innerHTML;
      console.log(data);
      dropTarget.innerHTML = data;
      for(var i=1; i<=Math.abs(dg-dp); i++){
        //i contient nbre itération
        //suivant move top - down
        if(dp>dg){
          data = list_items[dp-i].innerHTML;
          list_items[dp-i].innerHTML = save_data;
        }else{
          data = list_items[i+dp].innerHTML;
          list_items[i+dp].innerHTML = save_data;
        }
        save_data = data;
      }

      //event.target.value = divRep.getElementById(data).innerHTML;
    }
  }, false);

}

export {dragDropOrdLst};
