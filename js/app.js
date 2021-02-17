// check if user scrolling up or down
let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      document.querySelector("header").classList.add("show-nav");
      document.querySelector("header").classList.remove("hide-nav");
    } else if (st > lastScrollTop) {
      document.querySelector("header").classList.add("hide-nav");
      document.querySelector("header").classList.remove("show-nav");
    }
    if (window.scrollY == 0) {
      document.querySelector("header").classList.remove("show-nav");
      document.querySelector("header").classList.remove("hide-nav");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);

window.onload = () => {
  document.querySelector("body").style.opacity = "1";
};

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth);
// });
