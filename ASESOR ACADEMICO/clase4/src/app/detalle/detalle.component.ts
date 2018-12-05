import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id:string;
  // public categoria:string;
  // public subcategoria:string;
  public pelicula:any

  constructor(private parametros: ActivatedRoute,
  private _peliculaServices:PeliculaService) { }

  ngOnInit() {
    
    
    this.id = this.parametros.snapshot.paramMap.get('id')
    // this.categoria = this.parametros.snapshot.paramMap.get('categoria')
    // this.subcategoria = this.parametros.snapshot.paramMap.get('subcategoria')
    // console.log(this.id)
    // console.log(this.categoria)
    // console.log(this.subcategoria)
    this.pelicula = this._peliculaServices.getPeliculasByID(this.id);
  }

}
