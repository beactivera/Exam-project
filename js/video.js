"use strict";
var Vidtemplate = document.querySelector("#videoTemplate").content,
    VideoeventList = document.querySelector("#videoList"),
    VideoPage = 1;

function fetchVideo() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/video?_embed&per_page=5&page=" + VideoPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/video?_embed&per_page=5&page=" + VideoPage + "&categories=" + catid), fetch(c).then(function(d) {
        return d.json()
    }).then(showVideo)
}

function showVideo(a) {
    console.log(a), lookingForData = !1, a.forEach(showSingleVideo)
}

function showSingleVideo(a) {
    var b = Vidtemplate.cloneNode(!0);
    b.querySelector(".video_eb").innerHTML = a.content.rendered, VideoeventList.appendChild(b)
}
fetchVideo();
var vid = document.getElementById(".video_wp");

function playVid() {
    vid.play()
}