const nombre=document.querySelector('#nombre')
const enviar=document.querySelector('#enviar')
const apellido=document.querySelector('#apellido')
const correo=document.querySelector('#correo')
const celular=document.querySelector('#celular')
const parrafo=document.querySelector('.texto1')
const parrafo2=document.querySelector('.texto2')

const correo2=/([a-zA-Z0-9])+@(([a-zA-Z0-9])+.)+com/


enviar.addEventListener('click',()=>{
    if(nombre.value==='' && apellido.value==='' && correo.value==='' && celular.value===''){
        parrafo.innerHTML=('Algo hace falta, complete todos los campos')
    }else{
        console.log('ok')
    }

    if(correo2 != correo.value){
        parrafo2.innerHTML=('Correo electronico invalido')
    }
})

function ValidaLongitud(campo, longitudMaxima) {
    try {
        if (campo.value.length > (longitudMaxima - 1))
            return false;
        else
            return true;             
    } catch (e) {
        return false;
    }
}