

function validation(){

let nombreJugador = document.getElementById('nombreJugador');
let emailJugador = document.getElementById('emailJugador');

if(nombreJugador.value ==='' && emailJugador.value===''){
  console.log('error')
  
}else{
  if(emailJugador.value === ''|| nombreJugador.value==='') {
    console.log(`mas error`)
    
  }else{
    console.log(`bienvenido`)
    return true, {nombre: nombreJugador , email: emailJugador} ; 
  }
}

   }



function play() { 
  let form = document.getElementById('formPlay')
  if(window.getComputedStyle(form).display === 'none'){
    form.style.display = 'flex'
  }else{
    form.style.display = 'none'
  }
}

 function partida(){  
const btn = document.getElementById('btnIniciar')
btn.addEventListener('click', (e)=>{
   e.preventDefault()
  if(validation()){
    Swal.fire({
      icon: 'success',
      title: `${validation().nombre.value}`,
      text: 'te Damos la bienvedida'
    })
    setTimeout(()=>{
      window.location.href ='./tabPlay.html'
    }, 1500)
    
  }else{
    Swal.fire({
      icon: 'error',
      title: 'revisa la informacion',
      text: 'debes completar los campos requeridos'
    })
    
  }
 })


}
partida()