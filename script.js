"use strict";

const cards = document.querySelectorAll(".panel");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    cards[i].classList.add("active");
  });
}
