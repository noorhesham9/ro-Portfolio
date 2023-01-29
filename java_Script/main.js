const sizes = [1, 1, 2, 2, 3];
const sizes2 = [1, 3, 2, 2, 3, 4, 4];
let light = document.querySelectorAll(".light");
//get random position between 1 - 100;
function randomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 300; i++) {
  const top = randomPosition(1, 100);
  const left = randomPosition(1, 100);
  const random = Math.floor(Math.random() * sizes2.length);
  const randomSize = sizes2[random];
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = top + "%";
  div.style.left = left + "%";
  div.style.height = randomSize + "px";
  div.style.width = randomSize + "px";

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
  console.log(light.length);

  light[1].appendChild(div);
}
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
  console.log(light.length);

  light[0].appendChild(div);
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

window.addEventListener("resize", WindowSize);
window.addEventListener("load", WindowSize);
function WindowSize() {
  myWidth = window.innerWidth;
  if (myWidth < 767) {
    header.style.backgroundColor = "rgba(36, 36, 36, 0.9)";

    header.style.height = "80px";
  } else {
    header.style.backgroundColor = "rgba(36, 36, 36, 0.6)";

    header.style.height = "100px";
  }
}

window.onscroll = function () {
  if (window.scrollY >= 140) {
    header.style.backgroundColor = "rgba(36, 36, 36, 0.9)";
    header.style.height = "80px";
  } else if (window.scrollY <= 130 && myWidth > 767) {
    header.style.backgroundColor = "rgba(36, 36, 36, 0.6)";

    header.style.height = "100px";
  }
};

// let didScroll = false;

// window.onscroll = () => (didScroll = true);

// setInterval(() => {
//   if (didScroll) {
//     didScroll = false;
//     header.style.backgroundColor = "#00011f";
//   } else {
//     header.style.backgroundColor = "transparent";
//   }
// }, 200);

// window.addEventListener("scroll", function () {

// });

// start loading page

let loadddd = document.getElementById("loadddd");

document.body.style.overflow = "hidden ";

setTimeout(function () {
  loadddd.style.top = "-100vh";
  document.body.style.overflow = "visible ";
}, 3500);

// start servises functions
let _3dbox = document.querySelector("._3dbox");
let servcomcont = document.getElementById("servcomcont");
let servlogo = document.querySelector(".left .logo");
let servsocial = document.querySelector(".left .social");
let servIllustrations = document.querySelector(".left .Illustrations");
let servdecore = document.querySelector(".right .decore");
let servbranding = document.querySelector(".right .branding");
let servcourses = document.querySelector(".right .courses");
let servleft = document.querySelector(".maintitles .left");
let servright = document.querySelector(".maintitles .right");

let contlogo = document.querySelector(".content .title .logo");
let contsocial = document.querySelector(".content .title .social");
let contIllustrations = document.querySelector(
  ".content .title .Illustrations"
);
let contdecore = document.querySelector(".content .title .decore");
let contbranding = document.querySelector(".content .title .branding");
let contcourses = document.querySelector(".content .title .courses");

let clock = document.getElementById("clock");
let seconds = document.getElementById("seconds");

servlogo.addEventListener("click", function () {
  let sec = 4;
  seconds.innerHTML = `5`;

  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");

  _3dbox.classList.add("deg1");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);

  setTimeout(() => {
    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";

    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);
    clearInterval(timer);
    contlogo.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    _3dbox.classList.remove("deg1");
    contlogo.style.display = "none";
  }, 5400);
  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);

  contlogo.style.display = "block";

  setTimeout(() => {
    contlogo.style.opacity = "1";
  }, 400);

  contsocial.style.display = "none";
  contIllustrations.style.display = "none";
  contdecore.style.display = "none";
  contbranding.style.display = "none";
  contcourses.style.display = "none";
});

