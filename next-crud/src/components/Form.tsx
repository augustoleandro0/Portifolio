import { useState } from "react"
import Imput from "./Imput"
import Cliente from "../core/Cliente"
import Buttom from "./Buttom"
interface FormProps {
    cliente: Cliente
    clienteMudou:  (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Form (props: FormProps) {
    const id = props.cliente?.id 
    const [name, setName] = useState(props.cliente?.name ?? '')
    const [age, setage] = useState(props.cliente?.age ?? 0)
    return(
        <div>
            {id ? (
                <Imput onlyReading text="Código" value={id}className="mb-4" />
            ) : false}
            <Imput text="nome" value={name}  onChange={setName} className="mb-4"/>
            <Imput text="age" type="number" value={age}  onChange={setage}/>
            <div className="flex justify-end mt-4" >
                <Buttom onClick={()=> props.clienteMudou?.(new Cliente(name, age, id))} color="blue">
                    {id ? 'Alterar' : 'Salvar'}
                </Buttom>
                <Buttom onClick={props.cancelado} className="ml-4">
                     Cancelar
                </Buttom>
            </div>
        </div>
    )
}