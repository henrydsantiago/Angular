import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'clase3';

  @ViewChild('nombreHtml') 
  public inputNombre

  nombre: string = "";
  apellido: string = "";

  /**
   *
   */
  constructor() {
    console.log(document.getElementById('nombreHtml2'));
    console.log(this.inputNombre);


  }

  ngOnInit(): void {
    console.log(document.getElementById('nombreHtml2'));
    console.log(this.inputNombre);
  }
}
