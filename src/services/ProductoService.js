import axios from "axios";

const initProductos = [
    {
        id: 1,
        nombre : 'celular',
        descripcion : 'IPHONE',
        precio: 1000000
    },
    {
        id:2,
        nombre : 'telvisor',
        descripcion : 'LG',
        precio: '500000'
    }
];

const baseUrl = 'http://localhost:8080/productos';
export const listProductos = () => {
    return initProductos;
}

//* Método para trer la información desde el backend
export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;   
    } catch (error) {
        console.log(error);
        return null;
    }
};

//* Método para crear nuevo producto
export const create = async ({nombre, descripcion, precio}) => {
    try {
        const response = await axios.post(baseUrl,
            {nombre, descripcion, precio}
            );
            return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};

//* Método para actualizar el producto
export const update = async ({id, nombre, descripcion, precio}) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`,
            {nombre, descripcion, precio}
            );
            return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const remove = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
        return null;
    }
}