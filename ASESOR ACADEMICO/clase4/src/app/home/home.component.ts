import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas:any[]
  public peliculasAPI:any[]

  constructor(private _peliculaServices:PeliculaService) { }

  ngOnInit() {
    let observable = this._peliculaServices.getPeliculasAPI()
    
    observable.subscribe((result:any)=>{
      this.peliculasAPI = result.Search
    })
    this.peliculas = this._peliculaServices.getPeliculas()
  }

}
