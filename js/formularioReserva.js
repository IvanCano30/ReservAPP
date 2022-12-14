let Mesas = [ ]
    
const getAllProducts = async () => {
    try{
        const response = await fetch('json/mesas.json')
        Mesas = await response.json()
        // renderizarMesas(mesas)
    }catch{
        console.log("hubo un error");
    }   
}  
  //EJECUCIONES
getAllProducts()


    let liberacionMesa = (id) =>{
        Mesas.forEach((mesa) =>{
            if(mesa.id == id){
                mesa.disponibilidad = true
                
            }
        })
        
    }


    let ocuparMesa = (id) =>{
		let bandera
        Mesas.forEach((mesa) => {
            if(mesa.id == id) {
				if(mesa.disponibilidad == true ){
					mesa.disponibilidad = false
					bandera = true
				}else{
					alert("mesa ocupada, busca otra")
					bandera = false
				}
                
                
            }
        })
		return bandera
    }

//--------------
//array reservas
let reservas
//alerta de bienvenida
//swal("Bienvenido a reservAPP!");
window.onload = function(){
    
   	// Recuperar el localstorage
	reservas = JSON.parse(localStorage.getItem('reservas')) || [] 
}
// mostrar mensaje cuando se use el input
function showMessage(input, message, type) {
	// obtener un elemento y hacer un mensanje
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// input class con ternario
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// checkeo del if si no es invalido
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validacion de formato email
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "por favor ingrese su nombre completo correctamente";
const EMAIL_REQUIRED = "por favor ingrese su email";
const EMAIL_INVALID = "por favor ingrese un email correcto";

form.addEventListener("submit", function (event) {
	// presentacion de la funcion
	event.preventDefault();

	// valdacion del formulario
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    // si es invalido, enviar al form
	if (nameValid && emailValid) {
		let nombre = form.elements["name"].value;
        let email = form.elements["email"].value;
        let cantPersonas = form.elements["personas"].value
        let ubicacionMesa = form.elements["ubicacionMesa"].value
        let horario = form.elements["horario"].value
        let bar = form.elements["opcionBares"].value
		let mesa = form.elements["selectMesa"].value
        let nuevaReserva = new miReserva (bar , horario, ubicacionMesa, cantPersonas, nombre, email, mesa)
        // reservas.push(nuevaReserva)
		//ocuparMesa(mesa)
		if(ocuparMesa(mesa)){
			reservas.push(nuevaReserva)
		}
		console.log(Mesas)

        //alerta de success
        //swal("Gracias por reservar!", nombre ,  "success");
    }
    //localstorage
    localStorage.setItem ("reserva", JSON.stringify(reservas))
    // renderizarReserva(reservas)
    
});
//crea una reserva, hora, mesa y comida.
class miReserva {
    constructor( bar , horario , ubicacionMesa, cantPersonas, nombre, email, mesa){
        this.bar = bar
        this.horario = horario
        this.ubicacionMesa = ubicacionMesa
        this.cantPersonas = cantPersonas
        this.nombre = nombre
        this.email = email   
		this.mesa = mesa  
    }
}

//DOM de la reserva finalizada
// const contenedorDeReservas = document.querySelector("#divVacio")


// function renderizarReserva(array){
// 	array.forEach(reserva => {
// 		const cardReserva = document.createElement("div")
// 		cardReserva.classList.add("cardReserva")
// 		cardReserva.innerHTML = `<h2>${reserva.nombre}</h2>
// 		<span>Correo: ${reserva.email}</span>
// 		<span>Bar: ${reserva.bar}</span>
// 		<span>Turno: ${reserva.horario}</span>
// 		<span>Cantidad de Personas: ${reserva.cantPersonas}</span>
// 		<span>Ubicacion: ${reserva.ubicacionMesa}</span>
// 		<button id="eliminarReserva">Eliminar Reserva: ${reserva.ubicacionMesa}</span>`
// 		contenedorDeReservas.append(cardReserva)
// 	});
// 	document.querySelector("#eliminarReserva").addEventListener("click", eliminarReservaGuardada)
// }


// function eliminarReservaGuardada() {
// 	localStorage.clear()
// 	contenedorDeReservas.innerHTML = ""
// }




