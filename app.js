
/* 
segunda domingo 01 0 
sabado domingo 6 0
quinta e sexta 4 5 
quarta e quinta 3 4
terça e quarta 2 3
segunda e terça 1 2
*/
document.getElementById("calcular").addEventListener("click", calcularFolgas)
function calcularFolgas() {
    let folga1 = document.getElementById("primeiraFolga").value
    let folga2 = document.getElementById("segundaFolga").value
    let primeiraFolga = new Date(folga1)
    let segundaFolga = new Date(folga2)
    const days = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]


    let primeiraFolgaProximaSemana = new Date(primeiraFolga)
    let segundaFolgaProximaSemana = new Date(segundaFolga)
    let pagina = document.getElementById("res")

    for (let x = 0; x < 200; x++) {

        dataDaPrimeira = primeiraFolga.getDate()
        dataDaSegunda = segundaFolga.getDate()

        //Obtem em valor o dia da semana, sabado, domingo, etc.
        let diaDaSemana1 = primeiraFolga.getDay()
        let diaDaSemana2 = segundaFolga.getDay()
        /*        
        let dia1Millisenconds = primeiraFolgaProximaSemana.getTime()
        let dia2Millisenconds = segundaFolgaProximaSemana.getTime() */

        //Condição: é um sabado e domingo?
        if ((diaDaSemana1 == 6 && diaDaSemana2 == 0) /* && (dia1Millisenconds == (dia2Millisenconds - (24 * 60 * 60 * 1000))) */) {
            primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 5)
            segundaFolgaProximaSemana.setDate(dataDaSegunda + 5)

            //Condição: é uma quinta-sexta/quarta-quinta/terça-quarta/segunda-terça?
        } else if (((diaDaSemana1 == 4 && diaDaSemana2 == 5) || (diaDaSemana1 == 3 && diaDaSemana2 == 4) || diaDaSemana1 == 2 && diaDaSemana2 == 3)/*  && (dia1Millisenconds == (dia2Millisenconds - (24 * 60 * 60 * 1000))) */) {
            primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 6)
            segundaFolgaProximaSemana.setDate(dataDaSegunda + 6)

        } else if ((diaDaSemana1 == 1 && diaDaSemana2 == 2) /* && (dia1Millisenconds == (dia2Millisenconds - (24 * 60 * 60 * 1000))) */) {
            primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 7)
            segundaFolgaProximaSemana.setDate(dataDaSegunda + 12)

        } else if ((diaDaSemana1 == 1 && diaDaSemana2 == 0)  /* && (dia1Millisenconds == (dia2Millisenconds - (6 * 24 * 60 * 60 * 1000)))  */) {
            primeiraFolgaProximaSemana.setDate(dataDaPrimeira + 12)
            segundaFolgaProximaSemana.setDate(dataDaSegunda + 7)

        }
        primeiraFolga = primeiraFolgaProximaSemana
        segundaFolga = segundaFolgaProximaSemana
        diaDaPrimeiraindex = primeiraFolga.getDay()
        mesDaPrimeiraindex = primeiraFolga.getMonth()
        anoDaPrimeira = primeiraFolga.getFullYear()
        diaDaSegundaindex = segundaFolga.getDay()
        mesDaSegundaindex = segundaFolga.getMonth()
        anoDaSegunda = segundaFolga.getFullYear()
        dia1 = days[diaDaPrimeiraindex]
        mes1 = months[mesDaPrimeiraindex]
        dia2 = days[diaDaSegundaindex]
        mes2 = months[mesDaSegundaindex]

        pagina.innerHTML += `<li class="list-group-item">Daqui a 
        ${x} semana(s) a primeira folga é: ${dia1}, dia ${primeiraFolga.getDate()} de ${mes1} de ${anoDaPrimeira}. <br>A segunda é: ${dia2}, dia ${segundaFolga.getDate()} de ${mes2} de ${anoDaSegunda}</li>`

    }
}

