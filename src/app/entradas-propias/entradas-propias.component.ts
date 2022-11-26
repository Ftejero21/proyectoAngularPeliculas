import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Entrada } from '../Modelo/Entrada';
import { EntradaPropia } from '../Modelo/EntradaPropia';

@Component({
  selector: 'app-entradas-propias',
  templateUrl: './entradas-propias.component.html',
  styleUrls: ['./entradas-propias.component.css']
})
export class EntradasPropiasComponent implements OnInit {

  public listaEntrada!:EntradaPropia[]
  constructor() { }

  ngOnInit(): void {
    this.listaEntrada=[{
      title:"Accenture",
      resume:"Consultora multinacional encargada de la distribucion de distintos servicios de software"
    },
    {
      title:"NTT Data",
      resume:"Consultora encargada de distribuir distintos servicios de software como App WEB , Aplicaciones para dispositivos moviles etc"
    },
    {
      title:"Deloitte",
      resume:"Empresa encargada del soporte de todo tipo de servicios tecnologicos"
    }
  
  
  ]

    
  }

}
