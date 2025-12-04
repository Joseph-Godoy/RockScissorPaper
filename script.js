function getComputerChoice() {
    let b = ''
    let a = Math.ceil(Math.random()*3);
    (a == 1) ? b = 'piedra' :
    (a == 2) ? b = 'papel' :
    b = 'tijeras'
    return b;
}

let getHumanChoice = () => prompt("Ingrese su eleccion: ")



function playGame() {

    let humanScore = 0, computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
            humanChoice = humanChoice.toLowerCase();
            if (humanChoice == computerChoice) {
                console.log('Eleccion computadora: ' + computerChoice);
                console.log('Tu eleccion: ' + humanChoice)
                console.log("Empate")
                console.log("")
            } else if (humanChoice == 'piedra' && computerChoice == 'tijeras' || humanChoice == 'tijeras' && computerChoice == 'papel' || humanChoice == 'papel' && computerChoice == 'piedra') {
                console.log('Eleccion computadora: ' + computerChoice);
                console.log('Tu eleccion: ' + humanChoice)
                console.log("Tu ganas!")
                console.log("")
                humanScore = humanScore + 1;
            } else {
                console.log('Eleccion computadora: ' + computerChoice);
                console.log('Tu eleccion: ' + humanChoice)
                console.log("Tu pierdes!")
                console.log("")
                computerScore = computerScore + 1;
            }
        }

    for (let i = 0; i <= 4; i++) { playRound(getHumanChoice(), getComputerChoice());} ;

    console.log("Resultados:");
    console.log('Computadora puntaje: ' + computerScore)
    console.log('Humano puntaje: ' + humanScore)
}

playGame();
