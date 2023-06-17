

const containerDiv = document.getElementById('continerDiv')
// const containerTab = document.getElementById('tab');
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
            icon:"success",
            imageUrl: urlNavio ,
            titleText:`conseguiste descubrir ${count/10} barcos`,
            text:`tu puntaje final es de ${count} puntos`
        })
    },1000)
    
  }


  
  const arrayDiv = []

  function createDivs() {
    
    time()
    setTimeout(() => {
        //creacion y asignacion del tablero 

        for (let i = 1; i < 7; i++) {
            for (let j = 1; j < 11; j++) {
                let div = document.createElement('div')
                div.className = 'cord'
                containerDiv.appendChild(div)
                arrayDiv.push(div)

            }

        }

        for(i =1 ; i<=6 ; i++){
        let index = Math.round(Math.random()*60)    
        
        
        arrayDiv[index].addEventListener(('click'), ()=>{
            if (arrayDiv.includes(arrayDiv[index])) {   
                console.log(arrayDiv[index])
                console.log(arrayDiv[index])
                puntos.innerText = `puntaje: ${count}`

                    arrayDiv[index].classList.add('win');
                    arrayDiv[index].disabled = true ;


                    puntos.innerText = `puntaje: ${count}`
                    count += 10
                    arrayDiv[index].style.pointerEvents = 'none';
                    arrayDiv[index].style.opacity = '50%';
            }else{
                arrayDiv[index].classList.add('lost')
                arrayDiv[index].disabled = true
            }
        })
    }
    }, 1500)
return count ;
}

createDivs()


