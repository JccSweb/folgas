/* 
segunda domingo 01 0 
sabado domingo 6 0
quinta e sexta 4 5 
quarta e quinta 3 4
terça e quarta 2 3
segunda e terça 1 2
*/
document.getElementById("calcular").addEventListener("click", calcularFolgas);
const days = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let pagina = document.getElementById("res");

const numberOfWeeks = 30;

function calcularFolgas() {
  let folga1 = document.getElementById("primeiraFolga").value;
  let folga2 = document.getElementById("segundaFolga").value;
  let primeiraFolga = new Date(folga1);
  let segundaFolga = new Date(folga2);
  views.resetFolgas();
  if (verificacao(primeiraFolga, segundaFolga) == true) {
    let primeiraFolgaProximaSemana = new Date(primeiraFolga);
    let segundaFolgaProximaSemana = new Date(segundaFolga);

    for (let x = 1; x < numberOfWeeks; x++) {
      dataDaPrimeira = primeiraFolga.getDate();
      dataDaSegunda = segundaFolga.getDate();
      let semana = x;
      //Obtem em valor o dia da semana, sabado, domingo, etc.
      let diaDaSemana1 = primeiraFolga.getDay();
      let diaDaSemana2 = segundaFolga.getDay();

      if (verificacao(primeiraFolga, segundaFolga)) {
        //Condição: é um sabado e domingo?
        if (diaDaSemana1 == 6 && diaDaSemana2 == 0) {
          primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 5);
          segundaFolgaProximaSemana.setDate(dataDaSegunda + 5);
          //Condição: é uma quinta-sexta/quarta-quinta/terça-quarta/segunda-terça?
        } else if (
          (diaDaSemana1 == 4 && diaDaSemana2 == 5) ||
          (diaDaSemana1 == 3 && diaDaSemana2 == 4) ||
          (diaDaSemana1 == 2 && diaDaSemana2 == 3)
        ) {
          primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 6);
          segundaFolgaProximaSemana.setDate(dataDaSegunda + 6);
        } else if (diaDaSemana1 == 1 && diaDaSemana2 == 2) {
          primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 7);
          segundaFolgaProximaSemana.setDate(dataDaSegunda + 12);
        } else if (diaDaSemana1 == 1 && diaDaSemana2 == 0) {
          primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 12);
          segundaFolgaProximaSemana.setDate(dataDaSegunda + 7);
        }
        primeiraFolga = primeiraFolgaProximaSemana;
        segundaFolga = segundaFolgaProximaSemana;
        views.mostrarFolgas(x, primeiraFolga, segundaFolga);
      }
    }
  } else {
    views.valoresInvalidos();
  }
}

function verificacao(primeiraFolga, segundaFolga) {
  let day = 24 * 60 * 60 * 1000;
  primeiraFolga = primeiraFolga.valueOf();
  segundaFolga = segundaFolga.valueOf();

  if (primeiraFolga + 6 * day == segundaFolga) {
    return true;
  }
  if (primeiraFolga + 1 * day == segundaFolga) {
    return true;
  }
  return false;
}

let views = {
  mostrarFolgas: function (x, primeiraFolga, segundaFolga) {
    const diaDaPrimeiraindex = primeiraFolga.getDay();
    const mesDaPrimeiraindex = primeiraFolga.getMonth();
    const anoDaPrimeira = primeiraFolga.getFullYear();
    const diaDaSegundaindex = segundaFolga.getDay();
    const mesDaSegundaindex = segundaFolga.getMonth();
    const anoDaSegunda = segundaFolga.getFullYear();
    const dia1 = days[diaDaPrimeiraindex];
    const mes1 = months[mesDaPrimeiraindex];
    const dia2 = days[diaDaSegundaindex];
    const mes2 = months[mesDaSegundaindex];

    pagina.innerHTML += `<li class="list-group-item">Daqui a ${x} semana(s):</li>
    <p>  ${dia1}, dia ${primeiraFolga.getDate()} de ${mes1} de ${anoDaPrimeira}. </p>
    <p>  ${dia2}, dia ${segundaFolga.getDate()} de ${mes2} de ${anoDaSegunda} </p> <br>`;
  },
  resetFolgas: function () {
    pagina.innerHTML = "";
  },
  valoresInvalidos: function () {
    pagina.innerHTML =
      " <h1> Datas inválidas.</h1> <p> Por favor, verifica as datas inseridas para confirmar que correspondem a folgas do ciclo disponível</p>";
  },
};
