"use strict";
const hero = document.querySelector(".hero");
const heroButton = hero.querySelector(".btn");

heroButton.addEventListener("click", () => {
  document.getElementById("content").scrollIntoView(true);
});
