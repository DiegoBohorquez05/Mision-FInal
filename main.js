const nombre=document.querySelector('#nombre')
const enviar=document.querySelector('#enviar')
const apellido=document.querySelector('#apellido')
const correo=document.querySelector('#correo')
const celular=document.querySelector('#celular')
const parrafo=document.querySelector('.texto1')


enviar.addEventListener('click',()=>{
    if(nombre.value==='' && apellido.value==='' && correo.value==='' && celular.value===''){
        parrafo.innerHTML=('Algo hace falta, complete todos los campos')
    }else{
        console.log('ok')
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