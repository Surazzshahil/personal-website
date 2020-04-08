// preloader
window.onload = function(){
    let preloader = document.querySelector('#preloader');
    let body = document.querySelector('body');
    preloader.style.display = "none";
    setTimeout(function(){
        body.style.overflow = "visible"
    },3000);

}
AOS.init({
    once:true
});
let hamburger = document.querySelector('.hamburger');
let menuBody = document.querySelector('.menu-list');
let linkClick = document.querySelectorAll('nav ul li a');
for(var i=0; i<linkClick.length; i++){
    linkClick[i].addEventListener('click',()=>{
        menuBody.classList.remove('activeMenu');
        hamburger.classList.remove('change')
    })
}

hamburger.addEventListener('click', ()=>{
    menuBody.classList.toggle('activeMenu');
    hamburger.classList.toggle('change');
});

var lastScrollTop=0;
    navbar= document.querySelector('nav');
    window.addEventListener("scroll",function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-92px";
        } else{
            navbar.style.top = "0";
            navbar.style.boxShadow = "0px 2px 16px #0f0f0fc7";
        }
        lastScrollTop = scrollTop;
    });
    window.addEventListener('scroll', ()=>{
        if(scrollY===0){
            navbar.style.boxShadow = "0px 0px 0px #000";
        }
    })
  