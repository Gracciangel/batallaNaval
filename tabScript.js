





const containerDiv = document.getElementById('continerDiv')
const containerTab = document.getElementById('tab');
let urlNavio = './asets/img/navio.jpeg';
let puntos = document.getElementById('puntaje');
let tiempo = document.getElementById('tiempo');
tiempo.innerText='tiempo restante: '
puntos.innerText='puntaje: '
let mensaje  = document.getElementById('msg').className='mensaje' ;



let count = 0

function time(){
    let time = 20 ; 
let temporizador = setInterval(() => {
    
if(time=== 0 ){
    clearInterval(temporizador)
    endGame()
}else{
    time--
    tiempo.innerText=`tiempo restante: ${time}`
}
}, 1000);
}


function endGame() {
    arrayDiv.forEach(e => e.style.pointerEvents='none')
    body.className='endGame'
    setTimeout(() =>{    
        containerDiv.classList.add('closeGame')
        Swal.fire({
            icon: 'error',
            title: `${count}`,
            text: 'puntaje final',
            theme:'borderless'
          })
    },1000)
    
  }


  
  const arrayDiv = []

  function createDivs() {
    
    // time()
    setTimeout(() => {
        //creacion y asignacion del tablero 

        for (i = 1; i < 7; i++) {
            for (j = 1; j < 11; j++) {
                let div = document.createElement('div')
                div.className = 'cord'
                containerTab.appendChild(div)
                arrayDiv.push(div)

            }

        }
        //creacion de nuevos indices 
  
        for (i = 1; i <= 5; i++) {
            
            
            let index = Math.round(Math.random() * 60);
            
            if (arrayDiv.includes(arrayDiv[index])) {
                console.log(arrayDiv[index])
                puntos.innerText = `puntaje: ${count}`
                arrayDiv[index].addEventListener(('click'), () => {
                    Swal.fire({
                        icon:`${urlNavio}`,
                        title:`conseguiste un bote`,

                    })
                    arrayDiv[index].className = 'show'
                    arrayDiv[index].setAttribute('disabled', 'disabled');


                    puntos.innerText = `puntaje: ${count}`
                    count += 10
                    setTimeout(() => {
                        arrayDiv[index].style.pointerEvents = 'none';
                        arrayDiv[index].style.opacity = '50%';
                    }, 1000)

                })


            }
        }

    }, 1500)
return count ;
}

createDivs()


