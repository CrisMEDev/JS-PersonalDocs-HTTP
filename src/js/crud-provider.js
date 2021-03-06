
const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    const resp = await fetch(`${ urlCRUD }/${ id }`);   // Por defecto se realiza la peticion GET
    const {data} = await resp.json();

    return data;
}

const crearUsuario = async( usuario ) => {
    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {  // Son una informacion adicional sobre la peticion que el backend puede ser que nos pida
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const updateUsuario = async( id, usuario ) => {
    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {  // Son una informacion adicional sobre la peticion que el backend puede ser que nos pida
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

const borrarUsuario = async( id  ) => {
    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'DELETE',
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';
}


export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    borrarUsuario
}

