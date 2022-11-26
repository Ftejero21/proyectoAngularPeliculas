import { Component, OnInit } from '@angular/core';
import { PeliculaServicioService } from '../Servicios/pelicula-servicio.service';

@Component({
  selector: 'app-json-place',
  templateUrl: './json-place.component.html',
  styleUrls: ['./json-place.component.css']
})
export class JsonPlaceComponent implements OnInit {

  data:any[] = []
  loading:boolean = true
  constructor(private service:PeliculaServicioService) { }

  ngOnInit(): void {
    this.service.getDataPlaceHolder().subscribe((data:any) =>{
      
      this.data = data;
      console.log(this.data)
      this.loading = false
    })
  }

}
