import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
let counter = 0;

const crearChistesHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Cargar chiste</button>
    <ol class="mt-2 list-group"></ol>
    `;

    const divChistes = document.createElement('div');

    divChistes.innerHTML = html;

    body.append( divChistes );

}

const eventos = () => {

    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro.disabled = false;

    })

}

// { id, value }
const dibujarChiste = ( chiste ) => {
    counter += 1;
    const olItem = document.createElement('li');    
    olItem.innerHTML = `<b>${ counter }.- ${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');    
    olList.append( olItem );


}
export const init  = () => {
    crearChistesHtml();
    eventos();
}