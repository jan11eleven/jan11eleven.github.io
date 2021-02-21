// page loading
window.onload = () => {
  document.querySelector("body").style.opacity = "1";
};

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

// gsap hover effect

const projects = document.querySelectorAll(".project-container");

console.log(projects);

gsap.registerPlugin(ScrollTrigger);

// create gsap on projects
for (let i = 1; i < 5; i++) {
  gsap.to(`#project-${i}`, {
    scrollTrigger: {
      trigger: `#project-${i}`,
      start: "20px 80%",
      toggleActions: "restart none none none",
    },
    y: 100,
    ease: "power4.out",
    opacity: 1,
    duration: 1,
  });
}

gsap.to(".title", {
  y: 150,
  opacity: 1,
  duration: 1,
  ease: "power1.out",
});

gsap.to(".sub-title", {
  y: -150,
  opacity: 1,
  duration: 1,
  ease: "power2.out",
  delay: 0.3,
});

gsap.to(".learn-btn", {
  opacity: 1,
  duration: 1.5,
  ease: "slow.out",
  delay: 1.3,
});
