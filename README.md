# <CambiarFondo>

## Descripción

Este proyecto contendra codigo con javascript vanilla, para practicar temas del Dom y modificacion de este con Javascript.
Lo basico que se necesita para entender este proyecto es lo siguiente:

* Manipulacion del Dom: Acceder a elementos del HTML y modificarlos con Javascript( incluyendo estilos css )
* Manejo de Bucles: FOR
* Arrays: Saber como funcionan, mas que nada el indice de estas y como llegar a un indice de un array
* Math.floor() y Math.random(): Sera necesario para crear numeros del largo del array, para usarlos como indice.

## Explicacion a Obtencion de Indices

Algo que puede servir al momento de recrear este proyecto, es la parte mas complicada que es crear el valor hexadecimal. Para esto ire paso a paso explicando la teoria, ya que la practica esta en el codigo.

Mas alla de las variables que se inicializan, hay que entender el FOR, el Math.floor() y el Math.random() y como se obtiene un valor de un ARRAY.

Si nos vamos al codigo el FOR lo que hara es dar "6 vueltas". Ya que un numero hexadecimal se compone de 6 digitos. Luego se va a crear una funcion fuera del FOR que contendra el Math.floor que sirve para redondear y un Math.random, que se va a multiplicar por el largo del Array.

Ahora tomando como ejemplo el array del problema hexadecimal, podemos tener 16 valores, pero al hacer el Math.floor,
con el Math.random le estamos diciendo que el numero maximo que nos puede dar es de 0 al 15, y el indice del ultimo elemento del array osea "F", es 15.

Comprendiendo estas 2 cosas, cada vez que el FOR de una vuelta nos dara un valor del array totalmente random, primero se ejecuta la funcion obtenerNumeroRandom, se obtiene la posicion, de esa posicion se saca un valor y se va sumando a la variable hex=+, y este proceso ocurrira 6 veces, asi obteniendo el valor hexadecimal.




