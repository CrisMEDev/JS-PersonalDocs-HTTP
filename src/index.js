
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch( jokeUrl ).then( respuesta => {
    console.warn('Respuesta');
    console.log(respuesta);     // Almacena información sobre la peticion hecha

    respuesta.json().then( data => {        // En lugar de la data se podria aplicar desestructiracion ({ id, value }) 
        console.warn('Body de la respuesta');
        console.log(data);

        console.warn('Valores que necesito');
        console.log(data.id);
        console.log(data.value);
    });
});

