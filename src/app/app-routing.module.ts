import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasPropiasComponent } from './entradas-propias/entradas-propias.component';
import { JsonPlaceComponent } from './json-place/json-place.component';
import { ListaComponent } from './lista/lista.component';
import { ListadoEntradaComponent } from './listado-entrada/listado-entrada.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeliculasComponent } from './Peliculas/peliculas/peliculas.component';
import { VermasComponent } from './vermas/vermas.component';

const routes: Routes = [
  {path: '',component:PeliculasComponent},
  {path:'lista',component:ListaComponent},
  {path:'vermas/:id',component:VermasComponent},
  {path:'entrada',component:ListadoEntradaComponent},
  {path:'placeHolder',component:JsonPlaceComponent},
  {path:'entradasPropias',component:EntradasPropiasComponent},
  {path: '**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
