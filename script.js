const navToggler = document.querySelector(".navbar-toggler");
const navClose = document.querySelector(".navbar-close");
const navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navCollapse.classList.remove("showNav");
});

//navbar scroll
let navbarDiv = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add("navbar-scroll");
  } else {
    navbarDiv.classList.remove(".navbar-scroll");
  }
});

//videp
let video = document.querySelector(".video-wrapper video");
document.getElementById("play-btn").addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
