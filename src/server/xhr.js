/********* Récupération des data JSON *********/
function getJSON(requestURL, callback){
  //Instanciation de l'objet XHR
  var request = new XMLHttpRequest();

console.log(requestURL);
  //verif & attente Réponse
  request.onreadystatechange = function(){
    console.log(this.status);
  };


  //ouverture d'une requête
  request.open('GET', requestURL);
  //def responseType au format json
  request.responseType = 'json';
  //envoit de la requête
  request.send();


  //Reponse serveur et traitement
  request.onload = function() {
    //Récupération & convertion des data json en objet JS
    //stockage de la réponse ->prop: reponse
    callback(this.response);// var obj json response XHR type json en obj JS
  }
}

export function getData(url, callback){
  getJSON(url, data => callback(data));
}
