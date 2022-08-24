

//boton para que cambie titulo

let reservaOk = false;
const titulo = document.getElementById("titulo");
const contenidoTitulo = "Bienvenido a ReservAPP";
const contenidoTitulo2 = "Gracias por usar ReservAPP";
const parrafoApp = document.getElementById("parrafo")
const botonApp = document.getElementById("boton");

//const cambio de parrafo con setInterval
const cambioParrafo1 = "Clasificanos en la APP STORE";
const cambioParrafo2 = "Siguenos en nuestras redes sociales";


//parrafo con interval

cambiarTexto(parrafoApp, cambioParrafo1); // se inicia con texto1

const intervalo = setInterval(()=>{
	if(parrafoApp.innerText == cambioParrafo1){
		cambiarTexto(parrafoApp, cambioParrafo2)
}else{
        cambiarTexto(parrafoApp, cambioParrafo1)
}
},2000);

//boton con cambio de titulo

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

