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
               <img class="front-face" src="../img/animais/${img}"/>
               <img class="back-face" src="../img/js-badge.svg">
  </div>`;
});

let cardHTML2 = "";

imgs2.forEach(img => {
    cardHTML2 += `<div class="memory-card" data-card="${img}">
                <img class="front-face" src="../img/letras/${img}"/>
                <img class="back-face" src="../img/js-badge.svg">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML2;

/** Fim da Renderização HTML */


const cards = document.querySelectorAll(".memory-card");
let firstCard,
    secondCard;
let lockCards = false;

function flipCard() {
    if (lockCards) 
        return false;
    


    this.classList.add("flip");

    if (! firstCard) {
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    ! isMatch ? unFlipCards() : resetCards(isMatch);
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
    }[firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", flipCard));
// -------------- fim da logica das cartas

let url_string = window.location.href;
let url = new URL(url_string);
let data = url.searchParams.get("minhaVariavel");

// ----------- pega jogador da url
let jogadoresRanking = JSON.parse(localStorage.getItem('players')) || []
jogadoresRanking.push(data)

function escreveJogadores(_valorArray, indice) {
    const divDepois = document.querySelector('.itemranking')
    // Após essa esse elemento o sistema ira criar a div
    const div = document.createElement('div');
    // cria uma div
    div.classList.add("item")
    // Adiciona uma classe a essa div
    div.innerText = `${jogadoresRanking[indice]}`
    // escreve o nome do jogadore no conteudo
    const body = document.querySelector('.grid')
    body.insertBefore(div, divDepois.nextElementSibling)

}
jogadoresRanking.forEach(escreveJogadores)

localStorage.setItem('players', JSON.stringify(jogadoresRanking))
//         coloca no local storage

