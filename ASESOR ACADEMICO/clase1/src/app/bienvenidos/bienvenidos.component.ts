import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {

  fotoPinguino = "./assets/penguins.jpg"
  lorem = `Lorem ipsum dolor sit amet consectetur adipisicing 
  elit. Minima quo, amet necessitatibus accusamus repellendus 
  voluptates optio natus obcaecati, consequuntur ducimus tempora
   excepturi. Perspiciatis distinctio repellat cupiditate, ex 
   minima enim aliquid? ${this.fotoPinguino}`;

  

  constructor() { }

  ngOnInit() {
  }

}
