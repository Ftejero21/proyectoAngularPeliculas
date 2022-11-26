import { Component, OnInit,Input } from '@angular/core';
import { Entrada } from 'src/app/Modelo/Entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada!:Entrada;
  constructor() { 
    this.entrada = {
      title: "",
      resumen: ""
    }
  }

  ngOnInit(): void {
  }

}
