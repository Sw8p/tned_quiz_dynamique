function assetQuiz(q, url, key){
  if(key){//temp
    return;
  }else{
    var divAsset = document.createElement('div');
    divAsset.className = "assets";
    var asseType = q.assets.type;
    //url de l'asset
    var urlAsset = url+asseType+'/';
    var asset = document.createElement(asseType);
    //si img
    if(asseType == "img"){
      asset.alt = q.intitules;
      asset.src = urlAsset+q.assets.src;
    }
    //si video...
    if(asseType == "video"){
      asset.controls = true;
      var source = document.createElement('source');
      source.src = urlAsset+q.assets.src;
      source.type = "video/mp4";
      asset.innerHTML = "Video non pris en charge..."+"<br/>"+q.assets.alt;
      asset.insertBefore(source, asset.childNodes[asset.childNodes.length-1]);
    }
    //assign asset
    divAsset.appendChild(asset);

    return divAsset;
  }
}

export {assetQuiz};
