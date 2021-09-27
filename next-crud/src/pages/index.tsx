import Button from "../components/Buttom"
import Layout from "../components/Layout"
import Tabela from "../components/tabela"
import Form from "../components/Form"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebase/db/colecaoCliente"
import ClienteRepositorio from "../core/clienteRepositorio"
               
import { useEffect, useState } from "react"


export default function Home() {


const repo: ClienteRepositorio  = new ColecaoCliente()


  const [cliente , setCliente ] = useState<Cliente>(Cliente.vazio())
  
  const [clientes , setClientes ] = useState<Cliente[]>([])

  const [Visible, setVisible] = useState<'table' | 'form'>()


   useEffect(all, [])

   function all(){
    repo.all().then(clientes =>  {
      setClientes(clientes)
      setVisible('table')
    })
   }


  function clienteSelecion() {
    setCliente(cliente)
    setVisible('form')
  }

  function newCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisible('form')
  }

  function clienteDelete(cliente: Cliente) {
    console.log('foi');
  }

 function saveCliente (cliente: Cliente) {
    repo.save(cliente);
    setVisible('table')
 }





  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

      <Layout titulo="App Crud Next JS and Firebase" >
        {Visible === 'table' ? (
          <>
            <div color="green" className="flex justify-end">
              <Button onClick={newCliente} className="mb-4">Novo Usuario</Button>
            </div>
            <Tabela clientes={clientes} clienteSelecion={clienteSelecion} clienteDelete={clienteDelete} />
          </>
        ) : (
          <Form cliente={cliente} clienteMudou={saveCliente} cancelado={() => setVisible('table')} />
        )}
      </Layout>
    </div>

  )
}
