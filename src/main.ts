import './style.css'

import { CabeceraPagina } from './Ejercicios/Ejercicio1.ts'
import { Calculadora } from './Ejercicios/Ejercicio2.ts'
import { Cancion } from './Ejercicios/Ejercicio3.ts'
import { Cuenta } from './Ejercicios/Ejercicio4.ts'
import { Empleado } from './Ejercicios/Ejercicio5.2.ts'

//ejercicio 1 
let c = new CabeceraPagina()
c.Interlineado("Izquierda")
c.Obtener("Hola","green", "Algerian") //el color lo recibe como lo recibiria un style.css :)
c.Imprimir()

//Ejercicio 2
console.log("\n-----Ejercicio 2-----")
let calcu = new Calculadora(4,7)
console.log(calcu.Dividir())

//Ejercicio 3
console.log("\n-----Ejercicio 3-----")
let cancion = new Cancion("Abyss-From Kaiju", "Rock Alternativo")
cancion.setAutor("YUNGBLUD")
cancion.getAutor()
console.log(cancion.MostrarDatos())

//Ejercicio 4
console.log("\n-----Ejercicio 4-----")
let cuenta = new Cuenta("Valeria", 1000, "Cuenta Corriente", "7854125")
console.log(cuenta.Depositar(5))
console.log(cuenta.Retirar(2))
console.log(cuenta.MostrarDatos())

//Ejercicio 5
console.log("\n-----Ejercicio 5-----")
let empleado = new Empleado("Valeria", "Paredes", "#######", "0000-0000", 20)
console.log(empleado.CargarSueldo(200))
console.log(empleado.ImprimirSueldo())
console.log(empleado.MostrarDatos())



