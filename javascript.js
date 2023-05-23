"use strict";

//  SCROLL NAV

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (this.scrollY > 20) {
        navbar.classList.add("sticky")
    } else { 
        navbar.classList.remove("sticky");
    }
})

//  NAV SELECTED

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuLi = document.querySelectorAll(".menu-li a");

const observer = new IntersectionObserver( ent => {
    ent.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu-li a[href='#${id}']`);
        
        if(entry.isIntersecting) {
            menuLink.classList.add("selected");
        } else {
            menuLink.classList.remove("selected");
        }
    })
}, { 
    rootMargin: "-70% 0px -30% 0px"
 });

// NAV RESPONSIVE

menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("active");
})

menuLi.forEach( btn => {
    btn.addEventListener("click", () =>{
        menu.classList.remove("active");
    })

    const hashtag = btn.getAttribute("href");
    const target = document.querySelector(hashtag);
    if(target) {
        observer.observe(target);
    }
})

//  TEXTO TYPED

const typed = new Typed(".typed", {
    strings: ["Desarrollador web", "Front-end"],
    typeSpeed: 75,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 800,
    loop: true
});


//  OBSERVER

const navMenu = document.querySelector(".menu");
const homeContainer = document.querySelector(".home-content");
const tech = document.querySelector(".tech");
const socialMedia = document.querySelector(".social-media");

const cargarSection = (ent, obs) => {
  ent.forEach((entrada) => {
      if(entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      } else {
          entrada.target.classList.remove('visible');
      }
    }
  )
}

const observador = new IntersectionObserver(cargarSection, {
    root: null,
    rootMargin: "30% 0px",
    threshold: 0.5
});

observador.observe(navMenu);
observador.observe(homeContainer);
observador.observe(tech);
observador.observe(socialMedia);


const hContainer = document.querySelector(".card-container");
const card = document.querySelectorAll(".card");

const observerLight2 = new IntersectionObserver( en => {
  en.forEach(ents =>{
    if(ents.isIntersecting) {
      card.forEach( k => {
        k.style.animation = "border-card 1.5s ease";
      })
    }
  })
}, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
})

observerLight2.observe(hContainer);

//  PARTICULAS

particlesJS(
    {
        "particles": {
          "number": {
            "value": 120,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "remove"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);


//  FOOTER

const date = new Date()

document.querySelector(".date").innerHTML = date.getFullYear();
