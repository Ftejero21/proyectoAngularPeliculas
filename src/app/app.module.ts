import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import {HttpClientModule} from '@angular/common/http';
import { PeliculasComponent } from './Peliculas/peliculas/peliculas.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListaComponent } from './lista/lista.component';
import { VermasComponent } from './vermas/vermas.component';
import { ListadoEntradaComponent } from './listado-entrada/listado-entrada.component';
import { EntradaComponent } from './listado-entrada/entrada/entrada.component';
import { JsonPlaceComponent } from './json-place/json-place.component';
import { EntradasPropiasComponent } from './entradas-propias/entradas-propias.component';
import { EntradasPropias2Component } from './entradas-propias/entradas-propias2/entradas-propias2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    PeliculasComponent,
     NotfoundComponent,
     ListaComponent,
     VermasComponent,
     ListadoEntradaComponent,
     EntradaComponent,
     JsonPlaceComponent,
     EntradasPropiasComponent,
     EntradasPropias2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponentComponent]
})
export class AppModule { }
