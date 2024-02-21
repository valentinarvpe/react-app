import { PropTypes } from "prop-types"
import { ProductoDetail } from "./ProductoDetail"

export const ProductGrid = ({handlerProductSelected, handlerRemove, productos = []}) => {
    return (
        <>
         <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
            {productos.map( producto => {
                    return <ProductoDetail 
                    handlerProductSelected={handlerProductSelected}
                    handlerRemove={handlerRemove} 
                    producto={producto} 
                    key={producto.nombre}/>
                })}
            </tbody>
        </table>
        </>
    )
}

ProductGrid.propTypes = {
    productos: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}