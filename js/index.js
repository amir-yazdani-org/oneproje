const slides = document.querySelector('.slider-item').children;

const next = document.querySelector('.next');

const prev = document.querySelector('.prev');

const totalSlides = slides.length;

let index = 0;

let duration = 6000;

prev.onclick = () => {
    slide('prev');
}

next.onclick = () => {
    slide('next');
}

function slide(direction) {
    progres();
    if (direction == 'next') {
        if (index == totalSlides - 1) {
            index = 0;
        } else {
            index++;
        }
    }
    if (direction == 'prev') {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }
    clearInterval(timer);
    timer = setInterval(autoSlide, duration);

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function progres() {
    document.querySelector('.progres').innerHTML = "";
    const div = document.createElement('div');
    div.style.width = "200px";
    div.style.height = "5px";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.backgroundColor = "#c00";
    div.style.animation = "progres " + duration/1000 + "s linear";
    document.querySelector('.progres').appendChild(div);
}
progres();

function autoSlide(){
    slide('next');
}
let timer = setInterval(autoSlide, duration);


const searchForm = document.querySelector('.search-form');

const search = document.querySelector('.search');

searchForm.addEventListener('click',function(){
    search.classList.toggle('show');
});

const dropdown = document.querySelector('#dropdown');

const megamenu = document.querySelector('.mega-menu');

dropdown.addEventListener('click',function(){
    megamenu.classList.toggle('fade');
})

const closeicon = document.querySelector('.close');

const navbarlist = document.querySelector('#navbar-list'); 

const hamburger = document.querySelector('.hamburger');

closeicon.addEventListener('click',function(){
    navbarlist.classList.add('hide');
    navbarlist.classList.remove('show-navbar');
})

hamburger.addEventListener('click',function(){
    navbarlist.classList.add('show-navbar');
    navbarlist.classList.remove('hide');
})