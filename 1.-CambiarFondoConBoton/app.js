const colores = ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', ()=>{
    //Obtener un numero random entre 0 y 3, haciendo uso del index del array llamado colores
    const randomNumeber = obtenerNumeroRandom()
    console.log(randomNumeber);
    document.body.style.backgroundColor = colores[randomNumeber]
    color.textContent = colores[randomNumeber]
})


const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random()*colores.length )
    
    // Con Math.floor se redondea
    // Se multiplica por el largo del array para que no sea de 1 para arriba y que pueda dar cero
}