const btnPiedra = document.querySelector(".piedra")
const btnPapel = document.querySelector(".papel")
const btnTijeras = document.querySelector(".tijeras")
const imagen = document.querySelector(".imgCPU")
const mensaje = document.querySelector(".mensaje")
const puntosCPU = document.querySelector(".puntosCPU")
const puntosHumano = document.querySelector(".puntosJugador")
const btnReinicio = document.querySelector(".reinicio")
let puntosHumanoTmp = 0;
let puntosCPUTmp = 0;
let humanChoice = "";

btnPiedra.addEventListener("click", function() {
    humanChoice = 'piedra'
    playRound(humanChoice, getComputerChoice());
});

btnPapel.addEventListener("click", function() {
    humanChoice = 'papel'
    playRound(humanChoice, getComputerChoice());
});

btnTijeras.addEventListener("click", function() {
    humanChoice = 'tijeras'
    playRound(humanChoice, getComputerChoice());
});

btnReinicio.addEventListener("click", function() {
    mensaje.textContent = "Elige un objeto para jugar"
    imagen.src = "img/nada.png"
    puntosCPU.textContent = 0;
    puntosHumano.textContent = 0;
});


function getComputerChoice() {
    let b = ''
    let a = Math.ceil(Math.random()*3);
    (a == 1) ? b = 'piedra' :
    (a == 2) ? b = 'papel' :
    b = 'tijeras'

    switch (b) {
        case 'piedra':
            imagen.src = "img/piedra.png"
            break;
        case 'papel':
            imagen.src = "img/Papel.webp"
            break;
        case 'tijeras':
            imagen.src = "img/tijeras.png"
            break;
    }
    return b;
}

function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                mensaje.textContent = "Empate!"
            } else if (humanChoice == 'piedra' && computerChoice == 'tijeras' || humanChoice == 'tijeras' && computerChoice == 'papel' || humanChoice == 'papel' && computerChoice == 'piedra') {
                mensaje.textContent = "Ganaste!"
                puntosHumanoTmp = parseInt(puntosHumano.textContent);
                puntosHumanoTmp = puntosHumanoTmp + 1;
                puntosHumano.textContent = puntosHumanoTmp
            } else {
                mensaje.textContent = "Perdiste!"
                puntosCPUTmp = parseInt(puntosCPU.textContent);
                puntosCPUTmp = puntosCPUTmp + 1;
                puntosCPU.textContent = puntosCPUTmp
            }
}