import { useEffect, useState } from "react"
const initialDataForm = {
    id:0,
    nombre: '',
    descripcion: '',
    precio: ''
};

export const ProductoForm = ({ productSelected, handlerAdd }) => {
    const [form, setForm] = useState(initialDataForm);
    const { id, nombre, descripcion, precio } = form;

    useEffect(()=> {
        setForm(productSelected) 
    }, [productSelected])

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!nombre ||!descripcion || !precio ) {
                alert('Debe completar los datos del formulario')
                return;
            }
            handlerAdd(form);
            setForm(initialDataForm);
        }}>
            <div>
                <input
                    placeholder="Nombre"
                    className="form-control my-3 w-75"
                    name="nombre"
                    value={nombre}
                    onChange={(event) => setForm({
                        ...form,
                        nombre: event.target.value
                    })}
                />
            </div>
            <div>
                <input
                    placeholder="Descripción"
                    className="form-control my-3 w-75"
                    name="descripcion"
                    value={descripcion}
                    onChange={(event) => setForm({
                        ...form,
                        descripcion: event.target.value
                    })}
                />
            </div>
            <div>
                <input
                    placeholder="Precio"
                    className="form-control my-3 w-75"
                    name="precio"
                    value={precio}
                    onChange={(event) => setForm({
                        ...form,
                        precio: event.target.value
                    })}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    {id>0 ?'Actualizar' : 'Guardar'}
                </button>
            </div>
        </form>
    )
}