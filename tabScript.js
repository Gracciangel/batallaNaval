
let hundido = 0 ;
let puntos = document.getElementById('puntos')
const containerDiv = document.getElementById('continerDiv')
// const containerTab = document.getElementById('tab');
let urlNavio = './asets/img/navio.png';
const arrayDiv = [] ; 

let tiempo = document.getElementById('tiempo');
let mensaje  = document.getElementById('msg').className='mensaje' ;


  
function endGame() {
    clearInterval(tiempoDeJuego)
    arrayDiv.forEach(e => e.style.pointerEvents='none')
    body.className='endGame'
    setTimeout(() =>{    
        containerDiv.classList.add('closeGame')
        if(hundido===0){
            Swal.fire({
                icon:"error",
                title:`no pusiste destruir ningun barco`
            })
        }else{
            if(hundido===1){
                Swal.fire({
                    icon:"success",
                    imageUrl: urlNavio ,
                    title: `lograste destruir ${hundido} barco`
                })
            }else{
                Swal.fire({
                    icon:"success",
                    imageUrl: urlNavio ,
                    title: `lograste destruir ${hundido} barcos`
                })
            }
        }
      
       
    },1000)



  }



let time =20
let tiempoDeJuego = setInterval(()=>{
time-- ; 
tiempo.innerText = `tiempo:  ${time}  segundos`
if(time=== 0){
    endGame()

}
}, 1000)



function createDivs() {
    let arrayBoat= []
    
    
        //creacion y asignacion del tablero 
        
        for (let i = 1; i < 7; i++) {
            for (let j = 1; j < 11; j++) {
             let div = document.createElement('div')
                div.className = 'cord   '
                containerDiv.appendChild(div)
                arrayDiv.push(div) 
            }
        }
        for(i =1 ; i<=10 ; i++){
           let index = Math.round(Math.random()*60)    
            arrayBoat.push(index)
            
           console.log(arrayDiv[index])

        
            arrayDiv[index].addEventListener(('click'), ()=>{
                console.log('click')
                if (arrayBoat.includes(index)) {   
                        hundido++
                        arrayDiv[index].classList.add('win');
                        arrayDiv[index].disabled = true  ;
                        arrayDiv[index].style.pointerEvents = 'none';
                        arrayDiv[index].style.opacity = '50%';
                        puntos.innerText=`puntaje: ${hundido*10}`
                }
              
            })
     
    }


    

}

createDivs()


