const sizes = [1, 1, 2, 2, 3];
let light = document.getElementById("light");
//get random position between 1 - 100;
function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const body = document.querySelector(".body");

for (let i = 0; i < 300; i++) {
  const top = randomPosition(1, 100);
  const left = randomPosition(1, 100);
  const random = Math.floor(Math.random() * sizes.length);
  const randomSize = sizes[random];
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = top + "%";
  div.style.left = left + "%";
  div.style.height = randomSize + "px";
  div.style.width = randomSize + "px";
  div.style.backgroundColor = "#FFFFFF";
  div.style.borderRadius = "50%";
  if (i <= 50) {
    div.classList.add("star1");
  }
  if (i <= 100 && i > 50) {
    div.classList.add("star2");
  }
  if (i <= 150 && i > 100) {
    div.classList.add("star3");
  }
  if (i <= 200 && i > 150) {
    div.classList.add("star4");
  }
  if (i <= 250 && i > 200) {
    div.classList.add("star5");
  }
  if (i <= 300 && i > 250) {
    div.classList.add("star6");
  }
  light.appendChild(div);
}

let navForMob = document.querySelector(".navForMob");
let closenavForMob = document.getElementById("closenavForMob");

let logo = document.querySelector(".top .logo");
let x = document.querySelector(".top .x");
let firstch = document.querySelector(".middle ul :first-child");
let secch = document.querySelector(".middle ul :nth-child(2)");
let thirdch = document.querySelector(".middle ul :nth-child(3)");
let forthch = document.querySelector(".middle ul .bblastch");
let fifthch = document.querySelector(".middle ul .blastch");
let sexthch = document.querySelector(".middle ul .lastch");

let botoi1 = document.querySelector(".bottom a:first-child i");
let botoi2 = document.querySelector(".bottom a:nth-child(2) i");
let botoi3 = document.querySelector(".bottom a:nth-child(3) i");

closenavForMob.addEventListener("click", function () {
  navForMob.classList.add("hide");
  setTimeout(function () {
    navForMob.style.top = "100vh";
  }, 2420);
  setTimeout(function () {
    logo.style.opacity = "0";
  }, 550);
  setTimeout(function () {
    x.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    firstch.style.opacity = "0";
  }, 980);
  setTimeout(function () {
    secch.style.opacity = "0";
  }, 1120);
  setTimeout(function () {
    thirdch.style.opacity = "0";
  }, 1270);
  setTimeout(function () {
    forthch.style.opacity = "0";
  }, 1420);
  setTimeout(function () {
    fifthch.style.opacity = "0";
  }, 1570);
  setTimeout(function () {
    sexthch.style.opacity = "0";
  }, 1720);
  setTimeout(function () {
    botoi1.style.opacity = "0";
    botoi2.style.opacity = "0";
    botoi3.style.opacity = "0";
  }, 1720);
  navForMob.classList.remove("visible");
});
let burger = document.getElementById("burger");

burger.addEventListener("click", function () {
  setTimeout(function () {
    navForMob.style.top = "0";
  }, 650);

  setTimeout(function () {
    logo.style.opacity = "1";
  }, 940);
  setTimeout(function () {
    x.style.opacity = "1";
  }, 1010);
  setTimeout(function () {
    firstch.style.opacity = "1";
  }, 1300);
  setTimeout(function () {
    secch.style.opacity = "1";
  }, 1400);
  setTimeout(function () {
    thirdch.style.opacity = "1";
  }, 1500);
  setTimeout(function () {
    forthch.style.opacity = "1";
  }, 1600);
  setTimeout(function () {
    fifthch.style.opacity = "1";
  }, 1700);
  setTimeout(function () {
    sexthch.style.opacity = "1";
  }, 1800);
  setTimeout(function () {
    botoi1.style.opacity = "1";
    botoi2.style.opacity = "1";
    botoi3.style.opacity = "1";
  }, 1800);
  navForMob.classList.add("visible");
  navForMob.classList.remove("hide");
});

let header = document.getElementById("header");

let didScroll = false;

window.onscroll = () => (didScroll = true);

setInterval(() => {
  if (didScroll) {
    didScroll = false;
    header.style.backgroundColor = "#00011f";
  } else {
    header.style.backgroundColor = "transparent";
  }
}, 200);

// window.addEventListener("scroll", function () {

// });
