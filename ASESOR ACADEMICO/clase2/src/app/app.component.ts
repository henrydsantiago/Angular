import { Component } from '@angular/core';
import { CustomPromisify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadif1';
  width = 55
  visible = false;
  variablePrueba = "Hola mundo"

  // cursos = [
  //   { nombre: "Jose", visible: true },
  //   { nombre: "Luis", visible: false },
  //   { nombre: "Miguel", visible: true }
  // ]

  cursos: Curso[] = [
    new Curso("JavaScript", "1500"),
    new Curso("Java", "2800"),
    new Curso("HTML", "800"),
    new Curso("CSS", "17"),
    new Curso("Word", "600"),
    new Curso("typescript", "500"),
    new Curso("excel", "10")
  ];

  /**
   * agregarAlumno
   */
  private agregarAlumno(evt) {
    console.log(evt)
    let nombre = prompt("Ingrese el nombre del curso:");
    let precio = prompt("Ingrese el precio del curso:")
    this.cursos.push(new Curso(nombre, precio))
  }

  public key(evt){
    console.log(evt.key)
  }

  /**
   * elimnarCurso
   */
  public elimnarCurso(curso: Curso) {
    console.log(curso)
    let pos = this.cursos.indexOf(curso);
    this.cursos.splice(pos, 1)
    console.log(this.cursos)

  }

}

class Curso {
  nombre: string;
  precio: string;

  constructor(nombre: string, precio: string) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
