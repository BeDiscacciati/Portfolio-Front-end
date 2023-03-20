let dataFutura = new Date("March 24, 2023 20:00").getTime();
let dias, horas, minutos, segundos;

setInterval(function(){
    let dataAtual = new Date().getTime();
    let segundosTotal = (dataFutura - dataAtual)/1000
    dias = parseInt(segundosTotal/86400)
    dias = dias < 10 ? "0" + dias : dias;
    segundosTotal = segundosTotal%86400;

    horas = parseInt(segundosTotal/3600)
    horas = horas < 10 ? "0" + horas : horas;
    segundosTotal = segundosTotal%3600;

    minutos = parseInt(segundosTotal/60)
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundosTotal = segundosTotal%60;

    segundos = parseInt(segundosTotal)
    segundos = segundos < 10 ? "0" + segundos : segundos


    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;
}, 1000)