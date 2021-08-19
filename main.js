const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "Letra A.svg",
  "Letra B.svg",
  "Letra C.svg",
  "Letra D.svg",
  "Letra E.svg",
  "Letra F.svg",
  "Letra G.svg",
  "Letra H.svg"
];

const imgs2 = [
  "Letra A.svg",
  "Letra B.svg",
  "Letra C.svg",
  "Letra D.svg",
  "Letra E.svg",
  "Letra F.svg",
  "Letra G.svg",
  "Letra H.svg"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
               <img class="front-face" src="img/${img}"/>
               <img class="back-face" src="img/js-badge.svg">
  </div>`;
});

let cardHTML2 = "";

imgs2.forEach(img => {
  cardHTML2 += `<div class="memory-card" data-card="${img}">
               <img class="front-face" src="img2/${img}"/>
               <img class="back-face" src="img/js-badge.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML2;

/** Fim da Renderização HTML */

const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? unFlipCards() : resetCards(isMatch);
}

function unFlipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetCards();
  }, 1000);
}

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));
