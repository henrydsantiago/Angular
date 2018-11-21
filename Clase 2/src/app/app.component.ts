import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Clase2'
  // width = 200
  // visible = false

  // cursos=[{nombre: "Henry", visible: true},
  // {nombre: "Jose", visible: false},
  // {nombre: "Alexander", visible: true}]

  cursos:Curso[]=[
    new Curso("JavaScript", 1500),
    new Curso("TypeScript", 2000),
    new Curso("Angular", 3000),
    new Curso("Ionic", 4000)
  ]

  //Eliminar Curso
  public eliminarCurso(curso:Curso) {
    console.log(curso)
    let pos = this.cursos.indexOf(curso)
    this.cursos.splice(pos,1)
    console.log(this.cursos)
  }

  //Agregar Curso
  /**
   * Agregar Curso
   */
  public agregarCurso() {
    let nombre = prompt("Ingrese el nombre del curso")
    let precio = prompt("Ingrese el precio del curso")
    this.cursos.push(new Curso(nombre, parseInt(precio)))
  }

  public key(evt){
    console.log(evt.key)
  }

}

class Curso {
  nombre:String
  precio:number

  constructor(name:String, price:number) {
    this.nombre=name;
    this.precio=price;
  }
}
