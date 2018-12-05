import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas: any[] = [
    { id: 1, nombre: 'Thor', fecha: '2018' },
    { id: 2, nombre: 'Superman', fecha: '2016' },
    { id: 3, nombre: 'Hulk', fecha: '2001' },
    { id: 4, nombre: 'Avenger', fecha: '2012' },
    { id: 5, nombre: 'Hombre Araña', fecha: '2013' },
  ]


  constructor(private http: HttpClient) { }

  public getPeliculasAPI(){
    return this.http.get("http://www.omdbapi.com/?apikey=4eff56e&s=avenger")
  }

  public getPeliculas() {
    return this.peliculas
  }

  public getPeliculasByID(id) {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id === Number.parseInt(id)) {
        return this.peliculas[i]
      }


    }
  }

}
