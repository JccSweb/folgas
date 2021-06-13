let view = document.getElementById("calendarios");
let mesElemento = document.getElementById("mes");

function calendario(ano, mes) {
  let date = new Date(ano, mes);
  let diasTodos = [];
  let diaDaSemana = date.getDay();
  diasTodos[diaDaSemana] = 1;
  for (let x = 2; x <= 31; x++) {
    let confirmarMes = new Date(ano, mes, x);
    if (confirmarMes.getMonth() === mes) {
      diaDaSemana++;
      diasTodos[diaDaSemana] = x;
    }
  }
  let block = document.createElement("div");
  block.setAttribute("class", "bloco");
  view.appendChild(block);
  let title = document.createElement("H2");
  title.innerHTML = viewMes(mes);
  block.appendChild(title);

  let calendario = document.createElement("DIV");
  calendario.setAttribute("class", `calendario`);
  block.appendChild(calendario);

  let diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  diasSemana.forEach((dia) => {
    let divDiasSemana = document.createElement("DIV");
    divDiasSemana.innerHTML = dia;
    calendario.appendChild(divDiasSemana);
  });

  let semanasCalendario = 34;
  if (diasTodos.length > 35) {
    semanasCalendario = 41;
  }

  for (let y = 0; y <= semanasCalendario; y++) {
    let diaDoCalendario = document.createElement("DIV");
    calendario.appendChild(diaDoCalendario);
    if (diasTodos[y] !== undefined) {
      diaDoCalendario.innerHTML = diasTodos[y];
      diaDoCalendario.setAttribute("id", `${diasTodos[y]}/${mes}/${ano}`);
    } else {
      diaDoCalendario.setAttribute("class", "empty");
    }
  }
}

function viewMes(mes) {
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
  }
}

let dataActual = new Date();
let mes = dataActual.getMonth();
let ano = dataActual.getFullYear();

for (let x = 0; x <= 12; x++) {
  if (mes + x > 11) {
    calendario(ano + 1, mes + (x - 12));
  } else {
    calendario(ano, mes + x);
  }
}
