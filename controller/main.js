"use strict"
const cardBoard = document.querySelector("#cardboard");
const imgs = [
    "Letra B.svg",
    "Letra A.svg",
    "Letra D.svg",
    "Letra F.svg",
    "Letra G.svg",
    "Letra E.svg",
    "Letra H.svg",
    "Letra C.svg"
];

const imgs2 = [
    "Letra H.svg",
    "Letra D.svg",
    "Letra E.svg",
    "Letra C.svg",
    "Letra F.svg",
    "Letra G.svg",
    "Letra A.svg",
    "Letra B.svg"
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


let hh = 0;
let mm = 0;
let ss = 0;
let tempo = 17; //Quantos milésimos valem 1 segundo?
let cron;


//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}
start() //quando entra na pagina ele roda a função

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
    hh = hh;
    mm = mm;
    ss = ss;
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) {     //Verifica se deu 59 segundos
        ss = 0;         //Volta os segundos para 0
        mm++;           //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;     //Volta os minutos para 0
            hh++;       //Adiciona +1 na variável hora
        }
    }
    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;
    //Retorna o valor tratado
    return format;
}
// ********** fim do cronometro ************* //


const cards = document.querySelectorAll(".memory-card");
let firstCard, secondCard;
let lockCards = false;
let contador = 0

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
    ! isMatch  ?  unFlipCards() : resetCards(isMatch);
    console.log(contador)  
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
        contador++;
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }[firstCard, secondCard, lockCards] = [null, null, false];
    if (contador === 8 ){
        pause();
        let jogadoresRanking = JSON.parse(localStorage.getItem('players')) || 
        {
            jogador:   {
                nome:       [],
                idJogador:  [],
            },
            tempo:     { 
                tempoLevado:[],
                idTempo:    []
            },
        }
 
       jogadoresRanking.jogador.idJogador.push(jogadoresRanking.jogador.idJogador +1)
       jogadoresRanking.tempo.idTempo.push(jogadoresRanking.tempo.idTempo+1)
       jogadoresRanking.jogador.nome.push(data);
       jogadoresRanking.tempo.tempoLevado.push(timer())

       console.log(jogadoresRanking)

       jogadoresRanking.tempo.tempoLevado.sort() //reordena o tempo
       jogadoresRanking.tempo.tempoLevado.reverse() // coloca o tempo inverso

    

        function escreveJogadores(_valorArray, indice) {
            const divDepois = document.querySelector('.item')
            // Após essa esse elemento o sistema ira criar a div
            const div = document.createElement('div');
            // cria uma div
            div.classList.add("itemranking")
            // Adiciona uma classe a essa div
            div.innerText = `${(jogadoresRanking.tempo.tempoLevado[indice])}` 
            // escreve o nome do jogadore no conteudo
            const body = document.querySelector('.grid')
            body.insertBefore(div, divDepois.nextElementSibling)
        }
        jogadoresRanking.jogador.nome.forEach(escreveJogadores)
        localStorage.setItem('players', JSON.stringify(jogadoresRanking))
    };
}
cards.forEach(card => card.addEventListener("click", flipCard));


// ************** fim da logica das cartas ********

let url_string = window.location.href;
let url = new URL(url_string);
let data = url.searchParams.get("minhaVariavel");

// ----------- pega jogador da url


function reload() {
    window.location.href = `index.html`;
}





