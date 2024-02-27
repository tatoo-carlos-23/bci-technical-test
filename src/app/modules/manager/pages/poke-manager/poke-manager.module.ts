import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeManagerRoutingModule } from './poke-manager-routing.module';
import { PokeManagerComponent } from './poke-manager.component';


@NgModule({
  declarations: [
    PokeManagerComponent
  ],
  imports: [
    CommonModule,
    PokeManagerRoutingModule
  ]
})
export class PokeManagerModule { }
