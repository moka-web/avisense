
const btn = document.querySelector('#about')
const mensaje = document.querySelector('#mensajeabout')

function mostrarMensaje (){
        mensaje.style.display= 'block'
}

function ocultarMensaje(){
    mensaje.style.display = 'none'
    
}



btn.addEventListener("click", mostrarMensaje )
mensaje.addEventListener("click",ocultarMensaje)