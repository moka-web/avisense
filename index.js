
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



const toggler = document.getElementById('button')

const showMessage = ()=>{

    if( mostrar===true ){
        document.getElementById('logo1').style.display='none'
        document.getElementById('imagenResponsive').style.display='block'
        document.getElementById('textoResponsive').style.display='block'
        console.log('el boton funciona')
        mostrar=false
    }else{
        console.log('entra en el else')
        document.getElementById('logo1').style.display='block'
        document.getElementById('imagenResponsive').style.display='none'
        document.getElementById('textoResponsive').style.display='none'
        mostrar=true
    }
    

}






 