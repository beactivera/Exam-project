
const template = document.querySelector("#template").content;
let eventList = document.querySelector("#eventList");
let page = 1;
let lookingForData = false;



function fetchConcerts() {
  lookingForData=true;

  let urlParams = new URLSearchParams(window.location.search);

let catid = urlParams.get("category");
  let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/gigs?_embed&per_page=5&page="+page
  if(catid){ // DRY
    endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/gigs?_embed&per_page=5&page="+page + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showConcert);


}

function showConcert(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleConcert);
}

function showSingleConcert(aConcert){
  let clone = template.cloneNode(true);
    
  clone.querySelector(".day").textContent = aConcert.acf.weekday;
    

    
    var Dataday= aConcert.acf.date.substring(6,8);
    var month= aConcert.acf.date.substring(4,6);
    var year= aConcert.acf.date.substring(0,4);

    
    clone.querySelector(".date").textContent = Dataday  + "." +  month + "." + year;
    
    
   clone.querySelector(".location").textContent = aConcert.acf.location;
    
     clone.querySelector(".club").textContent = aConcert.acf.club_name;
    
  
    
 



  eventList.appendChild(clone);
}
fetchConcerts();


//found this stuff online
setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    page++;
    fetchConcerts();
  }
}, 5000)

function bottomVisible() {
  const scrollY = window.scrollY
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}


