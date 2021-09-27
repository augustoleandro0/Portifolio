import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    save(cliente: Cliente) : Promise<Cliente>
    delete(cliente: Cliente) : Promise<void>
    all() : Promise<Cliente[]>
} 