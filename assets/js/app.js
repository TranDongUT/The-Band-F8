const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/* Slider */

const slider = $('#slider');
const textSliders = $$('.text-silder');
let amoutOfSlider = textSliders.length;
let slideBegin = 0;

setInterval(function(){
    if(slideBegin < amoutOfSlider){
        $(".text-silder.active").classList.remove("active");
        textSliders[slideBegin].classList.add('active');
        Object.assign(slider.style,{
            background : `url("./assets/img/slider/s${slideBegin+=1}.jpg")`,
            backgroundSize : "contain",
            backgroundRepeat : "no-repeat",
        })
    }
    else{
        slideBegin = 0
    }
}, 3000);


/* Show Modal buy tickets */

const modal = $(".modal");
const modalContainer = $(".modal-container");
const modalBuyBtn = $$(".place-buy-btn");
const modalCloseBtn = $(".modal-close");

modalBuyBtn.forEach(function(btn) {
    btn.onclick = function(){
        modal.classList.add('show');
        return false
    }
});

modalCloseBtn.onclick = function(){
    modal.classList.remove('show');
}

modal.onclick = function(){
    modal.classList.remove('show');
    
}

modalContainer.onclick = function(e){
    e.stopPropagation();
}


        /* mobile - menu click */
const menuBtn = $(".menu-btn");
const header = $("#header");
const content = $("#content");
const navItems = $$("#nav li");
const subNav = $("#nav li:last-child");
const subNavItems = $('.sub-nav');
console.log(subNavItems.clientHeight);



navItems.forEach(function(e,index){
    e.onclick = function(){
        if(index != 4){
            header.style.height = headerHeight + 'px';
        }
        else{
            subNav.onclick = function(){
                if(header.clientHeight == 228){
                    header.style.height = 336 + 'px';
                }
                else{
                     header.style.height = 228 + 'px'
                }
            }
        }
    }
})

content.onclick = function(){
    header.style.height = headerHeight + 'px';
}
let headerHeight = header.clientHeight;
menuBtn.onclick = function(){
    if(header.clientHeight == headerHeight){
        header.style.height = 228 + 'px'
    }
    else{
        header.style.height = headerHeight + 'px';
    }
    
}
