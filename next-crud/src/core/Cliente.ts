export default class Cliente {
    //O # representa um atributo privado nativo do JS (similar ao private do TypeScript)
     #id : string;
     #name : string;
     #idade : number;

    constructor( name : string, idade : number, id = null ) {
        this.#name = name;
        this.#idade = idade;
        this.#id = id;
    }
    static vazio() { return new Cliente('', 0)}


    get id() { return this.#id; }
    get name() { return this.#name; }
    get idade() { return this.#idade; }


}