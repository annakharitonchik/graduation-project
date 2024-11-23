function main() {
  function openMenu() {
    var list = document.getElementById("list");
    var menu = document.getElementById("menu");
    var closemenu = document.getElementById("close-menu");
    list.style.display = "block";
    menu.style.display = "none";
    closemenu.style.display = "block";
  }
  function closeMenu() {
    var list = document.getElementById("list");
    var menu = document.getElementById("menu");
    var closemenu = document.getElementById("close-menu");
    list.style.display = "none";
    menu.style.display = "inline-flex";
    closemenu.style.display = "none";
  }

  var slider = document.querySelector(".slider");
  var sliderList = slider.querySelector(".slider-list");
  var sliderTrack = slider.querySelector(".slider-track");
  var slides = slider.querySelectorAll(".slide");
  var slideIndex = 0;
  var rects = document.querySelectorAll(".square rect");

  rects[slideIndex].style.fill = "#D2B183";
  num.innerText = `01`;

  rightarrow.onclick = function () {
    rects[slideIndex].style.fill = "white";
    if (slideIndex != slides.length - 1) {
      slideIndex++;
    }
    sliderTrack.style.transition = "transform .5s";
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slides[0].offsetWidth
    }px, 0px, 0px)`;

    rects[slideIndex].style.fill = "#D2B183";
    num.innerText = `0${slideIndex + 1}`;
  };

  leftarrow.onclick = function () {
    rects[slideIndex].style.fill = "white";
    if (slideIndex != 0) {
      slideIndex--;
    }
    sliderTrack.style.transition = "transform .5s";
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slides[0].offsetWidth
    }px, 0px, 0px)`;

    rects[slideIndex].style.fill = "#D2B183";
    num.innerText = `0${slideIndex + 1}`;
  };

  const container = document.querySelectorAll(".right")[1];
  const slider1 = document.querySelector(".slider1");
  const imgLeft = document.querySelector(".img-left");

  Explore.addEventListener("mousemove", (event) => {
    const containerRect = container.getBoundingClientRect();
    let offsetX = event.clientX - containerRect.left;

    if (offsetX < 0) offsetX = 0;
    if (offsetX > containerRect.width) offsetX = containerRect.width;

    const percentage = (offsetX / containerRect.width) * 100;
    slider1.style.left = `${percentage}%`;
    imgLeft.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  });
  close-menu.onclick = closeMenu();
  menu.onclick = openMenu();
}
main();
