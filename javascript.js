const minAtual = (new Date).getMinutes()
const segAtual = (new Date).getSeconds()
const horaAtual = (new Date).getHours()
var Segundos = setInterval(PonteiroSegundos, 1000)
const Pont_Segundos = document.querySelector("#Segcontainer")
// quando o segdeg = 6 o segundo = 1 ou seja segundo*6
// quando o mindeg = 0.1 o segundo = 1 ou seja minuto*0.1
var Segdeg = segAtual * 6
var  Mindeg = minAtual * 6
var Horadeg =  0.0016
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
    const Pont_Min = document.querySelector("#Mincontainer")
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
    const Pont_Hora = document.querySelector("#Horacontainer")
    Pont_Hora.style.transform = "rotate(" + Horadeg + "deg)"
    Pont_Hora.style.transition = "steps(10)"
    Pont_Hora.style.trasitionDuration = "1s"
    Horadeg += 0.0016
    if(Horadeg > 360){
        Horadeg = 0.0016
    }
}