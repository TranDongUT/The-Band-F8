const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/* Slider */

const slider = $('#slider');
const textSliders = $$('.text-silder');
let amoutOfSlider = textSliders.length;
let slideBegin = 0;
console.log($(".text-silder.active"));

setInterval(function(){
    if(slideBegin < amoutOfSlider){
        $(".text-silder.active").classList.remove("active");
        textSliders[slideBegin].classList.add('active');
        Object.assign(slider.style,{
            background : `url('/assets/img/slider/${slideBegin+=1}.jpg')`,
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
