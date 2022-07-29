//reserva
let reserva = []
//crea una reserva, hora, mesa y comida.
class Mireserva {
    constructor( reserva , horario , mesa){
        this.reserva = reserva
        this.horario = horario
        this.mesa = mesa
        
    }
}

const reserva1 = new Mireserva ("Vrinda" , ["Mañana", "Tarde" , "Noche"], ["adentro" , "afuera" , "terraza"])
const reserva2 = new Mireserva ("Rockefeller" , ["Mañana", "Tarde" , "Noche"], ["adentro" , "afuera" , "patio de comida"])

//selecciona reserva
const seleccionarBar = () =>{
    const seleccionUsuario = prompt("Elige la reserva que quieren entre los bares: Vrinda  Rockefeller").toLowerCase()

    switch(seleccionUsuario) {
        case "vrinda":
            console.log("Elegiste Vrinda")
            reserva.push(editarReservaSeleccionada(reserva1))
            break
        case "rockefeller":
            console.log("Elegiste Rockefeller")
            reserva.push(editarReservaSeleccionada(reserva2))
            break
        default:
            console.log("Elegir un bar correcto")
            break
    }
    //uso el confirm, porque sino queda en un bucle infinito 
    // no lo dimos, pero lo saque de otro lado...
    if (confirm("¿Desea hacer reserva en otro bar y horario?")){
    seleccionarBar()
    }
}

//caracteristicas de la reserva
const editarReservaSeleccionada = (ReservaSeleccionada) => {
    const reservaElegida = {
        reserva : ReservaSeleccionada.reserva,
        horario : "",
        mesa : "",
        cantidadPersonas: 1,
    }
    reservaElegida.mesa = prompt("Seleccione una ubicacion para su reserva: " + ReservaSeleccionada.mesa.join(" - ") ).toLowerCase()
    reservaElegida.cantidadPersonas = Number(prompt("¿Para cuantas personas reserva? "))
    reservaElegida.horario = prompt("Seleccione un horario dentro de los que tenemos disponibles: " + ReservaSeleccionada.horario.join(" - ")).toLowerCase()

    return reservaElegida
}

// su reserva es..
const suReserva = () => {
    let suReserva = ""
    for (const producto of reserva) {
        suReserva += " Bar: " + producto.reserva + " Turno de Servicio: " + producto.horario + " Ubicacion: " + producto.mesa + " Cantidad de personas: " + producto.cantidadPersonas
    }
    return suReserva
}

// ejecucion
seleccionarBar()

alert('Gracias por reservar en ReservAPP, su reserva es:' + suReserva())
console.log('Gracias por reservar en ReservAPP, su reserva en:' + suReserva())


