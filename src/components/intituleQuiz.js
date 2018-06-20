function intituleQuiz(intitule, key){
  var intituleDiv = document.createElement('div');
  intituleDiv.className = "intitules";
  var para = document.createElement('p');
  para.innerHTML = (key != null) ? intitule[key] : intitule;
  intituleDiv.appendChild(para);

  return intituleDiv;
}

export {intituleQuiz};
