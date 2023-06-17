



function play() { 
  let form = document.getElementById('formPlay')
  if(window.getComputedStyle(form).display === 'none'){
    form.style.display = 'flex'
  }else{
    form.style.display = 'none'
  }
}

 function partida(){


const nombreJugador = document.getElementById('nombreJugador');
const emailJugador = document.getElementById('emailJugador');

const btn = document.getElementById('btnIniciar')
btn.addEventListener('click', (e)=>{
  e.preventDefault()
  let player = {
    nombre : nombreJugador.value,
    email : emailJugador.value
  }
  
  window.location.href='./tabPlay.html'
  return player
})
}

partida()
