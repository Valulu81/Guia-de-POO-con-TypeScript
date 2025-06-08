type Inter = "Izquierda" | "Centrado" | "Derecha"
type fuentes = "Times New Roman"| "Algerian" | "Baskerville Old Face" | ""
export class CabeceraPagina{
    protected titulo:string
    protected fuente:fuentes
    protected color:string
    protected interlineado:string

    Obtener(title:string, colour:string, font:fuentes){
        this.titulo=title
        this.fuente=font
        this.color=colour
    }

    Interlineado(inter:Inter){
        switch(inter){
            case "Izquierda":
                this.interlineado="left"
                break
            case "Centrado":
                this.interlineado="center"
                break
            case "Derecha":
                this.interlineado="right"
                break
        }
        
    }

    Imprimir(){
        return document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div>
        <h1 class= "titulo">${this.titulo}</h1>
        </div>
        <style>
            .titulo{
                color: ${this.color};
                text-align: ${this.interlineado};
                font-family: ${this.fuente};
            }

        </style>`
        
    }

    constructor(){ //asi no pide datos en la clase, ya que se pide en el metodo
        this.titulo = "";
        this.fuente = "";
        this.color = "";
        this.interlineado = "";
    }
}