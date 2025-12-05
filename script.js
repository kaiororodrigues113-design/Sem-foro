const img = document.getElementById("img");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const automatic = document.getElementById("automatic");

let intervalId = null;

// Funções para mudar o semáforo
const turnRed = () => img.src = "vermelho.png";
const turnYellow = () => img.src = "amarelo.png";
const turnGreen = () => img.src = "verde.png";

// Função automática
const automaticMode = () => {
    let count = 0;

    clearInterval(intervalId);

    intervalId = setInterval(() => {
        if (count === 0) turnRed();
        if (count === 1) turnYellow();
        if (count === 2) turnGreen();

        count++;

        if (count > 2) count = 0;
    }, 1000); // troca a cada 1 segundo
};

// Eventos dos botões
red.onclick = turnRed;
yellow.onclick = turnYellow;
green.onclick = turnGreen;
automatic.onclick = automaticMode;
