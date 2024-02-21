import React from "react";
import { useEffect, useState } from "react";
import { create, findAll, listProductos, remove, update } from "../services/ProductoService";
import { ProductGrid } from "./ProductoGrid";
import { ProductoForm } from "./ProductoForm";

export const ProductoApp = () => {
    const [productos, setProductos] = useState([]);
    //TODO -> Primero se crean las variables o declaraciones necesarias o UseState
    // * Luego van useEffect y luego los handler

    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: 0,
        nombre: '',
        descripcion: '',
        precio: ''
    });

    const getProducts = async () => {
        const result = await findAll();
        setProductos(result.data._embedded.products);
    }

    useEffect(() => {
       // const res = listProductos();
        //setProductos(res)
        getProducts();
    }, []);

    //* handler (método) para añadir nuevo producto o actualizar producto 
    const handlerAddProduct = async (producto) => {
        // ? Valida si es un nuevo producto
        if (producto.id > 0) {
            const response = await update(producto);

            setProductos(productos.map(prod => {
                if (prod.id == producto.id) {
                    //? Devuelve producto actualizado en frontend --> return { ...producto }
                    // ?Devuelve producto actualizado en backend
                    return {...response.data}
                }
                return prod;
            }))
        } else {
            //? Agrega nuevo producto a nivel frontend setProductos([...productos, { ...producto, id: new Date().getTime() }])
            //? Agrega nuevo producto a nivel backend
            const response = await create(producto);
            setProductos([...productos, { ...response.data }]);
            
        }
    }

    //* Nuevo handler para remover producto
    const handlerRemoveProduct = (id) => {
        remove(id);
        setProductos(productos.filter(producto => producto.id != id))
    }

    //* Handler que selecciona el producto
    const handlerProductSelected = (producto) => {
        setProductoSeleccionado({ ...producto })
    }

    //TODO -> Devuelve el jsx (html) de la página implementando los componentes necesarios
    return (
        <>
            <div className="container my-4">
                <h2>Listado de productos</h2>
                <div className="row">
                    <div className="col">
                        <ProductoForm handlerAdd={handlerAddProduct}
                            productSelected={productoSeleccionado} />
                    </div>
                    <div className="col">
                        {
                            productos.length > 0 ?
                        <ProductGrid productos={productos}
                            handlerRemove={handlerRemoveProduct}
                            handlerProductSelected={handlerProductSelected} /> 
                        : 
                        <div className="alert alert-warning">
                            No hay productos en el sistema
                        </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}