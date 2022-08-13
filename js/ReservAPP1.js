//reserva
let reserva = []
let reservaOk = false;
const titulo = document.getElementById("titulo");
const parrafoApp = document.getElementById("parrafo")
const botonApp = document.getElementById("boton");
const contenidoTitulo = "Bienvenido a ReservAPP";
const contenidoTitulo2 = "Gracias por usar ReservAPP";
const cambioParrafo1 = "Clasificanos en la APP STORE";
const cambioParrafo2 = "Siguenos en nuestras redes sociales";

cambiarTexto(parrafoApp, cambioParrafo1); // se inicia con texto1


const intervalo = setInterval(()=>{
	if(parrafoApp.innerText == cambioParrafo1){
		cambiarTexto(parrafoApp, cambioParrafo2)
}else{
        cambiarTexto(parrafoApp, cambioParrafo1)
}
},2000);



//boton
botonApp.addEventListener("click", ()=>{
    let info = titulo.innerText;
    if (info === contenidoTitulo){
        cambiarTexto(titulo, contenidoTitulo2)

    }else{
        cambiarTexto(titulo, contenidoTitulo)
    }
})

function cambiarTexto(id, texto){
    id.innerText = texto;
}

cambiarTexto(titulo, contenidoTitulo);

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
    const seleccionUsuario = prompt("Elige la reserva que quieren entre los bares: Vrinda  Rockefeller")
    if(seleccionUsuario != null){

    seleccionUsuario.toLowerCase();
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
    
    if (confirm("¿Desea hacer reserva en otro bar y horario?")){
    seleccionarBar()
    }
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
    reservaOk = true
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
if(reservaOk == true){
    alert('Gracias por reservar en ReservAPP, su reserva es:' + suReserva())
    console.log('Gracias por reservar en ReservAPP, su reserva en:' + suReserva())
    reservaOk = false
    cambiarTexto(titulo, contenidoTitulo2)
}

