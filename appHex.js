// Para entender los esta seccion hay que entender que los colores hexadecimales son 6 digitos,
// en los cuales pueden ir numero o letas, en cuanto a numeros van del 0 al 9, y en letras desde
// la A a la F, por lo cual existen millones de convinaciones.

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>{

let hexColor = '#' // Se crea el  # para que al momento de rellenar los datos con el for ya aparesca como #00000 por ejemplo.

for (let i = 0; i < 6; i++) {
    hexColor += hex[obtenerNumeroRandom()]
}

color.textContent = hexColor
document.body.style.backgroundColor = hexColor

})

const obtenerNumeroRandom = () =>{
    return Math.floor(Math.random() * hex.length)
}

// Para entender mas esta situacion se puede comprender asi:
// 1) El Math.Floor con el Math.Random lo que haces es dar un numero que indicara la posicion de un elemento del array del 0 al 15.
// 2) Luego lo que hara el FOR, obtendra 6 posiciones, ejemplo, en la primera pasada puede obtener la posicion 15 segun la funcion obternerNumeroRandom
//    ,luego en la otra puede obtener la posicion 3, y asi hasta hacer el blucle 6 veces. Y al final dar un resultado de SEIS digitos