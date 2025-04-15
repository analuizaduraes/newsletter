const formCons = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
// declare as variáveis que você vai usar

formCons.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");

});