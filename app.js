const pagina = document.getElementById("erro");
const view = document.getElementById("calendarios");
const mesElemento = document.getElementById("mes");

let CalculoDedatas = {
    numeroDeSemanasACalcular: 54,
    verificacao: function (primeiraFolga, segundaFolga) {
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
    },
    calcularFolgas: function () {
        let folga1 = document.getElementById("primeiraFolga").value;
        let folga2 = document.getElementById("segundaFolga").value;
        let primeiraFolga = new Date(folga1);
        let segundaFolga = new Date(folga2);
        views.resetFolgas();
if (CalculoDedatas.verificacao(primeiraFolga, segundaFolga) == true) {
  let primeiraFolgaProximaSemana = new Date(primeiraFolga);
  let segundaFolgaProximaSemana = new Date(segundaFolga);
  views.mostrarFolgas(primeiraFolga);
  views.mostrarFolgas(segundaFolga);
for (let x = 1; x < CalculoDedatas.numeroDeSemanasACalcular; x++) {
  dataDaPrimeira = primeiraFolga.getDate();
  dataDaSegunda = segundaFolga.getDate();
  //Obtem em valor o dia da semana, sabado, domingo, etc.
  let diaDaSemana1 = primeiraFolga.getDay();
  let diaDaSemana2 = segundaFolga.getDay();
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
        views.mostrarFolgas(primeiraFolga);
        views.mostrarFolgas(segundaFolga);
      }
    } else {
      views.valoresInvalidos();
    }
  },
  };

let views = {
  diasSemana: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  mostrarFolgas: function (primeiraFolga, segundaFolga) {
    let diaDaPrimeiraFolga = primeiraFolga.getDate();
    let mesDaPrimeiraFolga = primeiraFolga.getMonth();
    let anoDaPrimeiraFolga = primeiraFolga.getFullYear();
    let folga1 = document.getElementById(
      `${diaDaPrimeiraFolga}/${mesDaPrimeiraFolga}/${anoDaPrimeiraFolga}`
    );
    folga1.setAttribute("class", "folga");
  },
  resetFolgas: function () {
    pagina.innerHTML = "";
    let todas = document.querySelectorAll(".folga");
    todas.forEach((cada) => {
      cada.removeAttribute("class");
    });
  },
  valoresInvalidos: function () {
    pagina.innerHTML =
      "<h1> Datas inválidas.</h1> <p> Por favor, verifica as datas inseridas para confirmar que correspondem a folgas do ciclo disponível</p>";
  },
  listaDeMeses: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    mostrarFeriados: function (data) {
      let dia = data.getDate()
      let mes = data.getMonth()
      let ano = data.getFullYear()
      let feriado = document.getElementById(`${dia}/${mes}/${ano}`)
      if (feriado !== null) {
        feriado.innerHTML = "F"
        if (feriado.className !== "folga") {
          feriado.setAttribute("class", "feriado")
        }
      }
    }
  };

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
    title.innerHTML = views.listaDeMeses[mes];
    block.appendChild(title);
    let calendario = document.createElement("DIV");
    calendario.setAttribute("class", `calendario`);
    block.appendChild(calendario);

    views.diasSemana.forEach((dia) => {
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

  function start() {
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
    feriados(ano)
    feriados(ano + 1)
  }
  window.addEventListener("load", start);

  document
    .getElementById("calcular")
    .addEventListener("click", CalculoDedatas.calcularFolgas);

  function feriados(ano) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let parser = new DOMParser()
          let texto = parser.parseFromString(this.responseText, "text/xml")
          let datas = Array.from(texto.getElementsByTagName("Date"))
          datas.forEach(data => {
            let novaData = new Date(data.innerHTML)
            views.mostrarFeriados(novaData)
          })
          let saoJoao = new Date(ano, 5, 24)
          views.mostrarFeriados(saoJoao)
        }
    };
    xhttp.open("GET", `https://services.sapo.pt/Holiday/GetNationalHolidays?year=${ano}`, true);
    xhttp.send()
    }
