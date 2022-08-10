
const btn = document.querySelector('#about')
const mensaje = document.querySelector('#mensajeabout')

let mostrar = true; 

function mostrarMensaje (){
    if (mostrar===true) {
        mensaje.style.display= 'block'
        mostrar = false;
    }else{
        mensaje.style.display= 'none'
        mostrar=true;

    }
        
}

function ocultarMensaje(){
    mensaje.style.display = 'none'
    
}



btn.addEventListener("click", function(event){
    if(event.target !=true){
       document.getElementById('desplegar_menu').style.visibility="hidden"
       mostrar = true;
     }
 },true)


 