export class Cancion{
    protected titulo:string
    protected genero:string
    private autor:string

    getAutor(){
        return this.autor
    }
    setAutor(nuevoAutor:string){
        return this.autor=nuevoAutor
    }
    MostrarDatos(){
        return `Nombre: ${this.titulo} \nGenero: ${this.genero} \nautor ${this.autor}`
    }

    constructor(titulo:string, genero:string){
        this.titulo=titulo
        this.genero=genero
        this.autor=""
    }
}