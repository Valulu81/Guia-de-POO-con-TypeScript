export class Calculadora {
    num1: number
    num2: number

    Sumar(){
        let resultado= Math.round(this.num1+this.num2)
        return `La suma de ${this.num1} y ${this.num2} da: ${resultado.toFixed(2)}`
    }

    Restar(){
        let resultado= this.num1-this.num2
        return `La resta de ${this.num1} y ${this.num2} da: ${resultado.toFixed(2)}`
    }

    Multiplicar(){
        let resultado= this.num1*this.num2
        return `La Multiplicacion de ${this.num1} y ${this.num2} da: ${resultado.toFixed(2)}`
    }

    Dividir(){
        if(this.num2==0){
            return "No se puede dividir entre 0"
        }
        else
        {
            let resultado= this.num1/this.num2
            return `La Divicion de ${this.num1} y ${this.num2} da: ${resultado.toFixed(2)}`
        }
    }

    Potencia(){
        let resultado= Math.pow(this.num1,this.num2)
        return `La Potencia de ${this.num1} a ${this.num2} da: ${resultado.toFixed(2)}`
    }

    Factorial(){
        let resultado1=1//sacando dos factoriales
        let resultado2=1
        if(this.num1<0 || this.num2<0){
            return "No existe factorial de 0"
        }
        else{
            for (let i =1; i<=this.num1;i++){
                resultado1*=i
            }
            for (let i =1; i<=this.num2;i++){
                resultado2*=i
            }
        }
        return `El factorial de ${this.num1}  es: ${resultado1} y de ${this.num2} es: ${resultado2}`
    }

    constructor(num1:number, num2:number){
        this.num1=num1
        this.num2=num2
    }
}