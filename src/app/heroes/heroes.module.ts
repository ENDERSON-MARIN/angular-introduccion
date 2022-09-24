import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    /* donde se declaran los componentes del modulo */ HeroeComponent,
    ListadoComponent,
  ],
  exports:[
    /* que cosas quiero hacer publicas o visibles fuera de este modulo */
    ListadoComponent
  ],
  imports:[
    /* donde se importan los modulos necesarios */
    CommonModule
  ]
})
export class HeroesModule {}
