import { obtenerUsuarios } from './http-provider';


const body  = document.body;
let tbodyUsers;

let numUsuario = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios </h1>
    <hr>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody class="tbodyUsers">
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );


    tbodyUsers = document.querySelector('.tbodyUsers');
    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    numUsuario++;
    const html = `
        <td scope="col"> ${numUsuario}. </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbodyUsers.append(tr);  // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async() => {

    numUsuario = 0;

    crearHtml();

    ( await obtenerUsuarios() ).forEach( crearFilaUsuario );
    // const usuarios = await obtenerUsuarios();
    // for ( const usuario of usuarios ){
    //     crearFilaUsuario(usuario);
    // }

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

