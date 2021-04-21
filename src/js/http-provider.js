
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// fetch( jokeUrl ).then( respuesta => {
//     console.warn('Respuesta');
//     console.log(respuesta);     // Almacena información sobre la peticion hecha

//     respuesta.json().then( data => {        // En lugar de la data se podria aplicar desestructiracion ({ id, value }) 
//         console.warn('Body de la respuesta');
//         console.log(data);

//         console.warn('Valores que necesito');
//         console.log(data.id);
//         console.log(data.value);
//     });
// });

// fetch( jokeUrl )
//     .then( resp => resp.json() )
//     .then( ({ id, value }) => console.log( id, value ) );    // Estas lineas son exactactamente los mismo al codigo superior comentado

const obtenerChiste = async() => {

    try{
        const resp = await fetch( jokeUrl );
    
        if ( !resp.ok ) throw 'No se pudo realizar la petición';

        const { icon_url, id, value } = await resp.json();   // Para obtener los datos que nos interesan del body
    
        return { icon_url, id, value };
    } catch( err ){

        throw err;

    }


}

const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await resp.json();
    
    return usuarios;

}

export {
    obtenerChiste,
    obtenerUsuarios
}

