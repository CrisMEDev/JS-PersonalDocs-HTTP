import { obtenerChiste } from './http-provider';


// Referencias
const body              = document.body;
let btnNuevoChiste, olChistes; // No se asignan a su selector porque aun no existen los elementos
                               // sino hasta despues de que crearChisteHtml se ejecute, let para poder cambiar el apuntador

const crearChistesHtml = () => {
    const html = `
        <h2 class="mt-5">Chistes</h2>
        <hr>

        <button class="btn btn-primary"> Nuevo chiste </button>

        <ol class="mt-2 list-group">
            
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}


const eventos = () => {
    olChistes       = document.querySelector('ol');
    btnNuevoChiste  = document.querySelector('button');

    btnNuevoChiste.addEventListener('click', async() => {
        btnNuevoChiste.disabled = true; // Impide más peticiones http hasta que se resuelva la primera
        mostrarChiste( await obtenerChiste() );
        btnNuevoChiste.disabled = false;
    });
}

// chiste { id, value }
const mostrarChiste = ( chiste ) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `
        <strong>${chiste.id}</strong>:${chiste.value}
    `;

    olItem.classList.add('list-group-item');    // Se agrega la clase del bootstrap

    olChistes.append(olItem);
}



export const init = () => {    // Función que renderiza todo el procedimiento de la página chistes
    crearChistesHtml();
    eventos();
}


