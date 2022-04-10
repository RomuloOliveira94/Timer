const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const limpar = document.querySelector(".limpar");
let tempo = new Date("01-02-2020 00:00:00");
let hora = tempo.getHours();
let minutos = tempo.getMinutes();
let segundos = tempo.getSeconds();
let conta = 0;
let timer;

const horaBR = () => tempo.toLocaleTimeString("pt-BR", { hour12: false });

const addZero = (z) => (z >= 10 ? z : `0${z}`);

function toggleInit() {
  clearInterval(timer);
  relogio.style.color = "black";

  timer = setInterval(() => {
    relogio.innerHTML = `${addZero(hora)}:${addZero(minutos)}:${addZero(
      ++segundos
    )}`;
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    } else if (minutos === 60) {
      hora++;
      minutos = 0;
    }
  }, 1000);
}

function togglePause() {
  setTimeout(() => {
    clearInterval(timer);
  }, 0);
  relogio.style.color = "Red";
}

function toggleClear() {
  relogio.style.color = "black";
  setTimeout(() => {
    clearInterval(timer);
    hora = 0;
    minutos = 0;
    segundos = 0;
  }, 0);
  relogio.innerHTML = horaBR();
}

iniciar.addEventListener("click", toggleInit);
pausar.addEventListener("click", togglePause);
limpar.addEventListener("click", toggleClear);

//pode ser feito o eventlistener no document e escolher esse elementos com os ifs
