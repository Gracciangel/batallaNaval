

let form = document.getElementById('form')
let btn = document.getElementById('btn')
let body = document.getElementById('body')
let bubles = document.getElementById('bubles') 
function show(){
    form.classList.toggle('form') ;
    btn.style.display='none'
    let div = document.createElement('div') ;
    
}
let close = document.getElementById('close').addEventListener(('click'), ()=>{
    form.classList.remove('form')
    btn.style.display='block'
    
})

const play = document.getElementById('play')
let namePlayer= document.getElementById('name-player')

play.addEventListener(('click'), (e)=>{
    e.preventDefault()
  if(namePlayer.value ===''){
 alert(`ingresa un nombre`)
  }else{
    alert(`bienvenido ${namePlayer.value}`)
    window.location.href = './tabPlay.html'
    
  }
})

function bubleShow(){
  console.log(bubles)
}
bubleShow()