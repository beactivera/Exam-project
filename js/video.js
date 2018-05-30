let Vidtemplate = document.querySelector("#videoTemplate").content;
let VideoeventList = document.querySelector("#videoList");
let VideoPage = 1;






function fetchVideo() {


  let urlParams = new URLSearchParams(window.location.search);

let Videoid = urlParams.get("category");
  let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/video?_embed&per_page=5&page="+ VideoPage
  if(Videoid){ // DRY
    endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/video?_embed&per_page=5&page="+ VideoPage + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showVideo);


}

function showVideo(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleVideo);
}

function showSingleVideo(aVideo){
  let clone = Vidtemplate.cloneNode(true);
  clone.querySelector(".video_eb").innerHTML = aVideo.content.rendered;
    
    
  VideoeventList.appendChild(clone);
}
fetchVideo();


var vid = document.getElementById(".video_wp"); 

function playVid() { 
    vid.play(); 
} 