servsocial.addEventListener("click", function () {
  setTimeout(() => {
    _3dbox.classList.remove("deg2");
    contsocial.style.display = "none";
  }, 5400);
  _3dbox.classList.add("deg2");
  contsocial.style.display = "block";
  contIllustrations.style.display = "none";
  contdecore.style.display = "none";
  contbranding.style.display = "none";
  contcourses.style.display = "none";
  contlogo.style.display = "none";

  let sec = 4;
  seconds.innerHTML = `5`;
  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);
  setTimeout(() => {
    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";
    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);

    clearInterval(timer);
    contsocial.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);
  setTimeout(() => {
    contsocial.style.opacity = "1";
  }, 400);
});

servIllustrations.addEventListener("click", function () {
  setTimeout(() => {
    _3dbox.classList.remove("deg3");
    contIllustrations.style.display = "none";
  }, 5400);
  _3dbox.classList.add("deg3");
  contsocial.style.display = "none";
  contIllustrations.style.display = "block";
  contdecore.style.display = "none";
  contbranding.style.display = "none";
  contcourses.style.display = "none";
  contlogo.style.display = "none";
  setTimeout(() => {
    contIllustrations.style.opacity = "1";
  }, 400);

  let sec = 4;
  seconds.innerHTML = `5`;
  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);
  setTimeout(() => {
    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";
    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);

    clearInterval(timer);
    contIllustrations.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);
});

servdecore.addEventListener("click", function () {
  setTimeout(() => {
    _3dbox.classList.remove("deg4");
    contdecore.style.display = "none";
  }, 5400);
  _3dbox.classList.add("deg4");
  contsocial.style.display = "none";
  contIllustrations.style.display = "none";
  contdecore.style.display = "block";
  contbranding.style.display = "none";
  contcourses.style.display = "none";
  contlogo.style.display = "none";
  setTimeout(() => {
    contdecore.style.opacity = "1";
  }, 400);

  let sec = 4;
  seconds.innerHTML = `5`;
  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);
  setTimeout(() => {
    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";
    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);

    clearInterval(timer);
    contdecore.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);
});

servbranding.addEventListener("click", function () {
  setTimeout(() => {
    _3dbox.classList.remove("deg5");
    contbranding.style.display = "none";
  }, 5400);
  _3dbox.classList.add("deg5");
  contsocial.style.display = "none";
  contIllustrations.style.display = "none";
  contdecore.style.display = "none";
  contbranding.style.display = "block";
  contcourses.style.display = "none";
  contlogo.style.display = "none";
  setTimeout(() => {
    contbranding.style.opacity = "1";
  }, 400);

  let sec = 4;
  seconds.innerHTML = `5`;
  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);
  setTimeout(() => {
    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";
    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);

    clearInterval(timer);
    contbranding.style.opacity = "0";
  }, 5000);

  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);
});

servcourses.addEventListener("click", function () {
  setTimeout(() => {
    _3dbox.classList.remove("deg6");
    contcourses.style.display = "none";
  }, 5400);
  _3dbox.classList.add("deg6");
  contsocial.style.display = "none";
  contIllustrations.style.display = "none";
  contdecore.style.display = "none";
  contbranding.style.display = "none";
  contcourses.style.display = "block";
  contlogo.style.display = "none";
  setTimeout(() => {
    contcourses.style.opacity = "1";
  }, 400);

  let sec = 4;
  seconds.innerHTML = `5`;
  let timer = setInterval(() => {
    seconds.innerHTML = `${sec}`;
    sec--;
  }, 1000);
  clock.style.display = "flex";
  clock.classList.add("anima");
  servcomcont.classList.add("vvv");
  servleft.style.opacity = "0";
  servright.style.opacity = "0";
  setTimeout(() => {
    servleft.style.display = "none";
    servright.style.display = "none";
  }, 500);
  setTimeout(() => {
    contcourses.style.opacity = "0";

    servcomcont.classList.remove("vvv");
    servleft.style.display = "flex";
    servright.style.display = "flex";
    setTimeout(() => {
      servleft.style.opacity = "1";
      servright.style.opacity = "1";
    }, 500);

    clearInterval(timer);
  }, 5000);

  setTimeout(() => {
    clock.style.display = "none";
  }, 5200);
});

servlogo.addEventListener("mouseenter", function () {
  _3dbox.classList.add("deg45");
  _3dbox.classList.remove("deg45_2");
  _3dbox.classList.remove("deg45_3");
  _3dbox.classList.remove("deg45_4");
  _3dbox.classList.remove("deg45_5");
  _3dbox.classList.remove("deg45_6");
});

