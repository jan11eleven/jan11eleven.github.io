$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  });
});

const nav = document.querySelector("nav");
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      nav.classList.add("show-nav");
      document.querySelector("nav").classList.remove("hide-nav");
    } else if (st > lastScrollTop) {
      nav.classList.add("hide-nav");
      document.querySelector("nav").classList.remove("show-nav");
    }
    if (window.scrollY == 0) {
      nav.classList.remove("show-nav");
      nav.classList.remove("hide-nav");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
