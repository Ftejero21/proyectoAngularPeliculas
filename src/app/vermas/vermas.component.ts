import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Pelicula } from '../Modelo/pelicula';
import { Video } from '../Modelo/video';
import { PeliculaServicioService } from '../Servicios/pelicula-servicio.service';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {
  
  peliculas!:Pelicula
  video!:Video
  video2:any[] = [1]
  id = this.route.snapshot.params['id'];
  imagen:any = "https://image.tmdb.org/t/p/w500";
  constructor(private route:ActivatedRoute,private service:PeliculaServicioService) { }

  ngOnInit(): void {
    this.cogerpeli();

    this.cogerVideo();
  }

  cogerpeli(){
    
    this.peliculas = new Pelicula();
    this.service.getPeliculaforid(this.id).subscribe((data:any) =>{
      this.peliculas = data;
      
      console.log(this.peliculas)
      
    })
  }

  guardarPelicula(key:string,pelicula:object){

    this.service.guardarPelicula(key,pelicula);
    alert("pelicula guardada")


  }

  cogerVideo(){
    this.service.getVideo(this.id).subscribe((data:any) =>{
      console.log(data.results[0])
      this.video2 = data.results[0];
    })
  }

}
