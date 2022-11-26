import { Component, OnInit } from '@angular/core';
import { Entrada } from '../Modelo/Entrada';

@Component({
  selector: 'app-listado-entrada',
  templateUrl: './listado-entrada.component.html',
  styleUrls: ['./listado-entrada.component.css']
})
export class ListadoEntradaComponent implements OnInit {

  public listadoEntrada!:Entrada[]
  constructor() {
    this.listadoEntrada = [
      {
        title: "Introduccion a Angular",
        resumen:"En esta leccion realizaremos una pequeña introduccion al mundo de desarrollo con angular"
      },
      {
        title:"Typescript es un lenguaje tipado",
        resumen:"Breve recorrido por el lenguaje Typescript como base para desarrollar en Angular"
      
      },
      {
        title: "Componentes en Angular",
        resumen:"En esta leccion realizaremos Componentes en Angular"
      }

    ]
  }
   

  ngOnInit(): void {
  }

  public mostrarTitulo(title:String){
    alert(`Entrada seleccionada ${title}`);
  }

}
