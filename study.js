// Establece constante $ para getElementById.
const $ = elemento => document.getElementById(elemento)

const spanHora = $("horaActual")
const spanMinutos = $("minsActual")
const spanTiempo = $("tiempo")


function actualizarReloj() {
    let fecha = new Date()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()

    if (hora < 10) {
        hora = "0" + hora
    }
        
    if (minutos < 10) {
        minutos = "0" + minutos
    }

    if (hora < 12) {
        tiempo = "AM"
    }
    else {
        tiempo = "PM"
    }

    spanHora.innerHTML = hora
    spanMinutos.innerHTML = minutos
    requestAnimationFrame(actualizarReloj)
}

actualizarReloj()










