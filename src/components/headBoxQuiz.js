function headBoxQuiz(q, qGp, headQuiz, rangQ, nbreQ){

  // TITLE - Question N°
  var title = headQuiz.getElementsByClassName('title')[0];
  title.innerHTML = "Question "+rangQ+" / "+nbreQ;

  //GAMEPLAY
  var leadGp = headQuiz.getElementsByClassName('gameplay')[0];
  //si q.type leadGameplay = libelle name type correspondant sinon libelle default
  var typeX = (!q.type) ?
    qGp.type.findIndex(e=> e.default):
    qGp.type.findIndex(e=> e.name===q.type);
  leadGp.innerHTML = qGp.type[typeX].libelle;

  //INSTRUCTION
  var instruct = headQuiz.getElementsByClassName('instruct')[0];
  instruct.innerHTML = qGp.instruction;

}

export {headBoxQuiz};
