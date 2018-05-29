let shopTemplate = document.querySelector("#shopTemplate").content;
let shopList = document.querySelector("#shopList");
let ShopPage = 1;

function fetchShop() {


  let urlParams = new URLSearchParams(window.location.search);

let catid = urlParams.get("category");
  let endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/shop?_embed&per_page=4"+ShopPage
  if(catid){ // DRY
    endpoint = "http://loreleiheckmann.com/wordpress/wordpress/wp-json/wp/v2/shop?_embed&per_page=4"+ ShopPage + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showShop);


}

function showShop(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleItem);
}

function showSingleItem(anItem){
  let clone = shopTemplate.cloneNode(true);
  clone.querySelector(".picture").innerHTML = anItem.content.rendered;
    
    clone.querySelector(".price").innerHTML = anItem.acf.price;
    
  shopList.appendChild(clone);
}
fetchShop();


//found this stuff online
setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    ShopPage++;
    
  }
}, 4000)

function bottomVisible() {
  const scrollY = window.scrollY
  const visible = document.documentElement.clientHeight
  const pageHeight = document.documentElement.scrollHeight
  const bottomOfPage = visible + scrollY >= pageHeight
  return bottomOfPage || pageHeight < visible
}


