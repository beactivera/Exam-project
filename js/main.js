'use strict';
var bgLogo = document.querySelector('.logo-bg'),
    logo = document.querySelector('.logo'),
    leftSide = document.querySelector('.left-side-bg'),
    rightSide = document.querySelector('.right-side-bg'),
    hplogo = document.querySelector('.logo-hp'),
    intro = document.querySelector('.intro'),
    home = document.querySelector('.home-page'),
    musicNav = document.querySelector('.music-nav'),
    music = document.querySelector('.music-content'),
    musicDesk = document.querySelector('.music-desk'),
    rightCloseMusic = document.querySelector('.cross-right-music'),
    aboutNav = document.querySelector('.about-nav'),
    about = document.querySelector('.about-content'),
    aboutDesk = document.querySelector('.about-desk'),
    rightCloseAbout = document.querySelector('.cross-right-about'),
    showsNav = document.querySelector('.shows-nav'),
    shows = document.querySelector('.shows-content'),
    showsDesk = document.querySelector('.shows-desk'),
    rightCloseShows = document.querySelector('.cross-right-shows'),
    shopNav = document.querySelector('.shop-nav'),
    shop = document.querySelector('.shop'),
    shopDesk = document.querySelector('.shop-desk'),
    rightCloseShop = document.querySelector('.cross-right-shop');
home.classList.add('hide'), music.classList.add('hide'), about.classList.add('hide'), shows.classList.add('hide'), shop.classList.add('hide'), bgLogo.addEventListener('click', openHomePage);

function openHomePage() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.add('hide'), about.classList.add('hide'), shop.classList.add('hide')
}
musicNav.addEventListener('click', gotoMusic), musicDesk.addEventListener('click', gotoMusic);

function gotoMusic() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.remove('hide'), shows.classList.add('hide'), about.classList.add('hide'), shop.classList.add('hide'), musicNav.style.display = 'none', aboutNav.style.display = 'none', showsNav.style.display = 'none', shopNav.style.display = 'none'
}
rightCloseMusic.addEventListener('click', backToHomePageR);

function backToHomePageR() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.add('hide'), about.classList.add('hide'), shop.classList.add('hide'), musicNav.style.display = 'block', aboutNav.style.display = 'block', showsNav.style.display = 'block', shopNav.style.display = 'block'
}
showsNav.addEventListener('click', gotoShows), showsDesk.addEventListener('click', gotoShows);

function gotoShows() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.remove('hide'), about.classList.add('hide'), shop.classList.add('hide'), showsNav.style.display = 'none', shopNav.style.display = 'none'
}
rightCloseShows.addEventListener('click', backToHomePageL);

function backToHomePageL() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.add('hide'), about.classList.add('hide'), shop.classList.add('hide'), showsNav.style.display = 'block', shopNav.style.display = 'block', musicNav.style.display = 'block', aboutNav.style.display = 'block'
}
aboutNav.addEventListener('click', gotoAbout), aboutDesk.addEventListener('click', gotoAbout);

function gotoAbout() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.add('hide'), about.classList.remove('hide'), shop.classList.add('hide'), musicNav.style.display = 'none', aboutNav.style.display = 'none', showsNav.style.display = 'none', shopNav.style.display = 'none'
}
rightCloseAbout.addEventListener('click', backToHomePageR), shopNav.addEventListener('click', gotoShop), shopDesk.addEventListener('click', gotoShop);

function gotoShop() {
    intro.classList.add('hide'), home.classList.remove('hide'), music.classList.add('hide'), shows.classList.add('hide'), about.classList.add('hide'), shop.classList.remove('hide'), showsNav.style.display = 'none', shopNav.style.display = 'none'
}
rightCloseShop.addEventListener('click', backToHomePageL), document.getElementById('musicNav').addEventListener('click', closePartOfNav), document.getElementById('showsNav').addEventListener('click', closePartOfNav), document.getElementById('aboutNav').addEventListener('click', closePartOfNav), document.getElementById('shopNav').addEventListener('click', closePartOfNav);

function closePartOfNav() {
    document.getElementById('showsNav').classList.add = 'hide', document.getElementById('shopNav').classList.add = 'hide'
}
document.getElementById('cross').addEventListener('click', openNav);

function openNav() {
    document.getElementById('showsNav').classList.remove = 'hide', document.getElementById('shopNav').classList.remove = 'hide'
}