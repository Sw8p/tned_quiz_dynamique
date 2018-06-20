//Fonction de recuperation d'une question du Corpus
function qCorpusAleat(nbrQ){
  //nbreQ demo = 16
  //temp (recup nbre determiner de Q aléatoires du corpus...)

  //init empty array length nbre de questions..
  var qId = [];
  //do tant que arrayId non rempli
  while(qId.length<nbrQ){
    //recup Id aléatoire
    var aleatId = getRandomQ(nbrQ);
    //vreif si id déja présent dans array, sinon on l'ajoute
    if(!qId.includes(aleatId)){
      qId.push(aleatId);
    }
  }
  return qId.map(q => q+1);//+1 pour id de 1 à 16
}

//retourn nbre aleat < max
function getRandomQ(max){
  return Math.floor(Math.random()*Math.floor(max));
}

export {qCorpusAleat};
