
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServicioService } from 'src/app/Servicios/pelicula-servicio.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  imagen:any = "https://image.tmdb.org/t/p/w500";
  pagina:any;
  Peliculas!:any[];
  cantidad:any
  cargando:boolean = true;
  active:boolean = false;
  titulo:string = "Peliculas";
  search:string = "";
  constructor(private service:PeliculaServicioService , private router:Router) { }

  ngOnInit(): void {
    this.mostrarPeliculas();
    this.verPeli();
    
  }

  verPeli(){
    this.Peliculas = []
    this.pagina = 1
      this.service.getPeliculaForName(this.search).subscribe((data:any) =>{
        console.log(data.results)
        this.Peliculas = data.results;
        this.search = ""
      })
    
    
  }

  mostrarPeliculas():void{
    this.pagina = 1
    this.service.getPeliculas(this.pagina).subscribe((data:any) =>{
      console.log(data.results);
      this.pagina = data.page;
      this.Peliculas = data.results;
      this.cantidad = data.total_results;
      this.cargando = false;
      this.titulo = "Peliculas"
    })
  }

  mostrarPeliculasComedia(){
    this.pagina = 1
    this.Peliculas = [];
     this.service.getPeliculasComedia(this.pagina).subscribe((data:any) =>{
      console.log(data.results);
      this.pagina = data.page;
      this.Peliculas = data.results;
      this.cantidad = data.total_results;
      this.cargando = true;
      this.titulo = "Peliculas De Comedia";
    })
  }

  mostrarPeliculasTeatro(){
    this.pagina = 1
    this.Peliculas = [];
     this.service.getPeliculasTeatro(this.pagina).subscribe((data:any) =>{
      console.log(data.results);
      this.pagina = data.page;
      this.Peliculas = data.results;
      this.cantidad = data.total_results;
      this.cargando = true;
      this.titulo = "Peliculas De Teatro";
    })
  }

  mostrarPeliculasDrama(){
    this.pagina = 1
    this.Peliculas = [];
     this.service.getPeliculasDrama(this.pagina).subscribe((data:any) =>{
      console.log(data.results);
      this.pagina = data.page;
      this.Peliculas = data.results;
      this.cantidad = data.total_results;
      this.cargando = true;
      this.titulo = "Peliculas De Drama";
    })
  }

  mostrarPeliculasNinos(){
    this.pagina = 1
    this.Peliculas = [];
     this.service.getPeliculasNinos(this.pagina).subscribe((data:any) =>{
      console.log(data.results);
      this.pagina = data.page;
      this.Peliculas = data.results;
      this.cantidad = data.total_results;
      this.cargando = true;
      this.titulo = "Peliculas Para Niños";
    })
  }



 adelante(){
    this.pagina += 1;
    this.Peliculas = [];
    this.service.getPeliculas(this.pagina).subscribe((data:any) =>{
      this.Peliculas = data.results
    })
 }

 atras(){
    if(this.pagina > 1){
      this.pagina -= 1;
      this.Peliculas = [];
      this.service.getPeliculas(this.pagina).subscribe((data:any) =>{
        this.Peliculas = data.results
      })
    }else{
      return;
    }
 }

  vermas(id:string){
      this.router.navigate(["vermas",id]);
  }

  guardarPelicula(key:string,pelicula:object){

      this.service.guardarPelicula(key,pelicula);
      alert("pelicula guardada")


  }

  



}
