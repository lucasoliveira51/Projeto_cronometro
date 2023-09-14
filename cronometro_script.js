let segundos = 0;
let minutos = 0;
let horas = 0;

// criando uma constante que vai receber o elemento cronometro na constante cronometro
const cronometro = document.getElementById("cronometro");

const iniciar = () => {
  setInterval(() => {
    segundos += 1;
    if (segundos === 59) {
      segundos = 0;
      minutos += 1;

      if (minutos === 59) {
        minutos = 0;
        horas += 1;
      }
      if (horas === 24) {
        horas = 0;
      }
    }

    const segundoStr = `${segundos}`.padStart(2, "0");
    const minutoStr = `${minutos}`.padStart(2, "0");
    const horaStr = `${horas}`.padStart(2, "0");

    cronometro.textContent = `${horaStr}:${minutoStr}:${segundoStr}`;
  }, 1000);
};

const parar = () => {
  alert("Para a contagem");
};
