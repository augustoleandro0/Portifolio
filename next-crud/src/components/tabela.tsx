import Cliente from "../core/Cliente"
import { iconeTrash, iconeEdit } from "./icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecion?: (cliente: Cliente) => void
    clienteDelete?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
      
    const exibirActions = props.clienteSelecion || props.clienteDelete 

    function renderHead() {
        return (
            <tr>
                <th className="text-left p-4">Cliente</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">idade</th>
                {exibirActions ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderDados() {
        //chamada da props de clientes com um changeOptions para verificar se ha dados de props
        return props.clientes?.map((cliente, i) => {
            return (
                //chave unica de uma lista para evitar reclaçãoes
                <tr key={cliente.id} className={`${ i % 2 === 0 ?' bg-purple-100' : 'bg-purple-200'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.name}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    { exibirActions ? renderActions(cliente) : false}
                </tr>
            )
        })
    }
    function renderActions(cliente : Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecion ? (
                     <button onClick={() => props.clienteSelecion?.(cliente)} className="flex justify-center items-center text-green-600 rounded-full p-2  m-1 hover:bg-purple-50">{iconeEdit}</button>
                ): false}
                 {props.clienteDelete ? (
                    <button  onClick={() => props.clienteDelete?.(cliente)}  className="flex justify-center items-center text-red-500 rounded-full p-2  m-1 hover:bg-purple-50">{iconeTrash}</button>
                ): false}
            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
                {renderHead()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}