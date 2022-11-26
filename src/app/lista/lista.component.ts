import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public lista:any[] = [];
  imagen:any = "https://image.tmdb.org/t/p/w500";
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.verPeliculasStorage();

  }

  verPeliculasStorage(){
    let peliculas = JSON.parse(localStorage.getItem('peliculas2') || '[]');
    this.lista = peliculas
  }

  eliminarPelicula(id:any){
    this.lista = this.lista.filter((item:any) => item.id !== id);
    localStorage.setItem('peliculas2', JSON.stringify(this.lista));
    this.verPeliculasStorage();
  }

  vermas(id:string){
    this.router.navigate(["vermas",id]);
}


}
