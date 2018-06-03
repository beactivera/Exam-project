"use strict";
var shopTemplate = document.querySelector("#shopTemplate").content,
    shopList = document.querySelector("#shopList"),
    ShopPage = 1;

function fetchShop() {
    var a = new URLSearchParams(window.location.search),
        b = a.get("category"),
        c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/shop?_embed&per_page=4" + ShopPage;
    b && (c = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/shop?_embed&per_page=4" + ShopPage + "&categories=" + b), fetch(c).then(function(d) {
        return d.json()
    }).then(showShop)
}

function showShop(a) {
    console.log(a), lookingForData = !1, a.forEach(showSingleItem)
}

function showSingleItem(a) {
    var b = shopTemplate.cloneNode(!0);
    b.querySelector(".picture").innerHTML = a.content.rendered, b.querySelector(".price").innerHTML = a.acf.price, shopList.appendChild(b)
}
fetchShop(), setInterval(function() {
    bottomVisible() && !1 === lookingForData && (console.log("We've reached rock bottom, fetching articles"), ShopPage++)
}, 4e3);

function bottomVisible() {
    var a = window.scrollY,
        b = document.documentElement.clientHeight,
        c = document.documentElement.scrollHeight;
    return b + a >= c || c < b
}