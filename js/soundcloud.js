"use strict";
var sctemplate = document.querySelector("#scTemplate").content,
    scList = document.querySelector("#scList"),
    SCpage = 1;

function fetchSc() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/soundcloud?_embed&per_page=4" + SCpage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/soundcloud?_embed&per_page=4" + SCpage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showSc)
}

function showSc(a) {
    console.log(a), lookingForData = !1, a.forEach(showSingleSc)
}

function showSingleSc(a) {
    var b = sctemplate.cloneNode(!0);
    b.querySelector(".link").innerHTML = a.content.rendered, scList.appendChild(b)
}
fetchSc(), setInterval(function() {
    bottomVisible() && !1 === lookingForData && (console.log("We've reached rock bottom, fetching articles"), SCpage++)
}, 4e3);

function bottomVisible() {
    var a = window.scrollY,
        b = document.documentElement.clientHeight,
        c = document.documentElement.scrollHeight;
    return b + a >= c || c < b
}