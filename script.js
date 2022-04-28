"use strict";
const hero = document.querySelector(".hero");
const heroButton = hero.querySelector(".btn");

heroButton.addEventListener("click", () => {
  document.getElementById("content").scrollIntoView(true);
});

const menu_btn = document.querySelector(".menu-btn");
const nav_container = document.querySelector(".nav-container");

menu_btn.addEventListener("click", () => {
  if (nav_container.getAttribute("target") === "true") {
    nav_container.setAttribute("target", "false");
  } else nav_container.setAttribute("target", "true");
});
