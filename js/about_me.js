"use strict";
var aboutTemplate = document.querySelector("#aboutTemplate").content,
    aboutList = document.querySelector("#aboutList"),
    aboutPage = 1;

function fetchAbout() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/about_me?_embed&per_page=4" + aboutPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/about_me?_embed&per_page=4" + aboutPage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showAbout)
}

function showAbout(a) {
    console.log(a), lookingForData = !1, a.forEach(showSingleQuestion)
}

function showSingleQuestion(a) {
    var b = aboutTemplate.cloneNode(!0);
    b.querySelector(".header").innerHTML = a.title.rendered, b.querySelector(".paragraph").innerHTML = a.content.rendered, aboutList.appendChild(b)
}
fetchAbout(), setInterval(function() {
    bottomVisible() && !1 === lookingForData && (console.log("We've reached rock bottom, fetching articles"), aboutPage++)
}, 4e3);

function bottomVisible() {
    var a = window.scrollY,
        b = document.documentElement.clientHeight,
        c = document.documentElement.scrollHeight;
    return b + a >= c || c < b
}