import { Persona } from "./Ejercicio5.1"

export class Empleado extends Persona{
    private sueldo:number
    MostrarDatos(): string {
        return `Nombre Completo : ${this.nombre} ${this.apellido} \nDireccion: ${this.direccion}\nTelefono: ${this.telefono} \nEdad: ${this.edad}`
    }
    CargarSueldo(sueldo:number){ //get sueldo
        if (sueldo>0){
            this.sueldo=sueldo
            return `Sueldo Asignado con Exito \nEl sueldo de ${this.nombre} sera de $${sueldo.toFixed(2)}`
        }
        else {
            return `Ingrese una cantidad valida`
        }
        
    }
    ImprimirSueldo(){ 
        return `${this.nombre}, Su sueldo actual es de: $${this.sueldo.toFixed(2)}`
    }
    constructor(Nombre:string, Apellido:string, Direccion:string, Telefono:string, Edad:number){
        super(Nombre, Apellido, Direccion, Telefono, Edad)
        this.sueldo=0 //el sueldo se modifica en cargar sueldo
    }

}