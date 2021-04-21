// import { init } from './js/jokes-page';
// import { init } from "./js/usuarios-page";
import * as CRUD from "./js/crud-provider";     // Toma todo lo que está exportado y asignale el alias CRUD

// init();

CRUD.getUsuario( 1 ).then( console.log );       // Lee un usuario de una peticion http

CRUD.crearUsuario({
    name: 'Cristian',
    job:  'Programmer'
}).then( console.log );


