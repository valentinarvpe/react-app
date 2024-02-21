import { PropTypes } from "prop-types"
export const ProductoDetail = ({handlerProductSelected, handlerRemove, producto = {} }) => {
    return (
        <tr>
            <td> {producto.nombre} </td>
            <td> {producto.descripcion} </td>
            <td> {producto.precio} </td>
            <td>
                <button className="btn btn-secondary btn-sm" onClick={() => handlerProductSelected(producto) }>
                    Editar
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(producto.id) }>
                    Remover
                </button>
            </td>
        </tr>
    )
}

ProductoDetail.propTypes = {
    producto: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}