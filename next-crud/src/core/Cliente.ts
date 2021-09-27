export default class Cliente {
    //O # representa um atributo privado nativo do JS (similar ao private do TypeScript)
     #id : string;
     #name : string;
     #age : number;

    constructor( name: string, age: number, id: string = null) {
        this.#name = name;
        this.#age = age;
        this.#id = id;
    }
    static vazio() { return new Cliente('', 0)}


    get id() { return this.#id; }
    get name() { return this.#name; }
    get age() { return this.#age; }


}