let aboutTemplate = document.querySelector("#aboutTemplate").content;
let aboutList = document.querySelector("#aboutList");
let aboutPage = 1;

function fetchAbout() {


  let urlParams = new URLSearchParams(window.location.search);

let catid = urlParams.get("category");
  let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/about_me?_embed&per_page=4"+aboutPage
  if(catid){ // DRY
    endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/about_me?_embed&per_page=4"+aboutPage + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showAbout);


}

function showAbout(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleQuestion);
}

function showSingleQuestion(aQuestion){
  let clone = aboutTemplate.cloneNode(true);
  clone.querySelector(".header").innerHTML = aQuestion.title.rendered;
    
    clone.querySelector(".paragraph").innerHTML = aQuestion.content.rendered;
    
  aboutList.appendChild(clone);
}
fetchAbout();


//found this stuff online
setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    aboutPage++;
    
  }
}, 4000)

function bottomVisible() {
  const scrollY = window.scrollY
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}

