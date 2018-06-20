function cursorValue(curseur, count){
  /* add txt value for type range */
  count.textContent = curseur.value;

  curseur.oninput = function() {
    count.textContent = curseur.value;
  }
}

export {cursorValue};
