// Verwijdende header

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (this.prevScrollpos > currentScrollpos) {
    document.querySelector("header").style.top = "0";
  } else if (currentScrollpos == 0) {
    document.querySelector("header").style.top = "0px";
  } else {
    document.querySelector("header").style.top = "-200px";
  }
  this.prevScrollpos = currentScrollpos;
};

// Scroll vertoning

// var sections = document.querySelectorAll("section");
// var viewHeight = window.innerHeight;

// var revealSection = () => {
//   sections.forEach(section => {
//     var distanceFromTop = section.getBoundingClientRect().top;
//     distanceFromTop < viewHeight + 300
//       ? section.classList.add("scroll-reveal")
//       : section.classList.remove("scroll-reveal");
//   });
// };

// window.addEventListener("load", () => revealSection());
// window.addEventListener("scroll", () => revealSection());

// Pagina transitie volgende

var transitionVolgende = document.querySelector(".transitionVolgende");
var knopVolgende = document.querySelector(".volgende");

knopVolgende.addEventListener("click", e => {
  e.preventDefault();
  transitionVolgende.classList.remove("displaynone");
  console.log(knopVolgende);
  setTimeout(() => {
    window.location.href = knopVolgende.getAttribute("href");
  }, 1000);
});

// Pagina transitie vorige

var transitionVorige = document.querySelector(".transitionVorige");
var knopVorige = document.querySelector(".vorige");

knopVorige.addEventListener("click", e => {
  e.preventDefault();
  transitionVorige.classList.remove("displaynone");
  console.log(knopVorige);
  setTimeout(() => {
    window.location.href = knopVorige.getAttribute("href");
  }, 1000);
});

// Pagina transitie home

var transitionHome = document.querySelector(".transitionHome");
var knopHome = document.querySelector(".home");

knopHome.addEventListener("click", e => {
  e.preventDefault();
  transitionHome.classList.remove("displaynone");
  console.log(knopHome);
  setTimeout(() => {
    window.location.href = knopHome.getAttribute("href");
  }, 1000);
});
