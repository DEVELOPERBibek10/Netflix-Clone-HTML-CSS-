const scrollBox = document.querySelector(".movies");
const leftScrollBtn = document.querySelector("#l-btn");
const rightScrollBtn = document.querySelector("#r-btn");

document.querySelectorAll(".movie").forEach(function (img) {
  img.style.backgroundImage = `url(${img.dataset.id})`;
});

function scrollStart() {
  scrollBox.scrollLeft = 0;
  document.querySelector(".left").classList.add("clicked");
  document.querySelector(".right").classList.remove("clicked");
}

function scrollEnd() {
  scrollBox.scrollLeft = scrollBox.scrollWidth;
  document.querySelector(".right").classList.add("clicked");
  document.querySelector(".left").classList.remove("clicked");
}
