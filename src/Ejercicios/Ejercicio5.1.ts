export abstract class Persona{
    protected nombre:string
    protected apellido:string
    protected direccion:string
    protected telefono:string
    protected edad:number

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