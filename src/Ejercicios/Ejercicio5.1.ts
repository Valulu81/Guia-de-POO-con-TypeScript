export abstract class Persona{
    nombre:string
    apellido:string
    direccion:string
    telefono:string
    edad:number

    Mayoria(){
        if (this.edad>17){
            return `Eres mayor de edad`
        }
        else{
            return `Eres menor de edad`
        }
    }

    abstract MostrarDatos():string

    constructor(Nombre:string, Apellido:string, Direccion:string, Telefono:string, Edad:number){
    this.nombre=Nombre
    this.apellido=Apellido
    this.direccion=Direccion
    this.telefono=Telefono
    this.edad=Edad
    }
}