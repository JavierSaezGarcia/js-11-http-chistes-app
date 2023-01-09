// Metodo propio de Javascript no hay que importar nada
// fetch(url endopoint)
// Relacion de respuestas (responses) http:
    // 200 en adelante= que todo lo hicimos bien
    // 400 en adelante = que algo hicimos mal y nos devuelve un error
    // 500 en adelante: problemas de servidor que nada tiene que ver con lo que hemos hecho ( servidor caido, que no lo encuentra,  etc)
// const chisteUrl = "https://api.chucknorris.io/jokes/random";

// *** de forma larga ***********
// fetch( chisteUrl ).then( respuesta => {

//     respuesta.json()
//         .then( ({ id, value }) => {
//             console.log( id );
//             console.log( value );
//         })
//     console.log( respuesta );

// });

// **** de forma corta con anidamientos de pronmesas ( tips ) **********
// Podemos encadenando tantas promesas que sean necesarias

// fetch( chisteUrl )
//     .then( resp => resp.json() ) // devuelve otra promesa
//     .then( ({ id, value }) => {  // por eso podemos anidar otro then porque devuelve otra promesa
//         console.log( id, value );
//     } );


// ******** ahora ya trabajamos con el archivo provider y no con lo anterior ********

import { init } from "./js/chistes-page";


init();               
