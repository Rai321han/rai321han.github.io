"use strict";
const hero = document.querySelector(".hero");
const heroButton = hero.querySelector(".btn");

heroButton.addEventListener("click", () => {
  document.getElementById("content").scrollIntoView(true);
});

const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
const openbtn = document.getElementById("openSVG");
const closebtn = document.getElementById("closeSVG");

/*////////Changing menu button/////////////*/
const changeButton = function (target) {
  let state1 = "";
  let state2 = "";
  if (target) {
    state1 = "open";
    state2 = "close";
  } else {
    state1 = "close";
    state2 = "open";
  }
  openbtn.classList.remove(`menu-btn--${state1}`);
  openbtn.classList.add(`menu-btn--${state2}`);
  closebtn.classList.remove(`menu-btn--${state2}`);
  closebtn.classList.add(`menu-btn--${state1}`);
};

menu.addEventListener("click", (e) => {
  if (nav_container.getAttribute("target") === "true") {
    nav_container.setAttribute("target", "false");
    changeButton(false);
  } else {
    nav_container.setAttribute("target", "true");
    changeButton(true);
  }
});
