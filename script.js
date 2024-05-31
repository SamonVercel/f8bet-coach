var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var headerContain = document.querySelector(".header-contain2");

menuBtn.addEventListener("click", () => {
  headerContain.style.transition = "0.3s";
  setTimeout(() => {
    headerContain.style.left = "0%";
  }, 1);
});

closeBtn.addEventListener("click", () => {
  headerContain.style.transition = "0.3s";
  setTimeout(() => {
    headerContain.style.left = "-100%";
  }, 1);
});

var swiper = new Swiper(".cubeSwiper", {
  // effect: "cube",
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 6000,
  grabCursor: true,
  pauseOnMouseEnter: true,
});

var closeMessage = document.querySelector(".close-ms");
var message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});
