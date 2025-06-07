type tipos = "Cuenta Corriente" | "Cuenta de Ahorro" | "Cuenta de inversion" | "Cuenta digital"
export class Cuenta{
    private nombre:string
    private cantidad:number
    protected tipoCuenta: tipos
    protected numCuenta:string

    Depositar(ingreso:number){
        if(ingreso<5){
            return "La cantidad depositada debe ser mayor a $5.00"
        }
        else {
            this.cantidad+=ingreso
            return `EL deposito se ha realizado correctamente \nCantidad depositada: $${ingreso.toFixed(2)} \nCantidad actual: $${this.cantidad.toFixed(2)}`//devuelve dos decimales
        }
    }

    Retirar(valor:number){
        if (valor>this.cantidad || valor<5){
            return`Cantidad insuficiente o valor a retirar insuficiente \nCantidad actual: ${this.cantidad} \n--La cantidad minima a retirar es de $5.00--`
        }
        else {
            this.cantidad-=valor
            return `Retiro exitoso! \nCantidad retirada: $${valor} \nCantidad restante: $${this.cantidad}`
        }
        
        
    }

    MostrarDatos(){
        return `--DATOS DE LA CUENTA-- \nPropietario: ${this.nombre} \nTipo de Cuenta: ${this.tipoCuenta} \nNumero de Cuenta: #${this.numCuenta} \nCantidad total: $${this.cantidad}`
    }

    constructor(name:string, cant:number, type:tipos, num:string){
        this.nombre=name
        this.cantidad=cant
        this.tipoCuenta=type
        this.numCuenta=num
    }
}