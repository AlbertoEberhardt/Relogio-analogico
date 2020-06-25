const minAtual = (new Date).getMinutes()
const segAtual = (new Date).getSeconds()
const horaAtual = (new Date).getHours()
var Segundos = setInterval(PonteiroSegundos, 1000)
/*
Horas e graus
horaAtual*5*6 se hora < 12
senão horaAtual - 12*5*6
*/
const Pont_Segundos = document.querySelector("#Segcontainer")
const Pont_Min = document.querySelector("#Mincontainer")
const Pont_Hora = document.querySelector("#Horacontainer")
var Segdeg = segAtual * 6 + 12 // +12 para descontar o atraso.
var  Mindeg = minAtual * 6 //somar 0.1 a cada segundo.
var Horadeg =  horaAtual > 12 ? ((horaAtual-12)*5)*6 : (horaAtual*5)*6    //somar 0.0016 a cada segundo.
window.addEventListener("load", function(){
    Pont_Segundos.style.transform = "rotate(" + Segdeg + "deg)"
    Pont_Min.style.transform = "rotate(" + Mindeg + "deg)"
    Pont_Hora.style.transform = "rotate(" + Horadeg + "deg)"
})
function PonteiroSegundos(){
    Pont_Segundos.style.transform = "rotate(" + Segdeg + "deg)"
    Pont_Segundos.style.transition = "steps(10)"
    Pont_Segundos.style.trasitionDuration = "1s"
    Segdeg += 6
    if(Segdeg > 360){
        Segdeg = 6
    }
    PonteiroMinuto()
    PonteiroHora()
}
/*Durante 60s ele tem que ir somando até chegar ao total de 6*/

function PonteiroMinuto(){
    Pont_Min.style.transform = "rotate(" + Mindeg + "deg)"
    Pont_Min.style.transition = "steps(10)"
    Pont_Min.style.trasitionDuration = "1s"
    Mindeg += 0.1
    if(Mindeg > 360){
        Mindeg = 0.1
    }
}
/* Durante 3600s ele tem que ir somando até chegar ao total de 6*/

function PonteiroHora(){
    Pont_Hora.style.transform = "rotate(" + Horadeg + "deg)"
    Pont_Hora.style.transition = "steps(10)"
    Pont_Hora.style.trasitionDuration = "1s"
    Horadeg += 0.0016
    if(Horadeg > 360){
        Horadeg = 0.0016
    }
}