servlogo.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45");
});
servsocial.addEventListener("mouseenter", function () {
  _3dbox.classList.add("deg45_2");
  _3dbox.classList.remove("deg45");
  _3dbox.classList.remove("deg45_3");
  _3dbox.classList.remove("deg45_4");
  _3dbox.classList.remove("deg45_5");
  _3dbox.classList.remove("deg45_6");
});

servsocial.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45_2");
});

servIllustrations.addEventListener("mouseenter", function () {
  _3dbox.classList.remove("deg45_2");
  _3dbox.classList.remove("deg45");
  _3dbox.classList.remove("deg45_4");
  _3dbox.classList.remove("deg45_5");
  _3dbox.classList.remove("deg45_6");

  _3dbox.classList.add("deg45_3");
});

servIllustrations.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45_3");
});

servdecore.addEventListener("mouseenter", function () {
  _3dbox.classList.remove("deg45_2");
  _3dbox.classList.remove("deg45");
  _3dbox.classList.remove("deg45_5");
  _3dbox.classList.add("deg45_4");
  _3dbox.classList.remove("deg45_6");

  _3dbox.classList.remove("deg45_3");
});
servdecore.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45_4");
});

servbranding.addEventListener("mouseenter", function () {
  _3dbox.classList.remove("deg45_2");
  _3dbox.classList.remove("deg45");
  _3dbox.classList.remove("deg45_4");
  _3dbox.classList.remove("deg45_6");
  _3dbox.classList.add("deg45_5");

  _3dbox.classList.remove("deg45_3");
});

servbranding.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45_5");
});
servcourses.addEventListener("mouseenter", function () {
  _3dbox.classList.remove("deg45_2");
  _3dbox.classList.remove("deg45");
  _3dbox.classList.remove("deg45_4");
  _3dbox.classList.add("deg45_6");
  _3dbox.classList.remove("deg45_5");

  _3dbox.classList.remove("deg45_3");
});
servcourses.addEventListener("mouseleave", function () {
  _3dbox.classList.remove("deg45_6");
});

function animationservices() {
  setTimeout(() => {
    _3dbox.style.transform = "rotateX(0deg) rotatey(0deg) ";
  }, 0);

  setTimeout(() => {
    _3dbox.style.transform = "rotateX(0deg)  rotateY(90deg) ";
  }, 1500);

  setTimeout(() => {
    _3dbox.style.transform = " rotateX(90deg) ";
  }, 3000);

  setTimeout(() => {
    _3dbox.style.transform = " rotateY(-90deg) ";
  }, 4500);
  setTimeout(() => {
    _3dbox.style.transform = "  rotateY(180deg) ";
  }, 6000);
  setTimeout(() => {
    _3dbox.style.transform = " rotateX(-90deg)";
  }, 7500);
}

animationservices();

let n1interval, n2interval, n3interval, n4interval, n5interval, n6interval;

let n1out = setTimeout(() => {
  n1interval = setInterval(() => {
    _3dbox.style.transform = "rotateX(0deg) rotatey(0deg) ";
  }, 9000);
}, 0);

let n2out = setTimeout(() => {
  n2interval = setInterval(() => {
    _3dbox.style.transform = "rotateX(0deg)  rotateY(90deg) ";
  }, 9000);
}, 1500);

let n3out = setTimeout(() => {
  n3interval = setInterval(() => {
    _3dbox.style.transform = " rotateX(90deg) ";
  }, 9000);
}, 3000);
let n4out = setTimeout(() => {
  n4interval = setInterval(() => {
    _3dbox.style.transform = " rotateY(-90deg) ";
  }, 9000);
}, 4500);
let n5out = setTimeout(() => {
  n5interval = setInterval(() => {
    _3dbox.style.transform = "  rotateY(180deg) ";
  }, 9000);
}, 6000);

let n6out = setTimeout(() => {
  n6interval = setInterval(() => {
    _3dbox.style.transform = " rotateX(-90deg)";
  }, 9000);
}, 7500);

// end  servises functions
