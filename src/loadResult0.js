import {RadarChart} from './components/RadarChart';
import {data, radarChartOptions} from './fixtures/RadarData';

function loadResult(pageResult){
  var header, content, title, lead, badgeBox, badge, diagBox, diag, btnSite, anchor;
  //clean body...
  removeAllChild(pageResult);

  //Creat Content RESULT => BADGE & DIAGRADAR
  //diag radar
  diag = document.createElement('div');
  diag.className = "radarChart";
  diagBox = document.createElement('div');
  diagBox.className = "diag_box";
  diagBox.appendChild(diag);

  //badge
  badge = document.createElement('p');
  badge.className = "badge";
  //temp => add result pt
  badge.innerHTML = "63% de bonnes réponses";
  //badgeBox
  badgeBox = document.createElement('div');
  badgeBox.className = "badge_box";
  badgeBox.appendChild(badge);

  //add CONTENT
  content = document.createElement('div');
  content.className = "content_result";
  content.appendChild(badgeBox);
  content.appendChild(diagBox);


  //create HEADER content TITLE & LEAD
  //creat title
  title = document.createElement('h1');
  title.className = "title_result";
  title.innerHTML = "Résultats";
  //creat lead
  lead = document.createElement('p');
  lead.className = "lead_result";
  lead.innerHTML = "Bravo, vous avez réussi à répondre à toutes les questions dans les temps !";
  //creat header & add contents
  header = document.createElement('header');
  header.className = "head_result";
  header.appendChild(title);
  header.appendChild(lead);

  // add BTN return site
  anchor = document.createElement('a');
  anchor.href = "http://easy-driver-test.webflow.io/";
  anchor.innerHTML = "retour au site";
  btnSite = document.createElement('button');
  btnSite.className = 'btn_site';
  btnSite.type = "button";
  btnSite.appendChild(anchor);
  btnSite.addEventListener("click", function(){
    location.replace("http://easy-driver-test.webflow.io/");
  });

  //ADD ALL in PAGERESULT
  pageResult.appendChild(header);
  pageResult.appendChild(content);
  pageResult.appendChild(btnSite);
  pageResult.className = "page_result";

  //Call function to draw the Radar chart
	RadarChart(".radarChart", data, radarChartOptions);//! dessin diag suivant windows..->creat & add node before draw!!!

}//end loadResult

function removeAllChild(parentBox){
  //empty content_box_quiz (tantque a enfant => suppr)
  while(parentBox.hasChildNodes()){
    parentBox.removeChild(parentBox.firstChild);
  }
}

export {loadResult};
