let sctemplate = document.querySelector("#scTemplate").content;
let scList = document.querySelector("#scList");
let SCpage = 1;

function fetchSc() {


  let urlParams = new URLSearchParams(window.location.search);

let catid = urlParams.get("category");
  let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/soundcloud?_embed&per_page=4"+SCpage
  if(catid){ // DRY
    endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/soundcloud?_embed&per_page=4"+SCpage + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showSc);


}

function showSc(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleSc);
}

function showSingleSc(aSc){
  let clone = sctemplate.cloneNode(true);
  clone.querySelector(".link").innerHTML = aSc.content.rendered;
    
  scList.appendChild(clone);
}
fetchSc();


//found this stuff online
setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    SCpage++;
    
  }
}, 4000)

function bottomVisible() {
  const scrollY = window.scrollY
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}



