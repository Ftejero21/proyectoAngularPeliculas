import { Component, OnInit,Input } from '@angular/core';
import { EntradaPropia } from 'src/app/Modelo/EntradaPropia';

@Component({
  selector: 'app-entradas-propias2',
  templateUrl: './entradas-propias2.component.html',
  styleUrls: ['./entradas-propias2.component.css']
})
export class EntradasPropias2Component implements OnInit {
  @Input()
  public entrada!:EntradaPropia
  constructor() {
    this.entrada = {
      title:"",
      resume:""
    }
   }

  ngOnInit(): void {
  }

}
