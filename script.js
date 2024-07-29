// ===================toggle icon navbar===================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active')
    menuIcon.classList.toggle("fa-solid fa-x")
};

// ===================scroll sections active links===================

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let ofset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => ofset && top < offset + heigth) {
            navlinks.forEach(links => {
                links.classList.remove('.active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
// ===================scroll sections active links===================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// ===================remove toogle icon and navbar when click navbar link(scrool)===================    
navbar.classList.remove('active')
menuIcon.classList.remove("fa-solid fa-x")

};

// ===================scroll revel===================

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.socail-media, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .socail-media h1 ', { origin: 'left' });
ScrollReveal().reveal('.about-contant, .socail-media p ', { origin: 'rigth' });


// ===================type j.s===================
var typed = new Typed('.text', {
    strings: ['Fronted Develper', 'Backed Develper', 'Full Stack Develper',],
    typeSpeed: 130,
    BackSpeed:50,
    backDelay:1000,
    loop:true,
  });















