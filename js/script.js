"use strict";
var template = document.querySelector("#template").content,
    eventList = document.querySelector("#eventList"),
    page = 1,
    lookingForData = !1;

function fetchConcerts() {
    lookingForData = !0;
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/gigs?_embed&per_page=5&page=" + page;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/gigs?_embed&per_page=5&page=" + page + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showConcert)
}

function showConcert(a) {
    console.log(a), lookingForData = !1, a.forEach(showSingleConcert)
}

function showSingleConcert(a) {
    var f = template.cloneNode(!0);
    f.querySelector(".day").textContent = a.acf.weekday;
    var b = a.acf.date.substring(6, 8),
        c = a.acf.date.substring(4, 6),
        d = a.acf.date.substring(0, 4);
    f.querySelector(".date").textContent = b + "." + c + "." + d, f.querySelector(".location").textContent = a.acf.location, f.querySelector(".club").textContent = a.acf.club_name, eventList.appendChild(f)
}
fetchConcerts(), setInterval(function() {
    bottomVisible() && !1 == lookingForData && (console.log("We've reached rock bottom, fetching articles"), page++, fetchConcerts())
}, 5e3);

function bottomVisible() {
    var a = window.scrollY,
        b = document.documentElement.clientHeight,
        c = document.documentElement.scrollHeight;
    return b + a >= c || c < b
}