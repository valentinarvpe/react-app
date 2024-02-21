import { useEffect, useState } from "react";
import { listClientes } from "../services/ClienteService";

export const ClienteApp = () => {

    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        const res = listClientes();
        setClientes(res);
    }, []);

    return (
        <>
        <h1>Listado de Clientes</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
            {clientes.map( cliente => {
                    return(
                        <tr key={cliente.nombre}>
                        <td> {cliente.nombre} </td>
                        <td> {cliente.apellido} </td>
                        <td> {cliente.correo} </td>
                        </tr>    
                    )
                    
                })}
            </tbody>
        </table>

        </>
    )
}